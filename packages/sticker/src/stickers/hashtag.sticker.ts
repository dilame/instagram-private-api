import { InstaSticker } from './insta-sticker';

export class HashtagSticker extends InstaSticker {
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
