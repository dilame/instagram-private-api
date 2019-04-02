import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { Request } from '../core';
import { MediaResponse } from '../responses/media.response';

export class SelfLikedFeed extends AbstractFeed<MediaResponse> {
  constructor(session, public limit) {
    super(session);
    this.limit = parseInt(limit) || null;
  }

  async get() {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('selfLikedFeed', {
        maxId: this.getCursor(),
      })
      .send();
    const nextMaxId = data.next_max_id ? data.next_max_id.toString() : data.next_max_id;
    this.moreAvailable = data.more_available && !!nextMaxId;
    if (this.moreAvailable) this.setCursor(nextMaxId);
    return plainToClass(MediaResponse, data.items);
  }
}
