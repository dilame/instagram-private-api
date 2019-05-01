import { Repository } from '../core/repository';
import Chance = require('chance');
import Bluebird = require('bluebird');

export class ConsentRepository extends Repository {
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
    const { body } = await this.client.request.send({
      url: '/api/v1/consent/existing_user_flow/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        ...data,
      }),
    });
    return body;
  }
}
