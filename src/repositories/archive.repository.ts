import { Repository } from '../core/repository';
import {ArchiveRepositoryLivesResponseRootObject} from '../responses';

export class ArchiveRepository extends Repository {
  public async lives(): Promise<ArchiveRepositoryLivesResponseRootObject> {
    const { body } = await this.client.request.send<ArchiveRepositoryLivesResponseRootObject>({
      url: '/api/v1/archive/live/lives_archived/',
      method: 'GET',
    });

    return body;
  }
}
