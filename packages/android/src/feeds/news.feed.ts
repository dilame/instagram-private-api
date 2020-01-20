import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import { NewsFeedResponseRootObject, NewsFeedResponseStoriesItem } from '../responses';

export class NewsFeed extends Feed<NewsFeedResponseRootObject, NewsFeedResponseStoriesItem> {
  @Expose()
  private nextMaxId: string | number;

  set state(body: NewsFeedResponseRootObject) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<NewsFeedResponseRootObject>({
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
    return body.stories.map(user => plainToClassFromExist(new NewsFeedResponseStoriesItem(this.client), user));
  }
}
