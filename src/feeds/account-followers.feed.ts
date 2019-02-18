import { Request } from '../core/request';
import { plainToClass } from 'class-transformer';
import { User } from '../models/user';
import { AbstractFeed } from './abstract.feed';

export class AccountFollowersFeed extends AbstractFeed<User> {
  constructor(session, public accountId, public limit = Infinity) {
    super(session);
  }

  async get(): Promise<User[]> {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('followersFeed', {
        id: this.accountId,
        maxId: this.cursor,
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
