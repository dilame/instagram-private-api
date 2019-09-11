import { MediaCommentsFeedResponseCommentsItem } from './media-comments.feed.response';

export interface PostLiveCommentsFeedResponse {
  comments: PostLiveCommentsFeedResponseCommentsItem[];
  pinned_comments: PostLiveCommentsFeedResponseCommentsItem[];
  starting_offset: string;
  ending_offset: string;
  next_fetch_offset: string;
  status: string;
}
export interface PostLiveCommentsFeedResponseCommentsItem {
  comment: MediaCommentsFeedResponseCommentsItem;
  event: string;
  offset: string;
}
