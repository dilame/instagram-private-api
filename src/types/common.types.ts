import { Response } from 'request';

export type IgAppModule =
  | 'feed_timeline' //  "Timeline" tab
  | 'newsfeed' // "Followings Activity" feed tab
  | 'profile' // LIST VIEW (when posts are shown vertically by the app one at a time (as in the Timeline tab)): Any media on a user profile (their timeline) in list view mode.
  | 'media_view_profile' // GRID VIEW (standard 3x3): Album (carousel) on a user profile (their timeline).
  | 'video_view_profile' // GRID VIEW (standard 3x3): Video on a user profile (their timeline).
  | 'photo_view_profile' // GRID VIEW (standard 3x3): Photo on a user profile (their timeline).
  | 'followers'
  | 'following'
  | 'self_followers'
  | 'self_following'
  | 'comment_likers'
  | 'comment_owner'
  | 'feed_contextual_post' // "Explore" search result.
  | 'feed_contextual_hashtag' // "Hashtag" search result.
  | 'feed_contextual_location' // "Location" search result.
  | 'feed_contextual_newsfeed_multi_media_liked' // "Followings Activity" feed tab
  | 'likers_likers_media_view_profile'
  | 'likers_likers_photo_view_profile'
  | 'likers_likers_video_view_profile'
  | 'self_likers_self_likers_media_view_profile'
  | 'self_likers_self_likers_photo_view_profile'
  | 'self_likers_self_likers_video_view_profile'
  | 'story_camera_music_overlay_post_capture'
  | 'story_camera_music_overlay_pre_capture'
  | 'story_viewer_profile'
  | 'story_viewer_default'
  | 'find_friends_contacts'
  | 'explore_people'
  | 'igtv_feed_timeline'
  | string;

export type IgResponse<Body> = Pick<Response, Exclude<keyof Response, 'body'>> & { body: Body };
