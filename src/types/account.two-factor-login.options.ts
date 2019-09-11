export interface AccountTwoFactorLoginOptions {
  verificationCode: string;
  twoFactorIdentifier: string;
  username: string;
  trustThisDevice?: '1' | '0';
  // 1 = sms
  verificationMethod?: string;
}
