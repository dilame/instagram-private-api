export interface LiveInfoResponseRootObject {
  id: string;
  rtmp_playback_url: string;
  dash_playback_url: string;
  dash_abr_playback_url: null;
  dash_live_predictive_playback_url: string;
  broadcast_status: string;
  viewer_count: number;
  internal_only: boolean;
  cobroadcasters: any[];
  is_player_live_trace_enabled: number;
  is_gaming_content: boolean;
  broadcast_owner: LiveInfoResponseBroadcast_owner;
  published_time: number;
  hide_from_feed_unit: boolean;
  media_id: string;
  broadcast_message: string;
  organic_tracking_token: string;
  status: string;
}
export interface LiveInfoResponseBroadcast_owner {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: LiveInfoResponseFriendship_status;
  is_verified: boolean;
}
export interface LiveInfoResponseFriendship_status {
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
