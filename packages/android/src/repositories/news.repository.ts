import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { NewsRepositoryInboxResponseRootObject } from '../responses';

@injectable()
export class NewsRepository {
  constructor(private http: AndroidHttp) {}
  public async inbox(): Promise<NewsRepositoryInboxResponseRootObject> {
    const { body } = await this.http.send<NewsRepositoryInboxResponseRootObject>({
      url: '/api/v1/news/inbox',
      method: 'GET',
    });
    return body;
  }
}
