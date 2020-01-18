import { InstaSticker } from './insta-sticker';
import { DateTime } from 'luxon';

export class CountdownSticker extends InstaSticker {
  // tslint:disable-next-line:variable-name
  private _endTs: number;

  get endTs() {
    return this._endTs;
  }

  set endTs(value: DateTime | number) {
    if (typeof value === 'number') {
      this._endTs = value;
    } else {
      this._endTs = Math.floor(value.toUTC().toSeconds());
    }
  }

  text: string;
  textColor?: string = '#ffffff';
  startBackgroundColor?: string = '#ca2ee1';
  endBackgroundColor?: string = '#5eb1ff';
  digitColor?: string = '#7e0091';
  digitCardColor?: string = '#ffffffcc';
  followingEnabled?: boolean = true;
  width = 0.703125;
  height = 0.26013514;

  get id(): string {
    return 'countdown_sticker_time';
  }

  get key(): string {
    return 'story_countdowns';
  }
}
