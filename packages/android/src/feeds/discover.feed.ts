import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { Feed } from '@igpapi/core';
import { AndroidHttp } from '../core/android.http';
import { DiscoverFeedResponseRootObject, DiscoverFeedResponseSuggestionsItem } from '../responses';
import { AndroidState } from '../core/android.state';

@injectable()
export class DiscoverFeed extends Feed<DiscoverFeedResponseRootObject, DiscoverFeedResponseSuggestionsItem> {
  @Expose()
  private nextMaxId: string;

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(body: DiscoverFeedResponseRootObject) {
    this.done = body.more_available;
    this.nextMaxId = body.max_id;
  }

  async request() {
    const { body } = await this.http.send<DiscoverFeedResponseRootObject>({
      url: `/api/v1/discover/ayml/`,
      method: 'POST',
      form: {
        max_id: this.nextMaxId,
        phone_id: this.clientState.phoneId,
        module: 'discover_people',
        _uuid: this.clientState.uuid,
        _csrftoken: this.clientState.cookieCsrfToken,
        paginate: true,
      },
    });

    return body;
  }

  items({ suggested_users }: DiscoverFeedResponseRootObject) {
    return suggested_users.suggestions;
  }
}
