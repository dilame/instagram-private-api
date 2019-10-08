import { MediaConfigureOptions } from './media.configure.options';
import { MediaConfigureVideoOptions } from './media.configure-video.options';

export interface MediaConfigureStoryBaseOptions {
  story_media_creation_date?: string;
  client_shared_at?: string;
  audience?: 'besties';
  // 1 = story-reel, 2 = direct-story (does not support stickers)
  configure_mode: '1' | '2';
  camera_position?: string;
  allow_multi_configures?: '0' | '1';

  // direct-story share options
  thread_ids?: string[] | string;
  recipient_users?: string[] | string;
  client_context?: string;
  view_mode?: 'replayable' | 'once' | string;
  reply_type?: 'story' | string;

  caption?: string;
  mas_opt_in?: 'NOT_PROMPTED';

  story_sticker_ids?: string | 'question_sticker_ma' | 'countdown_sticker_time' | 'chat_sticker_id';

  // caption has to be set
  story_hashtags?: StoryHashtag[] | string;
  // if this is set, the geotag has to be set!
  story_locations?: [StoryLocation] | string;
  geotag_enabled?: '1' | '0';
  posting_latitude?: string;
  posting_longitude?: string;
  media_latitude?: string;
  media_longitude?: string;
  // caption has to be set
  reel_mentions?: StoryMention[] | string;

  // internal_features has to be set
  story_polls?: [StoryPoll] | string;
  internal_features?: 'polling_sticker';

  // story_sticker_ids = 'emoji_slider_{emoji}'
  story_sliders?: [StorySlider] | string;
  // story_sticker_ids = 'question_sticker_ama'
  story_questions?: [StoryQuestion] | string;
  // story_sticker_ids = 'countdown_sticker_time'
  story_countdowns?: [StoryCountdown] | string;
  // story_sticker_ids = 'media_simple_{media_id}'
  attached_media?: [StoryAttachedMedia] | string;

  story_chats?: [StoryChat] | string;

  story_quizs?: [StoryQuiz] | string;

  // links are only valid in business accounts
  story_cta?: [StoryCta] | string;
}

export interface MediaConfigureStoryPhotoOptions extends MediaConfigureOptions, MediaConfigureStoryBaseOptions {}

export interface MediaConfigureStoryVideoOptions extends MediaConfigureVideoOptions, MediaConfigureStoryBaseOptions {}

export interface StoryChat extends StorySticker {
  text: string;
  start_background_color: string;
  end_background_color: string;
  has_started_chat: false;
  is_sticker: true;
}

/* range: 0..1 */
export interface StorySticker {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

export interface StoryCta {
  links: [{ webUri: string }];
}

export interface StoryAttachedMedia extends StorySticker {
  media_id: string;
  is_sticker: boolean;
}

export interface StoryCountdown extends StorySticker {
  text: string;

  // colors: have to be hex (eg.:#ff0a1d)
  text_color: string;
  start_background_color: string;
  end_background_color: string;
  digit_color: string;
  digit_card_color: string;

  end_ts: number;
  following_enabled: boolean;
  is_sticker: true;
}

// ig takes height as aspect-ratio
export interface StoryQuestion extends StorySticker {
  viewer_can_interact: true;

  // both have to be hex (eg.:#ff0a1d)
  background_color: string;
  text_color: string;

  question_type: 'text';
  question: string;
  profile_pic_url: string;
  is_sticker: true;
}

export interface StorySlider extends StorySticker {
  question: string;
  // both have to be hex (eg.:#ff0a1d)
  background_color: string;
  text_color: string;
  // tip on windows: [WIN] + [.] for the emoji menu
  emoji: string;
  // TODO: why?
  is_sticker: true;
}

// width & height have an aspect-ratio (takes height)
export interface StoryPoll extends StorySticker {
  question: string;
  viewer_vote: 0;
  viewer_can_vote: true;
  is_sticker: true;
  tallies: [StoryPollTallie, StoryPollTallie];
}

export interface StoryPollTallie {
  text: string;
  count: 0;
  /* range: 17.5 .. 35.0 */
  font_size: number;
}

export interface StoryMention extends StorySticker {
  user_id: string | number;
}

export interface StoryLocation extends StorySticker {
  is_sticker: boolean;
  location_id: string;
}

export interface StoryHashtag extends StorySticker {
  /* '#' is a FORBIDDEN character */
  tag_name: string;
  use_custom_title: boolean;
  is_sticker: boolean;
}

export interface StoryQuiz extends StorySticker {
  question: string;
  options: Array<{ text: string; count: number }>;
  correct_answer: string;
  viewer_can_answer: boolean;
  viewer_answer: number;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
}
