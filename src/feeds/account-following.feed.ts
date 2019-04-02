import { plainToClass } from 'class-transformer';
import { UserResponse } from '../responses/user.response';
import { Request } from '../core/request';
import { AbstractFeed } from './abstract.feed';

export class AccountFollowingFeed extends AbstractFeed<UserResponse> {
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
    return plainToClass(UserResponse, data.users);
  }
}
