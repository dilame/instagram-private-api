import { InstaSticker } from './insta-sticker';

export interface LocationStickerOptions {
  locationId: string;
  width?: number;
  height?: number;
}

export class LocationSticker extends InstaSticker implements LocationStickerOptions {
  public locationId: string;

  public constructor() {
    super(0.47, 0.111);
  }

  get id(): string {
    return 'location_sticker_vibrant';
  }

  get key(): string {
    return 'story_locations';
  }
}
