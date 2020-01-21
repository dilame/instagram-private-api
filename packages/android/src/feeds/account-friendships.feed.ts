import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { Feed } from '@igpapi/core';
import { PendingFriendshipsFeedResponse, PendingFriendshipsFeedResponseUsersItem } from '../responses';

@injectable()
export class PendingFriendshipsFeed extends Feed<
  PendingFriendshipsFeedResponse,
  PendingFriendshipsFeedResponseUsersItem
> {
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: PendingFriendshipsFeedResponse) {
    this.done = !!body.next_max_id;
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
