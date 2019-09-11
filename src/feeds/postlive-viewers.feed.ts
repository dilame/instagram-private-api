import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { PostLiveViewersFeedResponse, PostLiveViewersFeedResponseUsersItem } from '../responses';

export class PostLiveViewersFeed extends Feed<PostLiveViewersFeedResponse, PostLiveViewersFeedResponseUsersItem> {
  id: string;
  @Expose()
  private nextMaxId: string;

  set state(body: PostLiveViewersFeedResponse) {
    this.moreAvailable = !!body.next_max_id;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<PostLiveViewersFeedResponse>({
      url: `/api/v1/live/${this.id}/get_post_live_viewers_list/`,
      qs: {
        can_support_threading: true,
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const response = await this.request();
    return response.users;
  }
}
