import { AccountRepositoryLoginResponseLogged_in_user } from './account.repository.login.response';

export interface ChallengeStateResponse {
  step_name: string;
  step_data: ChallengeRepositoryStateResponseStepData;
  logged_in_user?: AccountRepositoryLoginResponseLogged_in_user;
  user_id: number;
  nonce_code: string;
  action: string;
  status: string;
}

export interface ChallengeRepositoryStateResponseStepData {
  choice: string;
  fb_access_token: string;
  big_blue_token: string;
  google_oauth_token: string;
  email: string;
  security_code: string;
  resend_delay: number;
  contact_point: string;
  form_type: string;
}
