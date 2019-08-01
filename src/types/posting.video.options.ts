import { PostingLocation, PostingUsertags } from './posting.options';

export interface PostingVideoOptions {
  video: Buffer;
  coverImage: Buffer;
  caption?: string;
  usertags?: PostingUsertags;
  location?: PostingLocation;
}
