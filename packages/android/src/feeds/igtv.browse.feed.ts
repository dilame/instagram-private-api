import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { Expose } from 'class-transformer';
import { IgtvBrowseFeedResponseBrowseItemsItem, IgtvBrowseFeedResponseRootObject } from '../responses';

@injectable()
export class IgtvBrowseFeed extends Feed<IgtvBrowseFeedResponseRootObject, IgtvBrowseFeedResponseBrowseItemsItem> {
  isPrefetch: boolean = false;

  @Expose()
  private maxId: string;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(response: any) {
    this.maxId = response.max_id;
    this.hasMore = !!response.more_available;
  }

  items({ browse_items }: IgtvBrowseFeedResponseRootObject) {
    return browse_items;
  }

  async request(): Promise<IgtvBrowseFeedResponseRootObject> {
    const { body } = await this.http.send({
      url: `/api/v1/igtv/${this.isPrefetch ? 'browse_feed' : 'non_prefetch_browse_feed'}/`,
      qs: {
        ...(this.isPrefetch ? { prefetch: 1 } : { max_id: this.maxId }),
      },
    });

    return body;
  }
}
