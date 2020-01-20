import { Feed } from '../core/feed';
import { Expose } from 'class-transformer';
import {
  MediaInlineChildCommentsFeedResponseChildCommentsItem,
  MediaInlineChildCommentsFeedResponseRootObject,
} from '../responses/media.inline-child-comments.feed.response';

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

  set state(state: MediaInlineChildCommentsFeedResponseRootObject) {
    this.moreAvailable = !!state.next_max_child_cursor;
    this.nextMaxId = state.next_max_child_cursor;
    this.nextMinId = undefined;
  }

  public async request(): Promise<MediaInlineChildCommentsFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${this.mediaId}/comments/${this.commentId}/inline_child_comments/`,
      qs: {
        min_id: this.nextMinId,
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  public async items(): Promise<MediaInlineChildCommentsFeedResponseChildCommentsItem[]> {
    const req = await this.request();
    return req.child_comments;
  }
}
