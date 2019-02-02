export namespace LikeModuleName {
  export interface FeedTimeline {
    moduleName: 'feed_timeline' | 'feed_contextual_post' | 'newsfeed' | 'feed_contextual_newsfeed_multi_media_liked';
  }

  export interface FeedContextualHashtag {
    moduleName: 'feed_contextual_hashtag';
    hashtag: string;
  }

  export interface FeedContextualLocation {
    moduleName: 'feed_contextual_location';
    location_id: string | number;
  }

  interface BaseProfile {
    username: string;
    user_id: string | number;
  }

  export interface Profile extends BaseProfile {
    moduleName: 'profile';
  }

  export interface MediaViewProfile extends BaseProfile {
    moduleName: 'media_view_profile';
  }

  export interface VideoViewProfile extends BaseProfile {
    moduleName: 'video_view_profile';
  }

  export interface PhotoViewProfile extends BaseProfile {
    moduleName: 'photo_view_profile';
  }

  export type Type = (
    | FeedTimeline
    | FeedContextualHashtag
    | FeedContextualLocation
    | Profile
    | MediaViewProfile
    | VideoViewProfile
    | PhotoViewProfile) & { [x: string]: any; d: boolean };
}
