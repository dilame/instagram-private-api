import { InstaSticker } from './insta-sticker';
import { defaults } from 'lodash';

export interface SliderStickerOptions {
  question: string;
  emoji: string;
  backgroundColor?: string;
  textColor?: string;
}

export class SliderSticker extends InstaSticker {
  public options: SliderStickerOptions;

  public constructor(options: SliderStickerOptions) {
    super(0.7291667, 0.22212838);
    this.options = defaults(options, {
      backgroundColor: '#ffffff',
      textColor: '#000000',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_can_vote: false,
      slider_vote_count: 0,
      viewer_vote: -1.0,
      slider_vote_average: 0.0,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return `emoji_slider_${this.options.emoji}`;
  }

  get key(): string {
    return 'story_sliders';
  }
}
