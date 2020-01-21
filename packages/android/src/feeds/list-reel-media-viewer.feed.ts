import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { ListReelMediaViewerFeedResponseRootObject, ListReelMediaViewerFeedResponseUsersItem } from '../responses';
import { Expose } from 'class-transformer';
import { AndroidState } from '../core/android.state';

@injectable()
export class ListReelMediaViewerFeed extends Feed<
  ListReelMediaViewerFeedResponseRootObject,
  ListReelMediaViewerFeedResponseUsersItem
> {
  @Expose()
  private mediaId: string;
  @Expose()
  private nextMaxId?: string = undefined;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(response: ListReelMediaViewerFeedResponseRootObject) {
    this.nextMaxId = response.next_max_id;
  }

  items({ users }: ListReelMediaViewerFeedResponseRootObject) {
    return users;
  }

  async request(): Promise<ListReelMediaViewerFeedResponseRootObject> {
    const { body } = await this.http.send<ListReelMediaViewerFeedResponseRootObject>({
      url: `/api/v1/media/${this.mediaId}/list_reel_media_viewer`,
      method: 'GET',
      qs: {
        supported_capabilities_new: this.clientState.supportedCapabilities,
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  isMoreAvailable(): boolean {
    return this.nextMaxId !== null;
  }
}
