import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import Chance = require('chance');
import Bluebird = require('bluebird');

@injectable()
export class ConsentRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async auto() {
    const response = await this.existingUserFlow();
    if (response.screen_key === 'already_finished') {
      return response;
    }
    const dob = new Chance().birthday();
    await Bluebird.try(() => this.existingUserFlowIntro()).catch(() => {});
    await Bluebird.try(() => this.existingUserFlowTosAndTwoAgeButton()).catch(() => {});
    await Bluebird.try(() => this.existingUserFlowDob(dob.getFullYear(), dob.getMonth(), dob.getDay())).catch(() => {});
    return true;
  }

  public existingUserFlowIntro() {
    return this.existingUserFlow({
      current_screen_key: 'qp_intro',
      updates: JSON.stringify({ existing_user_intro_state: '2' }),
    });
  }

  public existingUserFlowDob(year: string | number, month: string | number, day: string | number) {
    return this.existingUserFlow({
      current_screen_key: 'dob',
      day: String(day),
      month: String(month),
      year: String(year),
    });
  }

  public existingUserFlowTosAndTwoAgeButton() {
    return this.existingUserFlow({
      current_screen_key: 'tos_and_two_age_button',
      updates: JSON.stringify({ age_consent_state: '2', tos_data_policy_consent_state: '2' }),
    });
  }

  public async existingUserFlow(data?: { [x: string]: any }) {
    const { body } = await this.http.send({
      url: '/api/v1/consent/existing_user_flow/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uid: this.state.cookieUserId,
        _uuid: this.state.uuid,
        ...data,
      }),
    });
    return body;
  }
}
