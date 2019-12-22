import { InstaSticker } from './insta-sticker';

export interface ChatStickerOptions {
  text: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

export class ChatSticker extends InstaSticker implements ChatStickerOptions {
  text: string;
  startBackgroundColor: string = '#3897f0';
  endBackgroundColor: string = '#27c4f5';
  hasStartedChat: boolean = false;
  width = 0.453125;
  height = 0.1266892;

  get id(): string {
    return 'chat_sticker_id';
  }

  get key(): string {
    return 'story_chats';
  }
}
