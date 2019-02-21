import { Media } from '../models/media';
import { plainToClass } from 'class-transformer';
import { Request, Session } from '../core';
import { AbstractFeed } from './abstract.feed';

export class UserMediaFeed extends AbstractFeed<Media> {
  constructor(session: Session, public accountId: string | number, public limit = Infinity) {
    super(session);
  }

  async get(): Promise<Media[]> {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('userFeed', {
        id: this.accountId,
        maxId: this.getCursor(),
      })
      .send();
    this.moreAvailable = data.more_available && !!data.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(data.next_max_id);
    }
    return plainToClass(Media, data.items);
  }
}
