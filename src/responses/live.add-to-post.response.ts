export interface LiveAddToPostResponse {
  pk: string;
  user: LiveAddToPostUser;
  broadcasts: LiveAddToPostBroadcast[];
  last_seen_broadcast_ts: number;
  can_reply: boolean;
  can_reshare: boolean;
  status: string;
}

export interface LiveAddToPostBroadcast {
  id: string;
  broadcast_status: string;
  broadcast_owner: LiveAddToPostBroadcastOwner;
  published_time: number;
  hide_from_feed_unit: boolean;
  media_id: string;
  broadcast_message: string;
  organic_tracking_token: string;
}

export interface LiveAddToPostUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  is_verified: boolean;
}

export interface LiveAddToPostBroadcastOwner {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  friendship_status: LiveAddToPostFriendshipstatus;
  is_verified: boolean;
}

export interface LiveAddToPostFriendshipstatus {
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
