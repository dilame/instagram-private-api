import { InstaSticker } from './insta-sticker';

export interface HashtagStickerOptions {
  tagName: string;
  width?: number;
  height?: number;
}

export class HashtagSticker extends InstaSticker {
  public options: HashtagStickerOptions;

  public constructor(options: HashtagStickerOptions) {
    super(options.width || 0.47, options.height || 0.11);
    delete options.width;
    delete options.height;
    this.options = options;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'hashtag_sticker_vibrant';
  }

  get key(): string {
    return 'story_hashtags';
  }
}
