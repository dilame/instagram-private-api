import { InstaSticker } from './insta-sticker';

type Options = Array<{ text: string; count: number }>;

export class QuizSticker extends InstaSticker {
  private _options: Options;
  question: string;
  set options(value: string[] | Options) {
    let options: Options;
    function isArrayOfString(x: any): x is string[] {
      return typeof x[0] === 'string';
    }
    if (isArrayOfString(value)) {
      options = value.map(o => ({ text: o, count: 0 }));
    } else options = value;
    this._options = options;
  }
  get options() {
    return this._options;
  }
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
