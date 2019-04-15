import { flatten } from 'lodash';
import { Feed } from '../core/feed';
import { LocationFeedResponseMedia, LocationFeedResponseRootObject } from '../responses';

export class LocationFeed extends Feed<LocationFeedResponseMedia> {
  id: string | number;
  tab: 'recent' | 'ranked';
  next_page: number;
  next_media_ids: Array<string> = [];
  async request() {
    const { body: json } = await this.client.request.send<LocationFeedResponseRootObject>({
      url: `/api/v1/locations/${this.id}/sections/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.CSRFToken,
        tab: this.tab,
        _uuid: this.client.state.uuid,
        session_id: this.client.state.sessionId,
        page: this.next_page,
        next_media_ids: this.next_page ? JSON.stringify(this.next_media_ids) : void 0,
      },
    });
    this.moreAvailable = json.more_available && !!json.next_max_id;
    this.next_page = json.next_page;
    this.next_media_ids = json.next_media_ids;
    if (this.moreAvailable) this.setCursor(json.next_max_id);
    return json;
  }
  async items() {
    const response = await this.request();
    return flatten(response.sections.map(section => section.layout_content.medias.map(medias => medias.media)));
  }
}
