import { PostingUsertags } from './posting.options';
import { MediaLocation } from './media.configure.options';

export interface MediaConfigureVideoOptions {
  upload_id: string;
  length: number;
  clips?: Array<{ length: number; source_type: string }>;
  audio_muted?: boolean;
  poster_frame_index?: number;

  width: number;
  height: number;

  geotag_enabled?: '1' | '0';
  posting_latitude?: string;
  posting_longitude?: string;
  media_latitude?: string;
  media_longitude?: string;
}

export interface MediaConfigureTimelineVideoOptions extends MediaConfigureVideoOptions {
  filter_type?: string;
  timezone_offset?: string;
  usertags?: PostingUsertags | string;
  location?: MediaLocation | string;
  source_type?: '4';
  device_id?: string;
  caption?: string;
  date_time_original?: string;
  upload_id: string;
}
