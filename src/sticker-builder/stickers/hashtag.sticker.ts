import { InstaSticker } from './insta-sticker';

export interface HashtagStickerOptions {
  tagName: string;
  width?: number;
  height?: number;
}

export class HashtagSticker extends InstaSticker {
  public tagName: string;

  public constructor(options: HashtagStickerOptions) {
    super(options.width || 0.47, options.height || 0.11);
    this.tagName = options.tagName;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.toSnakeCase({tagName: this.tagName}),
    };
  }

  get id(): string {
    return 'hashtag_sticker_vibrant';
  }

  get key(): string {
    return 'story_hashtags';
  }
}
