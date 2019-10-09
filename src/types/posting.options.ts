import {
  StoryAttachedMedia,
  StoryChat,
  StoryCountdown,
  StoryHashtag,
  StoryLocation,
  StoryMention,
  StoryPoll,
  StoryQuestion,
  StoryQuiz,
  StorySlider,
} from './media.configure-story.options';

export interface PostingUsertags {
  in: Array<{ user_id: number | string; position: [number, number] }>;
}

export interface PostingLocation {
  name: string;
  lat: number;
  lng: number;
  external_id_source: string;
  external_id: string;
  address: string;
}

export interface PostingStoryOptions {
  caption?: string;
  toBesties?: boolean;
  threadIds?: string[];
  recipientUsers?: string[];
  viewMode?: 'replayable' | 'once' | string;
  replyType?: 'story' | string;

  // stickers
  location?: PostingStoryLocationSticker;
  hashtags?: StoryHashtag[];
  mentions?: StoryMention[];
  poll?: StoryPoll;
  slider?: StorySlider;
  question?: StoryQuestion;
  countdown?: StoryCountdown;
  media?: StoryAttachedMedia;
  chat?: StoryChat;
  quiz?: StoryQuiz;
  link?: string;
}

export interface PostingStoryLocationSticker {
  latitude: string;
  longitude: string;
  sticker: StoryLocation;
}
