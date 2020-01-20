export interface MusicGenreFeedResponseRootObject {
  items: MusicGenreFeedResponseItemsItem[];
  page_info: MusicGenreFeedResponsePage_info;
  alacorn_session_id: string;
  status: string;
}
export interface MusicGenreFeedResponseItemsItem {
  track: MusicGenreFeedResponseTrack;
}
export interface MusicGenreFeedResponseTrack {
  id: string;
  title: string;
  subtitle: string;
  display_artist: string;
  cover_artwork_uri: string;
  cover_artwork_thumbnail_uri: string;
  progressive_download_url: string;
  highlight_start_times_in_ms: number[];
  is_explicit: boolean;
  dash_manifest: string;
  has_lyrics: boolean;
  audio_asset_id: null;
}
export interface MusicGenreFeedResponsePage_info {
  next_max_id: string;
  more_available: boolean;
  auto_load_more_available: boolean;
}
