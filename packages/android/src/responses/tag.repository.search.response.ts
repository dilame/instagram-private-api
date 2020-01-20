export interface TagRepositorySearchResponseRootObject {
  results: TagRepositorySearchResponseResultsItem[];
  has_more: boolean;
  rank_token: string;
  status: string;
}
export interface TagRepositorySearchResponseResultsItem {
  id: string;
  name: string;
  media_count: number;
  follow_status: null;
  following: null;
  allow_following: null;
  allow_muting_story: null;
  profile_pic_url: string;
  non_violating: null;
  related_tags: null;
  subtitle: null;
  social_context: null;
  social_context_profile_links: null;
  follow_button_text: null;
  show_follow_drop_down: null;
  debug_info: null;
  search_result_subtitle: string;
}
