import { PostingUsertags } from './posting.photo.options';

export interface MediaConfigureOptions {
  upload_id: string;
  width?: number;
  height?: number;
  date_time_digitalized?: string;
  date_time_original?: string;
  scene_capture_type?: string;
  media_folder?: string;
  source_type?: string;
  caption?: string;
  software?: string;
  usertags?: PostingUsertags;
  edits?: {
    crop_original_size: [number, number];
    crop_center: [number, number];
    crop_zoom: number;
  };
  extra?: {
    source_width: number;
    source_height: number;
  };
  geotag_enabled?: string;
  posting_latitude?: string;
  posting_longitude?: string;
  media_latitude?: string;
  media_longitude?: string;
  location?: MediaLocation;
}

export interface MediaLocation {
  name: string;
  lat: number;
  lng: number;
  address: string;
  external_source: string;
  external_id: string;
}
