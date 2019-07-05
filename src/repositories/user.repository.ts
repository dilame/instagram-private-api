import { Repository } from '../core/repository';
import {
  UserRepositoryInfoResponseRootObject,
  UserRepositoryInfoResponseUser,
  UserRepositorySearchResponseRootObject,
  UserRepositorySearchResponseUsersItem,
} from '../responses';
import { IgExactUserNotFoundError } from '../errors';

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
  async search(username: string): Promise<UserRepositorySearchResponseRootObject> {
    const { body } = await this.client.request.send<UserRepositorySearchResponseRootObject>({
      url: `/api/v1/users/search/`,
      qs: {
        timezone_offset: this.client.state.timezoneOffset,
        q: username,
        count: 30,
      },
    });
    return body;
  }
  async searchExact(username: string): Promise<UserRepositorySearchResponseUsersItem> {
    username = username.toLowerCase();
    const result = await this.search(username);
    const users = result.users;
    const account = users.find(user => user.username === username);
    if (!account) {
      throw new IgExactUserNotFoundError();
    }
    return account;
  }
  async accountDetails(id?: string | number) {
    id = id || this.client.state.cookieUserId;
    const { body } = await this.client.request.send({
      url: `/api/v1/users/${id}/account_details/`,
    });
    return body;
  }
  async formerUsernames(id?: string | number) {
    id = id || this.client.state.cookieUserId;
    const { body } = await this.client.request.send({
      url: `/api/v1/users/${id}/former_usernames/`,
    });
    return body;
  }
  async sharedFollowerAccounts(id: string | number) {
    const { body } = await this.client.request.send({
      url: `/api/v1/users/${id}/shared_follower_accounts/`,
    });
    return body;
  }
  async flagUser(id: string | number) {
    const { body } = await this.client.request.send({
      url: `/api/v1/users/${id}/flag_user/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uid: this.client.state.cookieUserId,
        _uuid: this.client.state.uuid,
        reason_id: 1,
        user_id: id,
        source_name: 'profile',
        is_spam: true,
      },
    });
    return body;
  }
  async getIdByUsername(username: string): Promise<number> {
    const user = await this.searchExact(username);
    return user.pk;
  }
}
