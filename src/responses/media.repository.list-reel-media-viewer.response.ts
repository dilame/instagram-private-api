export interface MediaRepositoryListReelMediaViewerResponseRootObject {
  users: MediaRepositoryListReelMediaViewerResponseUsersItem[];
  next_max_id: null;
  user_count: number;
  total_viewer_count: number;
  updated_media: MediaRepositoryListReelMediaViewerResponseUpdated_media;
  status: string;
}
export interface MediaRepositoryListReelMediaViewerResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status?: MediaRepositoryListReelMediaViewerResponseFriendship_status;
  is_verified: boolean;
  latest_reel_media?: number;
}
export interface MediaRepositoryListReelMediaViewerResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface MediaRepositoryListReelMediaViewerResponseUpdated_media {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: MediaRepositoryListReelMediaViewerResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: MediaRepositoryListReelMediaViewerResponseUser;
  caption_is_edited: boolean;
  caption_position: number;
  is_reel_media: boolean;
  timezone_offset: number;
  photo_of_you: boolean;
  caption: null;
  fb_user_tags: MediaRepositoryListReelMediaViewerResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_pride_media: boolean;
  story_is_saved_to_archive: boolean;
  story_chats: MediaRepositoryListReelMediaViewerResponseStoryChatsItem[];
  story_chat_request_infos: MediaRepositoryListReelMediaViewerResponseStoryChatRequestInfosItem[];
  viewers: MediaRepositoryListReelMediaViewerResponseViewersItem[];
  viewer_count: number;
  viewer_cursor: null;
  total_viewer_count: number;
  multi_author_reel_names: any[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
}
export interface MediaRepositoryListReelMediaViewerResponseImage_versions2 {
  candidates: MediaRepositoryListReelMediaViewerResponseCandidatesItem[];
}
export interface MediaRepositoryListReelMediaViewerResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  estimated_scans_sizes: number[];
}
export interface MediaRepositoryListReelMediaViewerResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  can_boost_post: boolean;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  reel_auto_archive: string;
  is_unpublished: boolean;
  allowed_commenter_type: string;
}
export interface MediaRepositoryListReelMediaViewerResponseFb_user_tags {
  in: any[];
}
export interface MediaRepositoryListReelMediaViewerResponseStoryChatsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  chat_sticker: MediaRepositoryListReelMediaViewerResponseChat_sticker;
}
export interface MediaRepositoryListReelMediaViewerResponseChat_sticker {
  story_chat_id: string;
  text: string;
  start_background_color: string;
  end_background_color: string;
  has_started_chat: boolean;
  thread_id: string;
  status: string;
}
export interface MediaRepositoryListReelMediaViewerResponseStoryChatRequestInfosItem {
  users: MediaRepositoryListReelMediaViewerResponseUsersItem[];
  requester_usernames: MediaRepositoryListReelMediaViewerResponseRequester_usernames;
  cursor: string;
  total_thread_participants: number;
  total_participant_requests: number;
}
export interface MediaRepositoryListReelMediaViewerResponseRequester_usernames {}
export interface MediaRepositoryListReelMediaViewerResponseViewersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
