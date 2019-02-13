import * as _ from 'lodash';
import { plainToClass } from 'class-transformer';
import { BaseFeed } from './_base.feed';
import { Request } from '../../request';
import { OnlyRankedItemsError, ParseError, PlaceNotFound } from '../../exceptions';
import { Media } from '../../models/media';


export class LocationMediaFeed extends BaseFeed {
  constructor(session, public locationId: string | number, public limit = Infinity) {
    super(session);
  }

  async get(): Promise<Media[]> {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('locationFeed', {
        id: this.locationId,
        maxId: this.getCursor(),
        rankToken: this.rankToken,
      })
      .send()
      // will throw an error with 500 which turn to parse error
      .catch(ParseError, () => {
        throw new PlaceNotFound();
      });
    this.moreAvailable = data.more_available && !!data.next_max_id;
    if (!this.moreAvailable && !_.isEmpty(data.ranked_items) && !this.getCursor())
      throw new OnlyRankedItemsError();
    if (this.moreAvailable) this.setCursor(data.next_max_id);
    return plainToClass(Media, data.items);
  }
}
