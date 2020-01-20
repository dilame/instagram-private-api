export interface FriendshipRepositoryShowResponseRootObject {
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_blocking_reel: boolean;
  is_muting_reel: boolean;
  is_bestie: boolean;
  status: string;
}
