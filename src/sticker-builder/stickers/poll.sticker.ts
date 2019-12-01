import { InstaSticker } from './insta-sticker';
import { defaults } from 'lodash';

export interface PollStickerTallie {
  text: string;
  fontSize?: number;
}

export interface PollStickerOptions {
  question: string;
  tallies: [PollStickerTallie, PollStickerTallie];
}

export class PollSticker extends InstaSticker {
  public options: PollStickerOptions;

  public constructor(options: PollStickerOptions) {
    super(0.49934897, 0.1266892);
    this.options = options;
    // @ts-ignore
    this.options.tallies = this.options.tallies.map(t => defaults(t, { fontSize: 28.0 }));
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_vote: 0,
      viewer_can_vote: true,
      is_shared_result: false,
      finished: false,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'polling_sticker_vibrant';
  }

  get key(): string {
    return 'story_polls';
  }
}
