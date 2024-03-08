import { PostingLocation, PostingStoryOptions, PostingUsertags } from './posting.options';

export interface PostingVideoOptions {
  video: Buffer;
  coverImage: Buffer;
  caption?: string;
  usertags?: PostingUsertags;
  location?: PostingLocation;
  transcodeDelay?: number;
  isClipVideo?: boolean;
}

export interface PostingStoryVideoOptions extends PostingStoryOptions {
  video: Buffer;
  coverImage: Buffer;
  transcodeDelay?: number;
}
