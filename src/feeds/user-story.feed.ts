import { Feed } from '../core/feed';
import { UserStoryFeedResponseItemsItem, UserStoryFeedResponseRootObject } from '../responses/user-story.feed.response';

export class UserStoryFeed extends Feed<UserStoryFeedResponseRootObject, UserStoryFeedResponseItemsItem> {
  userId: string | number;

  async items(): Promise<UserStoryFeedResponseItemsItem[]> {
    const response = await this.request();
    if (!response.reel) {
      return [];
    }
    return response.reel.items;
  }

  async request(): Promise<UserStoryFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/feed/user/${this.userId}/story/`,
      method: 'GET',
      qs: {
        supported_capabilities_new: JSON.stringify(this.client.state.supportedCapabilities),
      },
    });
    return body;
  }

  protected set state(response: any) {}
}
