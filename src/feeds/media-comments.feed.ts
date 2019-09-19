import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { MediaCommentsFeedResponse, MediaCommentsFeedResponseCommentsItem } from '../responses/';

export class MediaCommentsFeed extends Feed<MediaCommentsFeedResponse, MediaCommentsFeedResponseCommentsItem> {
  id: string;
  @Expose()
  private nextMaxId: string;
  @Expose()
  private nextMinId: string;

  set state(body: MediaCommentsFeedResponse) {
    this.moreAvailable = !!body.next_max_id || !!body.next_min_id;
    this.nextMaxId = body.next_max_id;
    this.nextMinId = body.next_min_id;
  }

  async request() {
    const { body } = await this.client.request.send<MediaCommentsFeedResponse>({
      url: `/api/v1/media/${this.id}/comments/`,
      qs: {
        can_support_threading: true,
        max_id: this.nextMaxId,
        min_id: this.nextMinId,
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
