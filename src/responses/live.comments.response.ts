export interface LiveCommentsResponseRootObject {
    comment_likes_enabled: boolean;
    comments: any[];
    comment_count: number;
    caption: null;
    caption_is_edited: boolean;
    has_more_comments: boolean;
    has_more_headload_comments: boolean;
    media_header_display: string;
    can_view_more_preview_comments: boolean;
    live_seconds_per_comment: number;
    is_first_fetch: string;
    system_comments: null;
    comment_muted: number;
    status: string;
}
