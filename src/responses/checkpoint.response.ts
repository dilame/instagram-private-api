import { Type } from 'class-transformer';

class Challenge {
  url: string;
  api_path: string;
  hide_webview_header: boolean;
  lock: boolean;
  logout: boolean;
  native_flow: boolean;
}

export class CheckpointResponse {
  message: string;
  @Type(() => Challenge)
  challenge: Challenge;
  status: string;
  error_type: string;
}

