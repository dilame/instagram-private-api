import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { Feed } from '@igpapi/core';
import { AccountFollowingFeedResponse, AccountFollowingFeedResponseUsersItem } from '../responses';
import * as Chance from 'chance';

const chance = new Chance();

@injectable()
export class AccountFollowingFeed extends Feed<AccountFollowingFeedResponse, AccountFollowingFeedResponseUsersItem> {
  id: number | string;
  @Expose()
  private nextMaxId: string;
  @Expose()
  protected rankToken = chance.guid();

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: AccountFollowingFeedResponse) {
    this.hasMore = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<AccountFollowingFeedResponse>({
      url: `/api/v1/friendships/${this.id}/following/`,
      qs: {
        rank_token: this.rankToken,
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items({ users }: AccountFollowingFeedResponse) {
    return users;
  }
}
