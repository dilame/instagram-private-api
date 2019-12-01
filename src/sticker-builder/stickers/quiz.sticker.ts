import { InstaSticker } from './insta-sticker';
import { defaults } from 'lodash';

export interface QuizStickerOptions {
  question: string;
  options: string[];
  correctAnswer: number;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

export class QuizSticker extends InstaSticker {
  public options: QuizStickerOptions;

  public constructor(options: QuizStickerOptions) {
    super(0.7291667, 0.11824318 + options.options.length * 0.10304056);
    this.options = defaults(options, {
      textColor: '#ffffff',
      startBackgroundColor: '#262626',
      endBackgroundColor: '#262626',
    });
    // @ts-ignore
    this.options.options = this.options.options.map(o => ({ text: o, count: 0 }));
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_can_answer: false,
      viewer_answer: -1,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'quiz_story_sticker_default';
  }

  get key(): string {
    return 'story_quizs';
  }
}
