import { InstaSticker } from './insta-sticker';

export class QuestionSticker extends InstaSticker {
  question: string;
  backgroundColor?: string = '#ffffff';
  textColor?: string = '#000000';
  profilePicUrl?: string = '';
  questionType?: 'text' | 'music' = 'text';
  viewerCanInteract?: boolean = false;
  width = 0.7291667;
  height = 0.28716215;

  get id(): string {
    return 'question_sticker_ama';
  }

  get key(): string {
    return 'story_questions';
  }
}
