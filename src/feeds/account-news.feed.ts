import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { NewsFeedResponse, NewsFeedResponseUsersItem } from '../responses';

export class NewsFeed extends Feed<NewsFeedResponse, NewsFeedResponseUsersItem> {
  @Expose()
  private nextMaxId: string;

  set state(body: NewsFeedResponse) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<NewsFeedResponse>({
      url: `/api/v1/news`,
      qs: {
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.users.map(user => plainToClassFromExist(new NewsFeedResponseUsersItem(this.client), user));
  }
}
