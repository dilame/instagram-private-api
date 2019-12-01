import { InstaSticker } from './insta-sticker';

export interface HashtagStickerOptions {
  tagName: string;
  width?: number;
  height?: number;
}

export class HashtagSticker extends InstaSticker implements HashtagStickerOptions {
  public tagName: string;
  width = 0.47;
  height = 0.11;

  get id(): string {
    return 'hashtag_sticker_vibrant';
  }

  get key(): string {
    return 'story_hashtags';
  }
}
