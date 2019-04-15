import { Feed } from '../core/feed';
import { TagFeedResponseItemsItem, TagFeedResponseRootObject } from '../responses';

export class TagFeed extends Feed<TagFeedResponseItemsItem> {
  tag: string;
  async request() {
    const { body: json } = await this.client.request.send<TagFeedResponseRootObject>({
      url: `/api/v1/feed/tag/${encodeURI(this.tag)}/`,
      qs: {
        rank_token: this.rankToken,
        max_id: this.cursor,
      },
    });
    this.moreAvailable = json.more_available && !!json.next_max_id;
    if (this.moreAvailable) this.setCursor(json.next_max_id);
    return json;
  }
  async items() {
    const response = await this.request();
    return response.ranked_items;
  }
}
