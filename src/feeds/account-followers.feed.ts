import { plainToClass } from 'class-transformer';
import { AbstractFeed } from './abstract.feed';
import { AccountFollowerResponse } from '../responses/feeds/account-follower.response';

export class AccountFollowersFeed extends AbstractFeed<AccountFollowerResponse> {
  id: number | string;
  async get(): Promise<AccountFollowerResponse[]> {
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/${this.id}/followers/${this.cursor ? `?max_id=${this.cursor}` : ''}`,
    });
    this.moreAvailable = !!body.next_max_id;
    if (this.moreAvailable) {
      this.setCursor(body.next_max_id);
    }
    return plainToClass(AccountFollowerResponse, body.users);
  }
}
