import { InstaSticker } from './insta-sticker';

export interface QuizStickerOptions {
  question: string;
  /**
   * Array<{ text: string; count: number }> is only used internally, use string[]
   */
  options: string[] | Array<{ text: string; count: number }>;
  correctAnswer: number;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

export class QuizSticker extends InstaSticker implements QuizStickerOptions {
  question: string;
  options: Array<{ text: string; count: number }>;
  correctAnswer: number;
  textColor: string = '#ffffff';
  startBackgroundColor: string = '#262626';
  endBackgroundColor: string = '#262626';
  viewerCanAnswer: boolean = false;
  viewerAnswer: number = -1;
  width = 0.7291667;
  height = 0.11824318 + 2 * 0.10304056;

  get id(): string {
    return 'quiz_story_sticker_default';
  }

  get key(): string {
    return 'story_quizs';
  }
}
