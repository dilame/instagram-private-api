import { InstaSticker } from './insta-sticker';

export interface CountdownStickerOptions {
  endTs: number;
  text: string;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
  digitColor?: string;
  digitCardColor?: string; // with alpha
}

export class CountdownSticker extends InstaSticker implements CountdownStickerOptions {
  endTs: number;
  text: string;
  textColor: string = '#ffffff';
  startBackgroundColor: string = '#ca2ee1';
  endBackgroundColor: string = '#5eb1ff';
  digitColor: string = '#7e0091';
  digitCardColor: string = '#ffffffcc';
  followingEnabled: boolean = true;
  width = 0.703125;
  height = 0.26013514;

  get id(): string {
    return 'countdown_sticker_time';
  }

  get key(): string {
    return 'story_countdowns';
  }
}
