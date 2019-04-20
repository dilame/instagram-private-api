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
        timezone_offset: 10800,
        q: username,
        count: 30,
      },
    });
    return body.users;
  }
  async searchExact(username: string): Promise<UserRepositorySearchResponseUsersItem> {
    username = username.toLowerCase();
    const users = await this.search(username);
    const account = users.find(account => account.username === username);
    if (!account) return null;
    return account;
  }
  async id(username: string): Promise<number> {
    const user = await this.searchExact(username);
    return user.pk;
  }
}
