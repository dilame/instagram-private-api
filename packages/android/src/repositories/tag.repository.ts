import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { TagRepositorySearchResponseRootObject } from '../responses';

@injectable()
export class TagRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async search(q: string) {
    const { body } = await this.http.send<TagRepositorySearchResponseRootObject>({
      url: '/api/v1/tags/search/',
      qs: {
        timezone_offset: this.state.timezoneOffset,
        q,
        count: 30,
      },
    });
    return body;
  }

  public async section(q: string, tab: string) {
    const { body } = await this.http.send<TagRepositorySearchResponseRootObject>({
      url: `/api/v1/tags/${encodeURI(q)}/sections/`,
      qs: {
        timezone_offset: this.state.timezoneOffset,
        tab: tab,
        count: 30,
      },
    });
    return body;
  }
}
