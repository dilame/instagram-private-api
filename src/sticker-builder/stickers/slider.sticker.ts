import { InstaSticker } from './insta-sticker';

export interface SliderStickerOptions {
  question: string;
  emoji: string;
  backgroundColor?: string;
  textColor?: string;
}

export class SliderSticker extends InstaSticker implements SliderStickerOptions {
  question: string;
  emoji: string;
  backgroundColor: string = '#ffffff';
  textColor: string = '#000000';

  viewerCanVote: boolean = false;
  sliderVoteCount: number = 0;
  viewerVote: number = -1.0;
  sliderVoteAverage: number = 0.0;

  public constructor() {
    super(0.7291667, 0.22212838);
  }

  get id(): string {
    return `emoji_slider_${this.emoji}`;
  }

  get key(): string {
    return 'story_sliders';
  }
}
