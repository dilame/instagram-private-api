import { InstaSticker } from './insta-sticker';

export interface MentionStickerOptions {
  userId: string;
  width?: number;
  height?: number;
}

export class MentionSticker extends InstaSticker implements MentionStickerOptions {
  public userId: string;
  public displayType: string = 'mention_username';
  width = 0.64;
  height = 0.125;

  get id(): string {
    return 'mention_sticker_vibrant';
  }

  get key(): string {
    return 'reel_mentions';
  }
}
