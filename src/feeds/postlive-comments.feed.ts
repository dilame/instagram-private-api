import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { PostLiveCommentsFeedResponse } from '../responses';

export class PostLiveCommentsFeed extends Feed<PostLiveCommentsFeedResponse, any> {
  id: string;
  @Expose()
  private next_fetch_offset: string;

  set state(body: PostLiveCommentsFeedResponse) {
    this.moreAvailable = !!body.next_fetch_offset;
    this.next_fetch_offset = body.next_fetch_offset;
  }

  async request() {
    const { body } = await this.client.request.send<PostLiveCommentsFeedResponse>({
      url: `/api/v1/live/${this.id}/get_post_live_comments/`,
      qs: {
        starting_offset: this.next_fetch_offset,
        encodingTag: 'instagram_dash_remuxed',
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const response = await this.request();
    return response.comments;
  }
}
