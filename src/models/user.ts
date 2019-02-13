import { Exclude, Expose, Type } from 'class-transformer';
import { FriendshipStatus } from './friendship-status';
import { BaseModel } from './_base-model';
import { ImageVersion } from './image-version';

export class User extends BaseModel {
  pk: number | string;
  instagram_id: number | string;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  has_anonymous_profile_picture: boolean;
  media_count: number;
  geo_media_count: number;
  follower_count: number;
  following_count: number;
  following_tag_count: number;
  mutual_followers_count: number;
  reel_auto_archive: string;
  byline: string;
  biography: string;
  external_url: string;
  external_lynx_url: string;
  @Type(() => FriendshipStatus)
  friendship_status: FriendshipStatus;
  @Type(() => ImageVersion)
  hd_profile_pic_versions: ImageVersion[];
  @Type(() => ImageVersion)
  hd_profile_pic_url_info: ImageVersion;
  @Exclude()
  _id: number | string;

  @Expose()
  get id() {
    return (this.pk || this._id || this.instagram_id).toString();
  }

  set id(v) {
    this._id = v;
  }

  @Expose()
  get picture() {
    return this.profile_pic_url;
  }
}
