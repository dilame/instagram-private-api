import { Repository } from '../core/repository';
import {
  UserRepositoryInfoResponseRootObject,
  UserRepositoryInfoResponseUser,
  UserRepositorySearchResponseRootObject,
  UserRepositorySearchResponseUsersItem,
} from '../responses';
import { IgExactUserNotFoundError } from '../errors/ig-exact-user-not-found-error';

export class UserRepository extends Repository {
  async info(id: string | number): Promise<UserRepositoryInfoResponseUser> {
    const { body } = await this.client.request.send<UserRepositoryInfoResponseRootObject>({
      url: `/api/v1/users/${id}/info/`,
    });
    return body.user;
  }
  async arlinkDownloadInfo() {
    const { body } = await this.client.request.send({
      url: `/api/v1/users/arlink_download_info/`,
      qs: {
        version_override: '2.0.2',
      },
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
  async searchExact(username: string): Promise<UserRepositorySearchResponseUsersItem> {
    username = username.toLowerCase();
    const users = await this.search(username);
    const account = users.find(account => account.username === username);
    if (!account) throw new IgExactUserNotFoundError();
    return account;
  }
  async getIdByUsername(username: string): Promise<number> {
    const user = await this.searchExact(username);
    return user.pk;
  }
}
