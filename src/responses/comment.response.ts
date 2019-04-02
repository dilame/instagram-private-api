import { UserResponse } from './user.response';
import { Expose, Type } from 'class-transformer';
import { InstagramResponse } from './instagram.response';

export class CommentResponse extends InstagramResponse {
  pk: number | string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  @Type(() => UserResponse)
  user: UserResponse;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: number | string;
  has_translation: boolean;
  has_liked_comment: boolean;
  comment_like_count: number;

  @Expose()
  get account() {
    return this.user;
  }
}
