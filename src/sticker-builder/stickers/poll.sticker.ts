import { InstaSticker } from './insta-sticker';

export interface PollStickerTallie {
  text: string;
  fontSize?: number;
}

type Tallies = [PollStickerTallie, PollStickerTallie];

export class PollSticker extends InstaSticker {
  // tslint:disable-next-line:variable-name
  private _tallies: Tallies;

  get tallies(): Tallies {
    return this._tallies;
  }

  set tallies(value: Tallies) {
    this._tallies = value.map(t => ({ fontSize: 28.0, ...t })) as Tallies;
  }

  question: string;

  finished?: boolean = false;
  viewerVote?: number = 0;
  viewerCanVote?: boolean = true;
  isSharedResult?: boolean = false;
  width = 0.49934897;
  height = 0.1266892;

  get id(): string {
    return 'polling_sticker_vibrant';
  }

  get key(): string {
    return 'story_polls';
  }
}
