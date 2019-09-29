export interface DiscoverRepositoryChainingResponseRootObject {
    users: DiscoverRepositoryChainingResponseUsersItem[];
    is_backup: boolean;
    is_recommend_account: boolean;
    available_recommend_count: number;
    status: string;
}
export interface DiscoverRepositoryChainingResponseUsersItem {
    pk: number;
    username: string;
    full_name: string;
    is_private: boolean;
    profile_pic_url: string;
    profile_pic_id?: string;
    is_verified: boolean;
    chaining_info: DiscoverRepositoryChainingResponseChaining_info;
    profile_chaining_secondary_label: string;
    social_context: string;
}
export interface DiscoverRepositoryChainingResponseChaining_info {
    sources: string;
}
