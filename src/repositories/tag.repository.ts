import { Repository } from '../core/repository';
import { TagRepositorySearchResponseRootObject } from '../responses';

export class TagRepository extends Repository {
  public async search(q: string) {
    const { body } = await this.client.request.send<TagRepositorySearchResponseRootObject>({
      url: '/api/v1/tags/search/',
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        q,
        count: 30,
      },
    });
    return body;
  }

  public async section(q: string, tab: string) {
    const { body } = await this.client.request.send<TagRepositorySearchResponseRootObject>({
      url: `/api/v1/tags/${encodeURI(q)}/sections/`,
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        tab: tab,
        count: 30,
      },
    });
    return body;
  }
}
