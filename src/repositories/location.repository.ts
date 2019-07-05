import { Repository } from '../core/repository';
import { LocationRepositoryInfoResponseRootObject } from '../responses';

export class LocationRepository extends Repository {
  public async info(id: number | string): Promise<LocationRepositoryInfoResponseRootObject> {
    const { body } = await this.client.request.send<LocationRepositoryInfoResponseRootObject>({
      url: `/api/v1/locations/${id}/info/`,
      method: 'GET',
    });
    return body;
  }
}
