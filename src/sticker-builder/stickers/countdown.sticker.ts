import { DateTime } from 'luxon';
import { InstaSticker } from './insta-sticker';
import { defaults } from 'lodash';

export interface CountdownStickerOptions {
  endTs: DateTime;
  text: string;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
  digitColor?: string;
  digitCardColor?: string; // with alpha
}

export class CountdownSticker extends InstaSticker {
  public options: CountdownStickerOptions;

  public constructor(options: CountdownStickerOptions) {
    super(0.703125, 0.26013514);
    this.options = defaults(options, {
      textColor: '#ffffff',
      startBackgroundColor: '#ca2ee1',
      endBackgroundColor: '#5eb1ff',
      digitColor: '#7e0091',
      digitCardColor: '#ffffffcc',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      following_enabled: true,
      ...this.toSnakeCase(this.options),
      // has to be overwritten
      end_ts: Math.floor(this.options.endTs.toUTC().toSeconds()),
    };
  }

  get id(): string {
    return 'countdown_sticker_time';
  }

  get key(): string {
    return 'story_countdowns';
  }
}
