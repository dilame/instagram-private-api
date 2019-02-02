import { plainToClass } from 'class-transformer';
import { User } from '../../models/user';
import { Request } from '../../request';
import { BaseFeed } from './_base.feed';

const Helpers = require('../../helpers');

export class AccountFollowingFeed extends BaseFeed {
  constructor(session, public accountId, public limit = 7500) {
    super(session);
  }

  async get() {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('followingFeed', {
        id: this.accountId,
        maxId: this.getCursor(),
        rankToken: Helpers.generateUUID(),
      })
      .send();
    this.moreAvailable = !!data.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(data.next_max_id);
    }
    return plainToClass(User, data.users);
  }
}
