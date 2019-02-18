import { Expose, Transform, Type } from 'class-transformer';
import { User } from './user';
import { Comment } from './comment';
import { ImageVersion } from './image-version';
import { Location } from './location';
import { VideoVersion } from './video-version';
import { AbstractModel } from './abstract.model';

export class Media extends AbstractModel {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  original_width: number;
  original_height: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  @Type(() => Comment)
  preview_comments: Comment[];
  can_view_more_preview_comments: number;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  carousel_media_count?: number;
  @Type(() => Media)
  carousel_media: Media[];
  @Type(() => ImageVersion)
  @Transform(image_versions2 => image_versions2.candidates, { toClassOnly: true })
  image_versions2: ImageVersion[];
  @Type(() => VideoVersion)
  video_versions: VideoVersion[];
  has_audio: boolean;
  video_duration: number;
  force_overlay: boolean;
  hide_nux_text: boolean;
  overlay_text: string;
  overlay_title: string;
  overlay_subtitle: string;
  @Type(() => Location)
  location: Location;
  lng: number;
  lat: number;
  caption_position: number;
  is_reel_media: boolean;
  @Type(() => User)
  user: User;
  @Type(() => Comment)
  caption: Comment | string | null;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: string[];
  @Type(() => User)
  likers: User[];
  direct_reply_to_author_enabled: boolean;
  photo_of_you: boolean;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  preview: string;
  inventory_source: string;
  expiring_at: number;
  imported_taken_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  is_seen: boolean;
  is_eof: boolean;
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  carousel_parent_id: string;

  @Expose()
  get webLink() {
    return `https://www.instagram.com/p/${this.code}/`;
  }

  // Backward compatibility
  @Expose()
  get account() {
    return this.user;
  }

  @Expose()
  get takenAt() {
    return this.taken_at * 1000;
  }

  @Expose()
  get images() {
    return this.image_versions2;
  }

  @Expose()
  get videos() {
    return this.video_versions;
  }
}
