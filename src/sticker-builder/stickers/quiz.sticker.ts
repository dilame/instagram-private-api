import { InstaSticker } from './insta-sticker';

export interface QuizStickerOptions {
  question: string;
  options: string[];
  correctAnswer: number;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

export class QuizSticker extends InstaSticker implements QuizStickerOptions {
  question: string;
  // @ts-ignore
  options: Array<{text: string, count: number}>;
  correctAnswer: number;
  textColor: string =  '#ffffff';
  startBackgroundColor: string = '#262626';
  endBackgroundColor: string = '#262626';
  viewerCanAnswer: boolean = false;
  viewerAnswer: number = -1;

  public constructor() {
    super(0.7291667, 0.11824318 + 2 * 0.10304056);
  }

  get id(): string {
    return 'quiz_story_sticker_default';
  }

  get key(): string {
    return 'story_quizs';
  }
}
