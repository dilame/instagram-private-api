interface FeedTimeline {
  module_name: 'feed_timeline' | 'feed_contextual_post' | 'newsfeed' | 'feed_contextual_newsfeed_multi_media_liked';
}

interface FeedContextualHashtag {
  module_name: 'feed_contextual_hashtag';
  hashtag: string;
}

interface FeedContextualLocation {
  module_name: 'feed_contextual_location';
  location_id: string | number;
}

interface BaseProfile {
  username: string;
  user_id: string | number;
}

interface Profile extends BaseProfile {
  module_name: 'profile';
}

interface MediaViewProfile extends BaseProfile {
  module_name: 'media_view_profile';
}

interface VideoViewProfile extends BaseProfile {
  module_name: 'video_view_profile';
}

interface PhotoViewProfile extends BaseProfile {
  module_name: 'photo_view_profile';
}

export type LikeModuleInfoOption = (
  | FeedTimeline
  | FeedContextualHashtag
  | FeedContextualLocation
  | Profile
  | MediaViewProfile
  | VideoViewProfile
  | PhotoViewProfile
) & { [x: string]: any };

type LikeOrUnlikeBaseOptions = {
  mediaId: string;
  moduleInfo: LikeModuleInfoOption;
};

export type LikeRequestOptions = LikeOrUnlikeBaseOptions & {
  d: 1 | 0;
};

export type UnlikeRequestOptions = LikeOrUnlikeBaseOptions & {
  d?: 0;
};

export type MediaLikeOrUnlikeOptions = LikeOrUnlikeBaseOptions & {
  action: 'like' | 'unlike';
  // d - means double-tap. If you liked post by double tap then d=1. You cant unlike post by double tap
  d?: 1 | 0;
};
