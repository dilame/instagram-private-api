export interface LiveJoinRequestCountsResponseRootObject {
    fetch_ts: number;
    num_total_requests: number;
    num_new_requests: number;
    users: LiveJoinRequestCountsResponseUsersItem[];
    num_unseen_requests: number;
    status: string;
}
export interface LiveJoinRequestCountsResponseUsersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    live_with_eligibility: string;
}
