export interface FeedPostsInsightsFeedResponseRootObject {
    data: FeedPostsInsightsFeedResponseData;
}
export interface FeedPostsInsightsFeedResponseData {
    user: FeedPostsInsightsFeedResponseUser;
}
export interface FeedPostsInsightsFeedResponseUser {
    id: string;
    business_manager: FeedPostsInsightsFeedResponseBusiness_manager;
}
export interface FeedPostsInsightsFeedResponseBusiness_manager {
    top_posts_unit: FeedPostsInsightsFeedResponseTop_posts_unit;
}
export interface FeedPostsInsightsFeedResponseTop_posts_unit {
    top_posts: FeedPostsInsightsFeedResponseTop_posts;
}
export interface FeedPostsInsightsFeedResponseTop_posts {
    edges: FeedPostsInsightsFeedResponseEdgesItem[];
    page_info: FeedPostsInsightsFeedResponsePage_info;
}
export interface FeedPostsInsightsFeedResponseEdgesItem {
    node: FeedPostsInsightsFeedResponseNode;
    cursor?: string;
}
export interface FeedPostsInsightsFeedResponseNode {
    instagram_media_id?: string;
    instagram_media_type?: string;
    image?: FeedPostsInsightsFeedResponseImage;
    creation_time?: number;
    comment_count?: number;
    engagement?: number;
    like_count?: number;
    save_count?: number;
    video_view_count?: null;
    shopping_product_click_count?: number;
    shopping_outbound_click_count?: number;
    inline_insights_node?: FeedPostsInsightsFeedResponseInline_insights_node;
    id?: string;
    __typename: string;
    name?: string;
    value?: number;
}
export interface FeedPostsInsightsFeedResponseImage {
    uri: string;
}
export interface FeedPostsInsightsFeedResponseInline_insights_node {
    metrics: FeedPostsInsightsFeedResponseMetrics;
    state: string;
}
export interface FeedPostsInsightsFeedResponseMetrics {
    impression_count: number;
    owner_account_follows_count: number;
    owner_profile_views_count: number;
    reach_count: number;
    profile_actions: FeedPostsInsightsFeedResponseProfile_actions;
    share_count: FeedPostsInsightsFeedResponseShare_count;
}
export interface FeedPostsInsightsFeedResponseProfile_actions {
    actions: FeedPostsInsightsFeedResponseActions;
}
export interface FeedPostsInsightsFeedResponseActions {
    edges: FeedPostsInsightsFeedResponseEdgesItem[];
}
export interface FeedPostsInsightsFeedResponseShare_count {
    tray: FeedPostsInsightsFeedResponseTray;
}
export interface FeedPostsInsightsFeedResponseTray {
    value: number;
}
export interface FeedPostsInsightsFeedResponsePage_info {
    end_cursor: string;
    has_next_page: boolean;
}
