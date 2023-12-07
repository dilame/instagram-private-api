import { TimelineFeedResponseMedia_or_ad } from './timeline.feed.response';

export interface ClipsFeedResponse {
  data: {
    xdt_api__v1__clips__home__connection_v2: {
      edges: ClipsFeedResponseFeedItemsItem[];
      page_info: {
        end_cursor: string;
        has_next_page: boolean;
        has_previous_page: boolean;
        start_cursor: string | null;
      };
    };
  };
  extensions: {
    is_final: boolean;
  };
}

export interface ClipsFeedResponseFeedItemsItem {
  node: {
    media: TimelineFeedResponseMedia_or_ad;
    __typename: string;
  };
  cursor: string;
}
