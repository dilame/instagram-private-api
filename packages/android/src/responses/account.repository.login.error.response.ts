export interface AccountRepositoryLoginErrorResponse {
  message: string;
  invalid_credentials: boolean;
  two_factor_required: boolean;
  two_factor_info: AccountRepositoryLoginErrorResponseTwoFactorInfo;
  error_title: string;
  buttons: AccountRepositoryLoginBadPasswordResponseButtonsItem[];
  status: string;
  error_type: string;
  phone_verification_settings: AccountRepositoryLoginErrorResponsePhoneVerificationSettings;
}
export interface AccountRepositoryLoginErrorResponseTwoFactorInfo {
  username: string;
  sms_two_factor_on: boolean;
  totp_two_factor_on: boolean;
  obfuscated_phone_number: string;
  two_factor_identifier: string;
  show_messenger_code_option: boolean;
  show_new_login_screen: boolean;
  show_trusted_device_option: boolean;
  phone_verification_settings: AccountRepositoryLoginErrorResponsePhoneVerificationSettings;
}

export interface AccountRepositoryLoginErrorResponsePhoneVerificationSettings {
  max_sms_count: number;
  resend_sms_delay_sec: number;
  robocall_count_down_time_sec: number;
  robocall_after_max_sms: boolean;
}
export interface AccountRepositoryLoginBadPasswordResponseButtonsItem {
  title: string;
  action: string;
}
