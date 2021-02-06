import { Repository } from '../core/repository';
import {ArchiveRepositoryLivesResponseRootObject} from '../responses';

export class ArchiveRepository extends Repository {
  public async lives(): Promise<ArchiveRepositoryLivesResponseRootObject> {
    const { body } = await this.client.request.send<ArchiveRepositoryLivesResponseRootObject>({
      url: '/api/v1/archive/live/lives_archived/',
      method: 'GET',
      headers: {
        'User-Agent': `Instagram 172.0.0.21.123 Android (${this.client.state.deviceString}; ${this.client.state.language}; 269790810)`
      }
    });

    return body;
  }
}
