export interface SpamResponse {
  message: 'feedback_required';
  spam: true;
  feedback_title: string;
  feedback_message: string;
  feedback_url: string;
  feedback_appeal_label: string;
  feedback_ignore_label: string;
  feedback_action: string;
  status: 'fail';
  error_type?: string;
}
