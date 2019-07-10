import {
  StoryAttachedMedia,
  StoryCountdown,
  StoryHashtag,
  StoryLocation,
  StoryMention,
  StoryPoll,
  StoryQuestion,
  StorySlider,
} from './media.configure.options';

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

export interface PostingPhotoOptions {
  file: Buffer;
  caption?: string;
  usertags?: PostingUsertags;
  location?: PostingLocation;
}

export interface PostingStoryOptions {
  file: Buffer;
  caption?: string;
  toBesties?: boolean;
  threadIds?: string[];
  recipientUsers?: string[];

  // stickers
  location?: PostingStoryLocationSticker;
  hashtags?: StoryHashtag[];
  mentions?: StoryMention[];
  poll?: StoryPoll;
  slider?: StorySlider;
  question?: StoryQuestion;
  countdown?: StoryCountdown;
  media?: StoryAttachedMedia;
  link?: string;
}

export interface PostingStoryLocationSticker {
  latitude: string;
  longitude: string;
  sticker: StoryLocation;
}
