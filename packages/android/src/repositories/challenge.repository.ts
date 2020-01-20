import { Repository } from '../core/repository';
import { ChallengeStateResponse } from '../responses';
import { IgChallengeWrongCodeError, IgNoCheckpointError, IgResponseError } from '../errors';

/**
 * All methods expects [[State.checkpoint]] to be filled with [[CheckpointResponse]].
 * It is filled in automatically when [[IgCheckpointError]] occurs.
 */
export class ChallengeRepository extends Repository {
  /**
   * Get challenge state.
   */
  public async state() {
    const { body } = await this.client.request.send<ChallengeStateResponse>({
      url: this.client.state.challengeUrl,
      qs: {
        guid: this.client.state.uuid,
        device_id: this.client.state.deviceId,
      },
    });
    this.middleware(body);
    return body;
  }

  /**
   * Select verification method.
   * @param choice Verification method. Phone number = 0, email = 1
   * @param isReplay resend code
   */
  public async selectVerifyMethod(choice: string, isReplay = false) {
    let url = this.client.state.challengeUrl;
    if (isReplay) {
      url = url.replace('/challenge/', '/challenge/replay/');
    }
    const { body } = await this.client.request.send<ChallengeStateResponse>({
      url,
      method: 'POST',
      form: this.client.request.sign({
        choice,
        _csrftoken: this.client.state.cookieCsrfToken,
        guid: this.client.state.uuid,
        device_id: this.client.state.deviceId,
      }),
    });
    this.middleware(body);
    return body;
  }

  /**
   * «Didn't receive your code? Get a new one»
   * @param choice Verification method. Phone number = 0, email = 1
   */
  public replay(choice: string) {
    return this.selectVerifyMethod(choice, true);
  }

  /**
   * «We detected an unusual login attempt»
   * @param choice It was me = 0, It wasn't me = 1
   */
  public async deltaLoginReview(choice: '1' | '0') {
    return await this.selectVerifyMethod(choice);
  }

  public async sendPhoneNumber(phoneNumber: string) {
    const { body } = await this.client.request.send<ChallengeStateResponse>({
      url: this.client.state.challengeUrl,
      method: 'POST',
      form: this.client.request.sign({
        phone_number: String(phoneNumber),
        _csrftoken: this.client.state.cookieCsrfToken,
        guid: this.client.state.uuid,
        device_id: this.client.state.deviceId,
      }),
    });
    this.middleware(body);
    return body;
  }

  public async auto(reset = false): Promise<ChallengeStateResponse> {
    if (!this.client.state.checkpoint) {
      throw new IgNoCheckpointError();
    }
    if (reset) {
      await this.reset();
    }
    if (!this.client.state.challenge) {
      await this.state();
    }
    const challenge = this.client.state.challenge;
    switch (challenge.step_name) {
      case 'select_verify_method': {
        return await this.selectVerifyMethod(challenge.step_data.choice);
      }
      case 'delta_login_review': {
        return await this.deltaLoginReview('0');
      }
      default: {
        return challenge;
      }
    }
  }

  /**
   * Go back to "select_verify_method"
   */
  public async reset() {
    const { body } = await this.client.request.send<ChallengeStateResponse>({
      url: this.client.state.challengeUrl.replace('/challenge/', '/challenge/reset/'),
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        guid: this.client.state.uuid,
        device_id: this.client.state.deviceId,
      }),
    });
    this.middleware(body);
    return body;
  }

  /**
   * Send the code received in the message
   */
  public async sendSecurityCode(code: string | number) {
    const { body } = await this.client.request
      .send<ChallengeStateResponse>({
        url: this.client.state.challengeUrl,
        method: 'POST',
        form: this.client.request.sign({
          security_code: code,
          _csrftoken: this.client.state.cookieCsrfToken,
          guid: this.client.state.uuid,
          device_id: this.client.state.deviceId,
        }),
      })
      .catch((error: IgResponseError) => {
        if (error.response.statusCode === 400 && error.response.body.status === 'fail') {
          throw new IgChallengeWrongCodeError(error.response.body.message);
        }
        throw error;
      });
    this.middleware(body);
    return body;
  }

  private middleware(body: ChallengeStateResponse) {
    if (body.action === 'close') {
      this.client.state.checkpoint = null;
      this.client.state.challenge = null;
    } else {
      this.client.state.challenge = body;
    }
  }
}
