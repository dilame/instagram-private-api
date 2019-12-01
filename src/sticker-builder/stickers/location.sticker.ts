import { InstaSticker } from './insta-sticker';

export interface LocationStickerOptions {
  locationId: string;
  width?: number;
  height?: number;
}

export class LocationSticker extends InstaSticker {
  public options: LocationStickerOptions;

  public constructor(options: LocationStickerOptions) {
    super(options.width || 0.47, options.height || 0.111);
    delete options.width;
    delete options.height;
    this.options = options;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'location_sticker_vibrant';
  }

  get key(): string {
    return 'story_locations';
  }
}
