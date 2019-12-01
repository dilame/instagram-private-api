import { InstaSticker } from './insta-sticker';
import { defaults } from 'lodash';

export interface ChatStickerOptions {
  text: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

export class ChatSticker extends InstaSticker {
  public options: ChatStickerOptions;

  public constructor(options: ChatStickerOptions) {
    super(0.453125, 0.1266892);
    this.options = defaults(options, {
      startBackgroundColor: '#3897f0',
      endBackgroundColor: '#27c4f5',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      has_started_chat: false,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'chat_sticker_id';
  }

  get key(): string {
    return 'story_chats';
  }
}
