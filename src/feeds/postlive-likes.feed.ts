import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { PostLiveLikesFeedResponse } from '../responses';

export class PostLiveLikesFeed extends Feed<PostLiveLikesFeedResponse, any> {
  id: string;
  @Expose()
  private next_fetch_offset: string;

  set state(body: PostLiveLikesFeedResponse) {
    this.moreAvailable = !!body.next_fetch_offset;
    this.next_fetch_offset = body.next_fetch_offset;
  }

  async request() {
    const { body } = await this.client.request.send<PostLiveLikesFeedResponse>({
      url: `/api/v1/live/${this.id}/get_post_live_likes/`,
      qs: {
        starting_offset: this.next_fetch_offset,
        encodingTag: 'instagram_dash_remuxed',
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    // const response = await this.request();
    await this.request();
    return [];
  }
}
