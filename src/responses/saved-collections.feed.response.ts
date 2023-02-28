export interface SavedCollectionsFeedResponseRootObject {
  items: SavedCollectionsFeedResponse[];
  num_results: number;
  more_available: boolean;
  auto_load_more_enabled: boolean;
  status: string;
  next_max_id: string;
}

export interface SavedCollectionsFeedResponse {
  collection_id: string;
  collection_name: string;
  collection_type: string;
  cover_media: CoverMedia;
  cover_media_list: CoverMediaList[];
  collection_media_count: number;
  viewer_access_level: string;
}

export interface CoverMedia {
  id: string;
  media_type: number;
  image_versions2: CoverMediaImageVersions2;
  original_width: number;
  original_height: number;
}

export interface CoverMediaImageVersions2 {
  candidates: Candidate[];
}

export interface Candidate {
  width: number;
  height: number;
  url: string;
  scans_profile: ScansProfile;
  estimated_scans_sizes?: number[];
}

export enum ScansProfile {
  E15 = 'e15',
  E35 = 'e35',
  Empty = '',
}

export interface CoverMediaList {
  id: string;
  media_type: number;
  image_versions2: CoverMediaListImageVersions2;
  original_width: number;
  original_height: number;
}

export interface CoverMediaListImageVersions2 {
  candidates: Candidate[];
  additional_candidates?: AdditionalCandidates;
  smart_thumbnail_enabled?: boolean;
}

export interface AdditionalCandidates {
  igtv_first_frame: Candidate;
  first_frame: Candidate;
  smart_frame: null;
}
