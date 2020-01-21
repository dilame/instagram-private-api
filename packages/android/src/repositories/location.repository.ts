import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { LocationRepositoryInfoResponseRootObject } from '../responses';
import { LocationRepositoryStoryResponseRootObject } from '../responses/location.repository.story.response';

@injectable()
export class LocationRepository {
  constructor(private http: AndroidHttp) {}
  public async info(id: number | string): Promise<LocationRepositoryInfoResponseRootObject> {
    const { body } = await this.http.send<LocationRepositoryInfoResponseRootObject>({
      url: `/api/v1/locations/${id}/info/`,
      method: 'GET',
    });
    return body;
  }

  public async story(id: number | string): Promise<LocationRepositoryStoryResponseRootObject> {
    const { body } = await this.http.send<LocationRepositoryStoryResponseRootObject>({
      url: `/api/v1/locations/${id}/story/`,
      method: 'GET',
    });
    return body;
  }
}
