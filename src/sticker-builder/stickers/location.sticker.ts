import { InstaSticker } from './insta-sticker';

export interface LocationStickerOptions {
  locationId: string;
  width?: number;
  height?: number;
}

export class LocationSticker extends InstaSticker implements LocationStickerOptions {
  public locationId: string;
  width = 0.47;
  height = 0.111;

  public constructor() {
    super();
  }

  get id(): string {
    return 'location_sticker_vibrant';
  }

  get key(): string {
    return 'story_locations';
  }
}
