import { InstaSticker } from './insta-sticker';

export interface PollStickerTallie {
  text: string;
  fontSize?: number;
}

export interface PollStickerOptions {
  question: string;
  tallies: [PollStickerTallie, PollStickerTallie];
}

export class PollSticker extends InstaSticker implements PollStickerOptions {
  question: string;
  tallies: [PollStickerTallie, PollStickerTallie];
  finished: boolean = false;
  viewerVote: number = 0;
  viewerCanVote: boolean = true;
  isSharedResult: boolean = false;
  width = 0.49934897;
  height = 0.1266892;

  get id(): string {
    return 'polling_sticker_vibrant';
  }

  get key(): string {
    return 'story_polls';
  }
}
