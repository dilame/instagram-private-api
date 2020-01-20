import { Repository } from '../core/repository';
import { NewsRepositoryInboxResponseRootObject } from '../responses';

export class NewsRepository extends Repository {
  public async inbox(): Promise<NewsRepositoryInboxResponseRootObject> {
    const { body } = await this.client.request.send<NewsRepositoryInboxResponseRootObject>({
      url: '/api/v1/news/inbox',
      method: 'GET',
    });
    return body;
  }
}
