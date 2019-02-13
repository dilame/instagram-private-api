import { plainToClass } from 'class-transformer';
import { User } from '../../models/user';
import { Request } from '../../request';
import { BaseFeed } from './_base.feed';

export class AccountFollowingFeed extends BaseFeed {
  constructor(session, public accountId, public limit = Infinity) {
    super(session);
  }

  async get() {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('followingFeed', {
        id: this.accountId,
        maxId: this.getCursor(),
        rankToken: this.rankToken,
      })
      .send();
    this.moreAvailable = !!data.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(data.next_max_id);
    }
    return plainToClass(User, data.users);
  }
}
