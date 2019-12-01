import { InstaSticker } from './insta-sticker';

export interface HashtagStickerOptions {
  tagName: string;
  width?: number;
  height?: number;
}

export class HashtagSticker extends InstaSticker implements HashtagStickerOptions {
  public tagName: string;

  public constructor() {
    super(0.47, 0.11);
  }

  get id(): string {
    return 'hashtag_sticker_vibrant';
  }

  get key(): string {
    return 'story_hashtags';
  }
}
