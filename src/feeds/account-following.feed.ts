import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { AccountFollowingResponse } from '../responses/feeds/account-following.response';

export class AccountFollowingFeed extends AbstractFeed<AccountFollowingResponse> {
  id: number | string;
  async get(): Promise<AccountFollowingResponse[]> {
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/${this.id}/following/?${this.cursor ? `max_id=${this.cursor}&` : ''}rank_token=${
        this.rankToken
      }`,
    });
    this.moreAvailable = !!body.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(body.next_max_id);
    }
    return plainToClass(AccountFollowingResponse, body.users);
  }
}
