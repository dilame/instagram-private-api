import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import * as Chance from 'chance';
import { Feed } from '@igpapi/core';
import { AndroidHttp } from '../core/android.http';
import { PendingFriendshipsFeedResponse, PendingFriendshipsFeedResponseUsersItem } from '../responses';

const chance = new Chance();

@injectable()
export class PendingFriendshipsFeed extends Feed<
  PendingFriendshipsFeedResponse,
  PendingFriendshipsFeedResponseUsersItem
> {
  @Expose()
  private nextMaxId: string;
  @Expose()
  protected rankToken = chance.guid();

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: PendingFriendshipsFeedResponse) {
    this.hasMore = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.http.send<PendingFriendshipsFeedResponse>({
      url: `/api/v1/friendships/pending`,
      qs: {
        rank_token: this.rankToken,
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items({ users }: PendingFriendshipsFeedResponse) {
    return users;
  }
}
