import { InstaSticker } from './insta-sticker';

export interface MentionStickerOptions {
  userId: string;
  width?: number;
  height?: number;
}

export class MentionSticker extends InstaSticker {
  public userId: string;

  public constructor(options: MentionStickerOptions) {
    super(options.width || 0.64, options.height || 0.125);
    this.userId = options.userId;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      display_type: 'mention_username',
      ...this.toSnakeCase({userId: this.userId}),
    };
  }

  get id(): string {
    return 'mention_sticker_vibrant';
  }

  get key(): string {
    return 'reel_mentions';
  }
}
