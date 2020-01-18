import { InstaSticker } from './insta-sticker';
import { Enumerable } from '../../decorators';

export class MentionSticker extends InstaSticker {
  public userId: string;
  public displayType?: 'mention_username' | 'mention_reshare' = 'mention_username';
  @Enumerable(false)
  public mediaId?: string;
  width = 0.64;
  height = 0.125;

  get id(): string {
    return 'mention_sticker_vibrant';
  }

  get key(): string {
    return 'reel_mentions';
  }

  get additionalConfigureProperties(): any {
    return this.displayType === 'mention_reshare' ? { reshared_media_id: this.mediaId } : null;
  }
}
