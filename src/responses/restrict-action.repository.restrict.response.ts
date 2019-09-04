export interface RestrictActionRepositoryRestrictResponseRootObject {
    users: RestrictActionRepositoryRestrictResponseUsersItem[];
    status: string;
}
export interface RestrictActionRepositoryRestrictResponseUsersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    friendship_status: RestrictActionRepositoryRestrictResponseFriendship_status;
    is_verified: boolean;
}
export interface RestrictActionRepositoryRestrictResponseFriendship_status {
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
