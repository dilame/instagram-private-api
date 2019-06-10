export interface LiveViewerListResponseRootObject {
    users: LiveViewerListResponseUsersItem[];
    status: string;
}
export interface LiveViewerListResponseUsersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    is_verified: boolean;
    live_with_eligibility: string;
}
