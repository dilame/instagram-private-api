import { InstaSticker } from './insta-sticker';
import { defaults } from 'lodash';

export interface QuestionStickerOptions {
  question: string;
  questionType?: 'text' | 'music';
  backgroundColor?: string;
  textColor?: string;
  profilePicUrl?: string;
}

export class QuestionSticker extends InstaSticker {
  public options: QuestionStickerOptions;

  public constructor(options: QuestionStickerOptions) {
    super(0.7291667, 0.28716215);
    this.options = defaults(options, {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      profilePicUrl: '',
      questionType: 'text',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_can_interact: false,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'question_sticker_ama';
  }

  get key(): string {
    return 'story_questions';
  }
}
