export interface AccountRepositoryLoginErrorResponse {
  message: string;
  invalid_credentials: boolean;
  error_title: string;
  buttons: AccountRepositoryLoginBadPasswordResponseButtonsItem[];
  status: string;
  error_type: string;
}
export interface AccountRepositoryLoginBadPasswordResponseButtonsItem {
  title: string;
  action: string;
}
