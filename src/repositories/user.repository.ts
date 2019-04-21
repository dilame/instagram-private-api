import { Repository } from '../core/repository';
import {
  UserRepositoryInfoResponseRootObject,
  UserRepositoryInfoResponseUser,
  UserRepositorySearchResponseRootObject,
  UserRepositorySearchResponseUsersItem,
} from '../responses';

export class UserRepository extends Repository {
  async info(id: string | number): Promise<UserRepositoryInfoResponseUser> {
    const { body } = await this.client.request.send<UserRepositoryInfoResponseRootObject>({
      url: `/api/v1/users/${id}/info/`,
    });
    return body.user;
  }
  async search(username: string): Promise<UserRepositorySearchResponseUsersItem[]> {
    const { body } = await this.client.request.send<UserRepositorySearchResponseRootObject>({
      url: `/api/v1/users/search/`,
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        q: username,
        count: 30,
      },
    });
    return body.users;
  }
}
