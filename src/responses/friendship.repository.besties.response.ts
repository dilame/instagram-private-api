export interface FriendshipRepositorySetBestiesResponseRootObject {
  friendship_statuses: Record<string, FriendshipRepositorySetBestiesResponseRootObject_status>;
  status: string;
}

export interface FriendshipRepositorySetBestiesResponseRootObject_status {
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
