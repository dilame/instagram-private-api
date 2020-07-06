export interface FriendshipRepositoryChangeResponseRootObject {
  friendship_status: FriendshipRepositoryChangeResponseFriendship_status;
  status: string;
}

export interface FriendshipRepositoryChangeResponseFriendship_status {
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
