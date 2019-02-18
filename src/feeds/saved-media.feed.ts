import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { Media } from '../models/media';
import { Request } from '../core/request';

export class SavedMediaFeed extends AbstractFeed<Media> {
  constructor(session, public limit) {
    super(session);
  }

  async get(): Promise<Media[]> {
    const data = await new Request(this.session)
      .setMethod('POST')
      .setResource('savedFeed', {
        maxId: this.cursor,
      })
      .generateUUID()
      .setData({})
      .signPayload()
      .send();
    this.moreAvailable = data.more_available;
    if (this.moreAvailable && data.next_max_id) {
      this.setCursor(data.next_max_id);
    }
    return plainToClass(Media, data.items.map(i => i.media));
  }
}

