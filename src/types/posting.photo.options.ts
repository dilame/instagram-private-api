import {
  StoryAttachedMedia,
  StoryChat,
  StoryCountdown,
  StoryHashtag,
  StoryLocation,
  StoryMention,
  StoryPoll,
  StoryQuestion,
  StorySlider,
} from './media.configure.options';
import { PostingLocation, PostingUsertags } from './posting.options';

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
  chat?: StoryChat;
  link?: string;
}

export interface PostingStoryLocationSticker {
  latitude: string;
  longitude: string;
  sticker: StoryLocation;
}
