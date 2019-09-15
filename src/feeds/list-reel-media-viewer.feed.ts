import { Feed } from '../core/feed';
import { ListReelMediaViewerFeedResponseRootObject, ListReelMediaViewerFeedResponseUsersItem } from '../responses';
import { Expose } from 'class-transformer';

export class ListReelMediaViewerFeed extends Feed<
  ListReelMediaViewerFeedResponseRootObject,
  ListReelMediaViewerFeedResponseUsersItem
> {
  @Expose()
  private mediaId: string;
  @Expose()
  private nextMaxId?: string = undefined;

  async items(): Promise<ListReelMediaViewerFeedResponseUsersItem[]> {
    const res = await this.request();
    return res.users;
  }

  protected set state(response: ListReelMediaViewerFeedResponseRootObject) {
    this.nextMaxId = response.next_max_id;
  }

  async request(): Promise<ListReelMediaViewerFeedResponseRootObject> {
    const { body } = await this.client.request.send<ListReelMediaViewerFeedResponseRootObject>({
      url: `/api/v1/media/${this.mediaId}/list_reel_media_viewer`,
      method: 'GET',
      qs: {
        supported_capabilities_new: this.client.state.supportedCapabilities,
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  isMoreAvailable(): boolean {
    return this.nextMaxId !== null;
  }
}
