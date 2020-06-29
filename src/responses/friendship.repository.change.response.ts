export interface FriendshipRepositoryChangeResponseRootObject {
  friendship_status: FriendshipRepositoryResponseFriendship_status;
  status: string;
}
export interface FriendshipBestiesRepositoryResponseRootObject {
  friendship_statuses: Record<string, FriendshipRepositoryResponseFriendship_status>;
  status: string;
}
export interface FriendshipRepositoryResponseFriendship_status {
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
