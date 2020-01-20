export interface TagRepositorySectionResponseRootObject {
  sections: TagRepositorySectionResponsesectionsItem[];
  more_available: boolean;
  next_max_id: string;
  next_page: number;
  next_media_ids: string[];
  auto_load_more_enabled: boolean;
  status: string;
}
export interface TagRepositorySectionResponsesectionsItem {
  layout_type: string;
  layout_content: string[];
  feed_type: string;
  explore_item_info: string[];
}
