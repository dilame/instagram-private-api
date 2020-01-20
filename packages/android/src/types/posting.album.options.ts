import { PostingLocation, PostingUsertags } from './posting.options';

export interface PostingAlbumOptions {
  caption?: string;
  items: Array<PostingAlbumPhotoItem | PostingAlbumVideoItem>;
  location?: PostingLocation;
}

export interface PostingAlbumItem {
  usertags?: PostingUsertags;
  uploadId?: string;
}

export interface PostingAlbumPhotoItem extends PostingAlbumItem {
  file: Buffer;
  width?: number;
  height?: number;
}
export interface PostingAlbumVideoItem extends PostingAlbumItem {
  video: Buffer;
  coverImage: Buffer;
  videoInfo?: { duration: number; width: number; height: number };
  transcodeDelay?: number;
}
