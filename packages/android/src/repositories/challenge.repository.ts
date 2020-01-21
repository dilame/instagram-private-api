import { ChallengeStateResponse } from '../responses';
import { IgChallengeWrongCodeError, IgNoCheckpointError, IgResponseError } from '../errors';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

/**
 * All methods expects [[AndroidState.checkpoint]] to be filled with [[CheckpointResponse]].
 * It is filled in automatically when [[IgCheckpointError]] occurs.
 */
export class ChallengeRepository {
  constructor(private http: AndroidHttp, private localState: AndroidState) {}
  /**
   * Get challenge state.
   */
  public async state() {
    const { body } = await this.http.send<ChallengeStateResponse>({
      url: this.localState.challengeUrl,
      qs: {
        guid: this.localState.uuid,
        device_id: this.localState.deviceId,
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
    let url = this.localState.challengeUrl;
    if (isReplay) {
      url = url.replace('/challenge/', '/challenge/replay/');
    }
    const { body } = await this.http.send<ChallengeStateResponse>({
      url,
      method: 'POST',
      form: this.http.sign({
        choice,
        _csrftoken: this.localState.cookieCsrfToken,
        guid: this.localState.uuid,
        device_id: this.localState.deviceId,
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
    const { body } = await this.http.send<ChallengeStateResponse>({
      url: this.localState.challengeUrl,
      method: 'POST',
      form: this.http.sign({
        phone_number: String(phoneNumber),
        _csrftoken: this.localState.cookieCsrfToken,
        guid: this.localState.uuid,
        device_id: this.localState.deviceId,
      }),
    });
    this.middleware(body);
    return body;
  }

  public async auto(reset = false): Promise<ChallengeStateResponse> {
    if (!this.localState.checkpoint) {
      throw new IgNoCheckpointError();
    }
    if (reset) {
      await this.reset();
    }
    if (!this.localState.challenge) {
      await this.state();
    }
    const challenge = this.localState.challenge;
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
    const { body } = await this.http.send<ChallengeStateResponse>({
      url: this.localState.challengeUrl.replace('/challenge/', '/challenge/reset/'),
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.localState.cookieCsrfToken,
        guid: this.localState.uuid,
        device_id: this.localState.deviceId,
      }),
    });
    this.middleware(body);
    return body;
  }

  /**
   * Send the code received in the message
   */
  public async sendSecurityCode(code: string | number) {
    const { body } = await this.http
      .send<ChallengeStateResponse>({
        url: this.localState.challengeUrl,
        method: 'POST',
        form: this.http.sign({
          security_code: code,
          _csrftoken: this.localState.cookieCsrfToken,
          guid: this.localState.uuid,
          device_id: this.localState.deviceId,
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
      this.localState.checkpoint = null;
      this.localState.challenge = null;
    } else {
      this.localState.challenge = body;
    }
  }
}
