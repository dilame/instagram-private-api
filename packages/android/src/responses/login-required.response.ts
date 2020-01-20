export interface LoginRequiredResponse {
  message: 'login_required';
  logout_reason: number;
  status: 'fail';
}
