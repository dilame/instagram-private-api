import { InstaSticker } from './insta-sticker';

export interface QuestionStickerOptions {
  question: string;
  questionType?: 'text' | 'music';
  backgroundColor?: string;
  textColor?: string;
  profilePicUrl?: string;
}

export class QuestionSticker extends InstaSticker implements QuestionStickerOptions {
  question: string;
  backgroundColor: string = '#ffffff';
  textColor: string = '#000000';
  profilePicUrl: string = '';
  questionType: 'text' | 'music' = 'text';
  viewerCanInteract: boolean = false;
  width = 0.7291667;
  height = 0.28716215;

  get id(): string {
    return 'question_sticker_ama';
  }

  get key(): string {
    return 'story_questions';
  }
}
