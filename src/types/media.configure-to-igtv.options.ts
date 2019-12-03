export interface MediaConfigureToIgtvOptions {
  upload_id: string;
  title: string;
  length: number;
  extra: { source_width: number; source_height: number };
  caption?: string;
  // will be converted to a json-string
  feed_preview_crop?:
    | {
        crop_left: number;
        crop_right: number;
        crop_top: number;
        crop_bottom: number;
      }
    | string;
  // ISO 8601 without '-' and ':'
  date_time_original?: string;
  igtv_share_preview_to_feed?: '1' | '0';
  clips?: Array<{ length: number; source_type: '3' | '4' }>;
  audio_muted?: boolean;
  poster_frame_index?: number;
  filter_type?: string;
  timezone_offset?: string;
  media_folder?: string;
  source_type?: '3' | '4';
  device?: {
    manufacturer: string;
    model: string;
    android_version: number;
    android_release: string;
  };
  // internal
  retryContext?: { num_step_auto_retry: number; num_reupload: number; num_step_manual_retry: number };
}
