import { Feed } from '../core/feed';
import { Expose } from 'class-transformer';
import { IgtvBrowseFeedResponseBrowseItemsItem, IgtvBrowseFeedResponseRootObject } from '../responses';

export class IgtvBrowseFeed extends Feed<IgtvBrowseFeedResponseRootObject, IgtvBrowseFeedResponseBrowseItemsItem> {
  isPrefetch: boolean = false;

  @Expose()
  private maxId: string;

  async items(): Promise<IgtvBrowseFeedResponseBrowseItemsItem[]> {
    const req = await this.request();
    return req.browse_items;
  }

  async request(): Promise<IgtvBrowseFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: `/api/v1/igtv/${this.isPrefetch ? 'browse_feed' : 'non_prefetch_browse_feed'}/`,
      qs: {
        ...(this.isPrefetch ? { prefetch: 1 } : { max_id: this.maxId }),
      },
    });
    this.state = body;
    return body;
  }

  protected set state(response: any) {
    this.maxId = response.max_id;
    this.moreAvailable = !!response.more_available;
  }
}
