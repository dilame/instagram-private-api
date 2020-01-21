import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { Expose } from 'class-transformer';
import {
  MediaInlineChildCommentsFeedResponseChildCommentsItem,
  MediaInlineChildCommentsFeedResponseRootObject,
} from '../responses';

@injectable()
export class MediaInlineChildCommentsFeed extends Feed<
  MediaInlineChildCommentsFeedResponseRootObject,
  MediaInlineChildCommentsFeedResponseChildCommentsItem
> {
  mediaId: string;
  commentId: string;
  @Expose()
  private nextMaxId: string;
  @Expose()
  private nextMinId?: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(state: MediaInlineChildCommentsFeedResponseRootObject) {
    this.hasMore = !!state.next_max_child_cursor;
    this.nextMaxId = state.next_max_child_cursor;
    this.nextMinId = undefined;
  }

  public async request(): Promise<MediaInlineChildCommentsFeedResponseRootObject> {
    const { body } = await this.http.send({
      url: `/api/v1/media/${this.mediaId}/comments/${this.commentId}/inline_child_comments/`,
      qs: {
        min_id: this.nextMinId,
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: MediaInlineChildCommentsFeedResponseRootObject) {
    return raw.child_comments;
  }
}
