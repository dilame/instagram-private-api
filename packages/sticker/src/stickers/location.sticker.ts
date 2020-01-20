import { InstaSticker } from './insta-sticker';

export class LocationSticker extends InstaSticker {
  public locationId: string;
  width = 0.47;
  height = 0.111;

  get id(): string {
    return 'location_sticker_vibrant';
  }

  get key(): string {
    return 'story_locations';
  }
}
