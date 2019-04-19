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
}
