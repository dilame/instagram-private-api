import { Feed } from '../core/feed';
import { ReelsTrayFeedResponseRootObject, ReelsTrayFeedResponseTrayItem } from '../responses';

export class ReelsTrayFeed extends Feed<ReelsTrayFeedResponseRootObject, ReelsTrayFeedResponseTrayItem> {
  reason: 'cold_start' | 'pull_to_refresh';

  protected set state(response: ReelsTrayFeedResponseRootObject) {}

  /**
   * Returns only the stories (without the broadcasts)
   */
  async items(): Promise<ReelsTrayFeedResponseTrayItem[]> {
    const response = await this.request();
    return response.tray;
  }

  async request(): Promise<ReelsTrayFeedResponseRootObject> {
    const { body } = await this.client.request.send<ReelsTrayFeedResponseRootObject>({
      url: '/api/v1/feed/reels_tray/',
      method: 'POST',
      form: {
        supported_capabilities_new: this.client.state.supportedCapabilities,
        reason: this.reason,
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
      },
    });
    this.state = body;
    return body;
  }
}
