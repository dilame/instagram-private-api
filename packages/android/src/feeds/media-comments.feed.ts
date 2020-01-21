import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { MediaCommentsFeedResponse, MediaCommentsFeedResponseCommentsItem } from '../responses';

@injectable()
export class MediaCommentsFeed extends Feed<MediaCommentsFeedResponse, MediaCommentsFeedResponseCommentsItem> {
  id: string;
  @Expose()
  private nextMaxId: string;
  @Expose()
  private nextMinId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(body: MediaCommentsFeedResponse) {
    this.done = !!body.next_max_id || !!body.next_min_id;
    this.nextMaxId = body.next_max_id;
    this.nextMinId = body.next_min_id;
  }

  async request() {
    const { body } = await this.http.send<MediaCommentsFeedResponse>({
      url: `/api/v1/media/${this.id}/comments/`,
      qs: {
        can_support_threading: true,
        max_id: this.nextMaxId,
        min_id: this.nextMinId,
      },
    });

    return body;
  }

  items(raw: MediaCommentsFeedResponse) {
    return raw.comments;
  }
}
