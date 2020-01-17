import { InstaSticker } from './insta-sticker';

export interface AttachmentStickerOptions {
  mediaId: string;
  mediaOwnerId: string;
}

export class AttachmentSticker extends InstaSticker implements AttachmentStickerOptions {
  mediaId: string;
  mediaOwnerId: string;
  width = 0.8;
  height = 0.67;

  get id(): string {
    return `media_simple_${this.mediaId}`;
  }

  get key(): string {
    return 'attached_media';
  }

  get additionalConfigureProperties(): any {
    return {
      reshared_media_id: this.mediaId,
    };
  }
}
