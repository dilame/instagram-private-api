import { Entity } from '../core/entity';

export interface NewsFeedResponseRootObject {
  auto_load_more_enabled: boolean;
  next_max_id: number;
  stories: NewsFeedResponseStoriesItem[];
  status: string;
}
export class NewsFeedResponseStoriesItem extends Entity {
  type: number;
  story_type: number;
  args: NewsFeedResponseArgs;
  counts: NewsFeedResponseCounts;
  pk: string;
}
export interface NewsFeedResponseArgs {
  text: string;
  links: NewsFeedResponseLinksItem[];
  profile_id: number;
  profile_image: string;
  media?: NewsFeedResponseMediaItem[];
  timestamp: number;
  tuuid: string;
  second_profile_id?: number;
  second_profile_image?: string;
  profile_image_destination?: string;
  comment_id?: string;
  comment_ids?: string[];
}
export interface NewsFeedResponseLinksItem {
  start: number;
  end: number;
  type: string;
  id: string;
}
export interface NewsFeedResponseMediaItem {
  id: string;
  image: string;
  comment_threading_enabled?: boolean;
}
export interface NewsFeedResponseCounts {}
