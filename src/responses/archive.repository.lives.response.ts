export interface ArchiveRepositoryLivesResponseRootObject {
  items: ArchiveRepositoryLivesResponseResultsItem[];
  count: number;
  status: string;
}
export interface ArchiveRepositoryLivesResponseResultsItem {
  pk: string;
  user: ArchiveRepositoryLivesResponseUsersItem;
  broadcast: ArchiveRepositoryLivesResponseBroadcastsItem;
  last_seen_broadcast_ts: number;
  can_reply: boolean;
  can_reshare: boolean;
  can_share_to_igtv: boolean;
}

export class ArchiveRepositoryLivesResponseUsersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  is_verified: boolean;
}

export class ArchiveRepositoryLivesResponseBroadcastsItem {
  id: number;
  broadcast_status: string;
  broadcast_owner: ArchiveRepositoryLivesResponseBroadcastOwnersItem;
  published_time: number;
  video_duration: number;
  media_id: string;
  broadcast_message: string;
  internal_only: boolean;
  cover_frame_url: string;
  progressive_playback_url: string;
}

export class ArchiveRepositoryLivesResponseBroadcastOwnersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  friendship_status: ArchiveRepositoryLivesResponseBroadcastOwnerFriendshipStatusesItem;
  is_verified: boolean;
}

export class ArchiveRepositoryLivesResponseBroadcastOwnerFriendshipStatusesItem {
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