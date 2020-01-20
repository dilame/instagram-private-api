export interface CheckpointResponse {
  message: string;
  challenge: CheckpointResponseChallenge;
  status: string;
  error_type: string;
}
export interface CheckpointResponseChallenge {
  url: string;
  api_path: string;
  hide_webview_header: boolean;
  lock: boolean;
  logout: boolean;
  native_flow: boolean;
}
