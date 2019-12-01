import { InstaSticker } from './insta-sticker';

export interface LocationStickerOptions {
  locationId: string;
  width?: number;
  height?: number;
}

export class LocationSticker extends InstaSticker {
  public locationId: string;

  public constructor(options: LocationStickerOptions) {
    super(options.width || 0.47, options.height || 0.111);
    this.locationId = options.locationId;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.toSnakeCase({locationId: this.locationId}),
    };
  }

  get id(): string {
    return 'location_sticker_vibrant';
  }

  get key(): string {
    return 'story_locations';
  }
}
