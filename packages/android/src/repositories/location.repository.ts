import { Repository } from '../core/repository';
import { LocationRepositoryInfoResponseRootObject } from '../responses';
import { LocationRepositoryStoryResponseRootObject } from '../responses/location.repository.story.response';

export class LocationRepository extends Repository {
  public async info(id: number | string): Promise<LocationRepositoryInfoResponseRootObject> {
    const { body } = await this.client.request.send<LocationRepositoryInfoResponseRootObject>({
      url: `/api/v1/locations/${id}/info/`,
      method: 'GET',
    });
    return body;
  }

  public async story(id: number | string): Promise<LocationRepositoryStoryResponseRootObject> {
    const { body } = await this.client.request.send<LocationRepositoryStoryResponseRootObject>({
      url: `/api/v1/locations/${id}/story/`,
      method: 'GET',
    });
    return body;
  }
}
