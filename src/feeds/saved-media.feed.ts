import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { MediaResponse } from '../responses/media.response';
import { Request } from '../core/request';

export class SavedMediaFeed extends AbstractFeed<MediaResponse> {
  constructor(session, public limit) {
    super(session);
  }

  async get(): Promise<MediaResponse[]> {
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
    return plainToClass(MediaResponse, data.items.map(i => i.media));
  }
}
