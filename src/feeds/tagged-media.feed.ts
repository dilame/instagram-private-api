import * as _ from 'lodash';
import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { Media } from '../models/media';
import { Request } from '../core/request';
import { OnlyRankedItemsError } from '../core/exceptions';


export class TaggedMediaFeed extends AbstractFeed<Media> {
  constructor(session, public tag: string, public limit = Infinity) {
    super(session);
  }

  async getRawResponse() {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('tagFeed', {
        tag: this.tag,
        maxId: this.getCursor(),
        rankToken: this.rankToken,
      })
      .send();
    this.moreAvailable = data.more_available && !!data.next_max_id;
    if (this.moreAvailable) this.setCursor(data.next_max_id);
    return data;
  }

  async get(): Promise<Media[]> {
    const data = await this.getRawResponse();
    if (!this.moreAvailable && !_.isEmpty(data.ranked_items) && !this.getCursor())
      throw new OnlyRankedItemsError();
    return plainToClass(Media, data.items);
  }

  async getRankedItems(): Promise<Media[]> {
    const data = await this.getRawResponse();
    return plainToClass(Media, data.ranked_items);
  }
}

