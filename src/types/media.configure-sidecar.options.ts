import { PostingUsertags } from './posting.options';
import { MediaLocation } from './media.configure.options';

export interface MediaConfigureSidecarOptions {
  _csrftoken?: string;
  _uid?: string;
  _uuid?: string;
  timezone_offset?: string;
  source_type?: string;
  device_id?: string;
  caption?: string;
  client_sidecar_id?: string;
  upload_id?: string;
  device?: {
    manufacturer: string;
    model: string;
    android_version: number;
    android_release: string;
  };
  children_metadata: MediaConfigureSidecarItem[];
  location?: MediaLocation | string;
}

export interface MediaConfigureSidecarItem {
  upload_id: string;
  timezone_offset?: string;
  caption?: null;
  source_type?: string;
  usertags?: PostingUsertags | string;
  extra?: { source_width: number; source_height: number } | string;
  edits?: { crop_original_size: [number, number]; crop_center: [number, number]; crop_zoom: number } | string;
  device?:
    | {
        manufacturer: string;
        model: string;
        android_version: number;
        android_release: string;
      }
    | string;
  // internal only
  width: number;
  height: number;
}

export interface MediaConfigureSidecarVideoItem extends MediaConfigureSidecarItem {
  filter_type?: string;
  video_result?: string;
  date_time_original?: string;
  audio_muted?: string;
  clips?: Array<{ length: number; source_type: string }> | string;
  length: string;
  poster_frame_index?: string;
}
