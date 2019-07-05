import { PostingUsertags } from './posting.photo.options';

export interface MediaConfigureOptions {
  upload_id: string;
  source_type?: string;
  width?: number;
  height?: number;
  scene_capture_type?: string;
  media_folder?: string;
  caption?: string;
  software?: string;
  edits?: {
    crop_original_size: [number, number];
    crop_center: [number, number];
    crop_zoom: number;
  };
  extra?: {
    source_width: number;
    source_height: number;
  };
  // location
  geotag_enabled?: string;
  posting_latitude?: string;
  posting_longitude?: string;
  media_latitude?: string;
  media_longitude?: string;
}

export interface MediaConfigureTimelineOptions extends MediaConfigureOptions {
  // string is only for internal use!
  location?: MediaLocation | string;
  // string is only for internal use!
  usertags?: PostingUsertags | string;
  date_time_digitalized?: string;
  date_time_original?: string;
  timezone_offset?: string;

  // needed?!
  camera_model?: string;
  device_id?: string;
  creation_logger_session_id?: string;
  camera_make?: string;
}

export interface MediaLocation {
  name: string;
  lat: number;
  lng: number;
  address: string;
  external_source: string;
  external_id: string;
}
