import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { Feed } from '@igpapi/core';
import { AccountFollowersFeedResponse, AccountFollowersFeedResponseUsersItem } from '../responses';

@injectable()
export class AccountFollowersFeed extends Feed<AccountFollowersFeedResponse, AccountFollowersFeedResponseUsersItem> {
  id: number | string;
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: AccountFollowersFeedResponse) {
    this.done = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<AccountFollowersFeedResponse>({
      url: `/api/v1/friendships/${this.id}/followers/`,
      qs: {
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items({ users }: AccountFollowersFeedResponse) {
    return users;
  }
}
