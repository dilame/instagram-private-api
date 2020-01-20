export interface NewsRepositoryInboxResponseRootObject {
  aymf: NewsRepositoryInboxResponseAymf;
  counts: NewsRepositoryInboxResponseCounts;
  friend_request_stories: any[];
  new_stories: NewsRepositoryInboxResponseNewStoriesItem[];
  old_stories: NewsRepositoryInboxResponseOldStoriesItem[];
  continuation_token: number;
  subscription: any;
  partition: NewsRepositoryInboxResponsePartition;
  ads_manager: NewsRepositoryInboxResponseAds_manager;
  business_profile_reminder: NewsRepositoryInboxResponseBusiness_profile_reminder;
  status: string;
}
export interface NewsRepositoryInboxResponseAymf {
  items: NewsRepositoryInboxResponseItemsItem[];
  more_available: boolean;
}
export interface NewsRepositoryInboxResponseItemsItem {
  user: NewsRepositoryInboxResponseUser;
  algorithm: string;
  social_context: string;
  icon: string;
  caption: string;
  media_ids: any[];
  thumbnail_urls: any[];
  large_urls: any[];
  media_infos: any[];
  value: number;
  followed_by: boolean;
  is_new_suggestion: boolean;
  uuid: string;
}
export interface NewsRepositoryInboxResponseUser {
  pk: string;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  latest_reel_media: number;
}
export interface NewsRepositoryInboxResponseCounts {
  relationships?: number;
  usertags?: number;
  likes?: number;
  comments?: number;
  campaign_notification?: number;
  comment_likes?: number;
  photos_of_you?: number;
  requests?: number;
}
export interface NewsRepositoryInboxResponseNewStoriesItem {
  type: number;
  story_type: number;
  args: NewsRepositoryInboxResponseArgs;
  counts: NewsRepositoryInboxResponseCounts;
  pk: string;
}
export interface NewsRepositoryInboxResponseArgs {
  text?: string;
  links?: NewsRepositoryInboxResponseLinksItem[];
  actions?: string[];
  profile_id?: number;
  profile_image?: string;
  media?: NewsRepositoryInboxResponseMediaItem[];
  timestamp: string;
  tuuid: string;
  clicked: boolean;
  profile_name?: string;
  latest_reel_media?: number;
  second_profile_id?: number;
  second_profile_image?: string;
  profile_image_destination?: string;
  destination?: string;
  aymt_notif_id?: string;
  aymt_notif_type?: string;
  aymt_channel_id?: string;
  comment_id?: string;
  comment_ids?: string[];
  comment_notif_type?: string;
  rich_text?: string;
  icon_url?: string;
  hashtag_follow?: NewsRepositoryInboxResponseHashtag_follow;
}
export interface NewsRepositoryInboxResponseLinksItem {
  start: number;
  end: number;
  type: string;
  id: string | number;
}
export interface NewsRepositoryInboxResponseMediaItem {
  id: string;
  image: string;
  comment_threading_enabled?: boolean;
}
export interface NewsRepositoryInboxResponseOldStoriesItem {
  type: number;
  story_type: number;
  args: NewsRepositoryInboxResponseArgs;
  counts: NewsRepositoryInboxResponseCounts;
  pk?: string;
}
export interface NewsRepositoryInboxResponseHashtag_follow {
  id: string;
  name: string;
  follow_status: number;
}
export interface NewsRepositoryInboxResponsePartition {
  time_bucket: NewsRepositoryInboxResponseTime_bucket;
}
export interface NewsRepositoryInboxResponseTime_bucket {
  headers: string[];
  indices: number[];
}
export interface NewsRepositoryInboxResponseAds_manager {
  pending_count: number;
}
export interface NewsRepositoryInboxResponseBusiness_profile_reminder {
  title: string;
  subtitle: string;
}
