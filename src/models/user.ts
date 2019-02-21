import { Exclude, Expose, Type } from 'class-transformer';
import { FriendshipStatus } from './friendship-status';
import { AbstractModel } from './abstract.model';
import { ImageVersion } from './image-version';

export class User extends AbstractModel {
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
  can_link_entities_in_bio:boolean;
  can_boost_post: boolean;
  can_see_organic_insights: boolean;
  show_insights_terms: boolean;
  can_convert_to_business: boolean;
  can_create_sponsor_tags: boolean;
  can_be_tagged_as_sponsor: boolean;
  total_igtv_videos:number;
  total_ar_effects: number;
  is_profile_action_needed: boolean;
  usertags_count: number;
  usertag_review_enabled: boolean;
  is_needy: boolean;
  is_interest_account: boolean;
  has_recommend_accounts: boolean;
  has_chaining: boolean;
  has_placed_orders: boolean;
  can_tag_products_from_merchants: boolean;
  show_shoppable_feed: boolean;
  shoppable_posts_count: number;
  can_be_reported_as_fraud: boolean;
  show_business_conversion_icon: boolean;
  show_conversion_edit_entry: boolean;
  aggregate_promote_engagement: boolean;
  allowed_commenter_type: string;
  is_video_creator: boolean;
  has_profile_video_feed: boolean;
  has_highlight_reels: boolean;
  is_eligible_to_show_fb_cross_sharing_nux: boolean;
  direct_messaging: string;
  fb_page_call_to_action_id: string;
  address_street: string;
  business_contact_method: string;
  category: string;
  city_id: string | number;
  city_name: string;
  contact_phone_number: string;
  is_call_to_action_enabled: boolean;
  latitude: number;
  longitude: number;
  public_email: string;
  public_phone_country_code: string;
  public_phone_number: string;
  zip: string;
  can_claim_page: boolean;
  can_crosspost_without_fb_token: boolean;
  num_of_admined_pages: number;
  page_id: number | string;
  page_name: string;
  is_attribute_sync_enabled: boolean;
  has_business_presence_node: boolean;
  profile_visits_count: number;
  profile_visits_num_days: number;
  fb_page_call_to_action_ix_app_id: number;
  fb_page_call_to_action_ix_partner: string;
  fb_page_call_to_action_ix_url: string;
  instagram_location_id: string;
  is_business: boolean;
  account_type: number;
  can_hide_category: boolean;
  can_hide_public_contacts: boolean;
  should_show_category: boolean;
  should_show_public_contacts: boolean;
  include_direct_blacklist_status: boolean;
  can_follow_hashtag: boolean;
  is_potential_business: boolean;
  feed_post_reshare_disabled: boolean;
  besties_count: number;
  show_besties_badge: boolean;
  recently_bestied_by_count: number;
  auto_expand_chaining: boolean;
  highlight_reshare_disabled: boolean;
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
