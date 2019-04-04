import {
  CheckpointError,
  NoChallengeRequired,
  NotPossibleToResolveChallenge,
  Request,
  Session,
  WebRequest,
} from '../core';
import * as Bluebird from 'bluebird';
import { StatusCodeError } from 'request-promise/errors';

const SHARED_JSON_REGEXP = /window._sharedData = (.*);<\/script>/i;

type ChallengeMethod = 'email' | 'phone';

export class Challenge {
  constructor(
    protected readonly session: Session,
    protected readonly error: CheckpointError,
    protected readonly json,
  ) {}

  static async handleResponse(response, checkpointError: CheckpointError, defaultMethod: ChallengeMethod) {
    const session = checkpointError.session;
    let json;
    try {
      json = JSON.parse(response.body);
    } catch (e) {
      if (response.body.includes('url=instagram://checkpoint/dismiss')) throw new NoChallengeRequired();
      throw new TypeError('Invalid response. JSON expected');
    }
    session.challenge$.next(json);
    //Using html unlock if native is not supported
    if (json.challenge && json.challenge.native_flow === false) return this.resolveHtml(checkpointError, defaultMethod);
    //Challenge is not required
    if (json.status === 'ok' && json.action === 'close') throw new NoChallengeRequired();
    const apiChallengeUrl = `https://i.instagram.com/api/v1${checkpointError.json.challenge.api_path}`;
    //Using API-version of challenge
    switch (json.step_name) {
      case 'select_verify_method': {
        const selectResponse = await new WebRequest(session)
          .setMethod('POST')
          .setUrl(apiChallengeUrl)
          .setData({
            choice: json.step_data.choice,
          })
          .send({ followRedirect: true });
        return this.handleResponse(selectResponse, checkpointError, defaultMethod);
      }
      case 'verify_code':
      case 'submit_phone':
        return new PhoneVerificationChallenge(session, checkpointError, json);
      case 'verify_email':
        return new EmailVerificationChallenge(session, checkpointError, json);
      case 'delta_login_review':
        const deltaLoginResponse = await new WebRequest(session)
          .setMethod('POST')
          .setUrl(apiChallengeUrl)
          .setData({
            choice: 0, // 0 - It's was me // 1 - Not me, change password
          })
          .send({ followRedirect: true });
        return this.handleResponse(deltaLoginResponse, checkpointError, defaultMethod);
      default:
        return new NotImplementedChallenge(session, checkpointError, json, json.step_name);
    }
  }

  //WARNING: This is NOT backward compatible code since most methods are not needed anymore. But you are free to make it backward compatible :)
  //How does it works now?
  //Well, we have two ways of resolving challange. Native and html versions.
  //First of all we reset the challenge. Just to make sure we start from beginning;
  //After we check if we can use native api version. If not - using html;
  //Selecting method and sending code is different, depending on native or html style.
  //As soon as we got the code we can confirm it using Native version.
  //Oh, and code confirm is same now for email and phone checkpoints
  static async resolve(
    checkpointError: CheckpointError,
    defaultMethod: ChallengeMethod = 'email',
    resetFirst: boolean,
  ) {
    const response = await Bluebird.try(async () => {
      if (resetFirst) {
        // dirty hack for handleResponse()
        return {
          body: JSON.stringify(await this.reset(checkpointError)),
        };
      } else {
        return new WebRequest(checkpointError.session)
          .setMethod('GET')
          .setUrl(
            `https://i.instagram.com/api/v1${checkpointError.json.challenge.api_path}?guid=${
              checkpointError.session.device.uuid
            }&device_id=${checkpointError.session.device.id}`,
          )
          .send({ followRedirect: true });
      }
    }).catch(StatusCodeError, error => error.response);
    return this.handleResponse(response, checkpointError, defaultMethod);
  }

  static resolveHtml(checkpointError: CheckpointError, defaultMethod: ChallengeMethod) {
    //Using html version
    const that = this;
    const session = checkpointError.session;

    return new WebRequest(session)
      .setMethod('GET')
      .setUrl(checkpointError.url)
      .setHeaders({
        Referer: checkpointError.url,
      })
      .send({ followRedirect: true })
      .catch(StatusCodeError, error => error.response)
      .then(parseResponse);

    function parseResponse(response) {
      let choice;
      let challenge;
      let json;
      try {
        if (response.headers['content-type'] === 'application/json') {
          json = JSON.parse(response.body);
          challenge = json;
        } else {
          json = JSON.parse(SHARED_JSON_REGEXP.exec(response.body)[1]);
          challenge = json.entry_data.Challenge[0];
        }
      } catch (e) {
        throw new TypeError('Invalid response. JSON expected');
      }
      if (defaultMethod === 'email') {
        choice = challenge.fields.email ? 1 : 0;
      } else if (defaultMethod === 'phone') {
        choice = challenge.fields.phone_number ? 0 : 1;
      }

      switch (challenge.challengeType) {
        case 'SelectVerificationMethodForm': {
          return new WebRequest(session)
            .setMethod('POST')
            .setUrl(checkpointError.url)
            .setHeaders({
              Referer: checkpointError.url,
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-Instagram-AJAX': 1,
            })
            .setData({
              choice,
            })
            .send({ followRedirect: true })
            .then(() => that.resolveHtml(checkpointError, defaultMethod));
        }
        case 'VerifyEmailCodeForm':
          return new EmailVerificationChallenge(session, checkpointError, json);
        case 'VerifySMSCodeForm':
          return new PhoneVerificationChallenge(session, checkpointError, json);
        default:
          return new NotImplementedChallenge(session, checkpointError, json, challenge.challengeType);
      }
    }
  }

  static reset(checkpointError: CheckpointError) {
    return new Request(checkpointError.session)
      .setMethod('POST')
      .setBodyType('form')
      .setUrl(checkpointError.apiUrl.replace('/challenge/', '/challenge/reset/'))
      .signPayload()
      .send({ followRedirect: true })
      .catch(error => error.response);
  }

  code(code: string | number) {
    return new WebRequest(this.session)
      .setMethod('POST')
      .setUrl(this.error.apiUrl)
      .setBodyType('form')
      .setData({
        security_code: code,
      })
      .send({ followRedirect: false })
      .then(response => {
        let json;
        try {
          json = JSON.parse(response.body);
        } catch (e) {
          throw new TypeError('Invalid response. JSON expected');
        }
        if (
          response.statusCode === 200 &&
          json.status === 'ok' &&
          (json.action === 'close' || json.location === 'instagram://checkpoint/dismiss')
        ) {
          this.session.challenge$.next(null);
          return true;
        }
        throw new NotPossibleToResolveChallenge('Unknown error', NotPossibleToResolveChallenge.CODE.UNKNOWN);
      })
      .catch(StatusCodeError, error => {
        if (error.statusCode === 400)
          throw new NotPossibleToResolveChallenge(
            'Verification has not been accepted',
            NotPossibleToResolveChallenge.CODE.NOT_ACCEPTED,
          );
        throw error;
      });
  }
}

export class PhoneVerificationChallenge extends Challenge {
  get submitPhone() {
    return this.json.step_name === 'submit_phone';
  }

  //Confirming phone number.
  //We need to return PhoneVerificationChallenge that can be able to request code.
  //So, if we need to submit phone number first - let's do it. If not - just return current PhoneVerificationChallenge;
  phone(userPhoneNumber: string | number) {
    if (this.submitPhone === false) return Bluebird.resolve(this);
    let instagramPhoneNumber = this.json && this.json.step_data ? this.json.step_data.phone_number : null;
    let phone = userPhoneNumber || instagramPhoneNumber;
    if (!phone) return new Error('Invalid phone number');
    return new WebRequest(this.session)
      .setMethod('POST')
      .setUrl(this.error.apiUrl)
      .setBodyType('form')
      .setData({
        phone_number: phone,
      })
      .removeHeader('x-csrftoken')
      .send({ followRedirect: false })
      .then(response => {
        let json;
        try {
          json = JSON.parse(response.body);
        } catch (e) {
          throw new TypeError('Invalid response. JSON expected');
        }
        return new PhoneVerificationChallenge(this.session, this.error, json);
      });
  }
}

export class EmailVerificationChallenge extends Challenge {}

export class NotImplementedChallenge extends Challenge {
  constructor(session: Session, error: CheckpointError, json: Object, challengeType: string) {
    super(session, error, json);
    throw new Error(`Not implemented challenge type: "${challengeType}"`);
  }
}
