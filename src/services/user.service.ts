import { UserRepository } from '../repositories/user.repository';
import { UserRepositorySearchResponseUsersItem } from '../responses';
import { IgExactUserNotFoundError } from '../errors/ig-exact-user-not-found-error';

export class UserService extends UserRepository {
  async searchExact(username: string): Promise<UserRepositorySearchResponseUsersItem> {
    username = username.toLowerCase();
    const users = await this.search(username);
    const account = users.find(account => account.username === username);
    if (!account) throw new IgExactUserNotFoundError();
    return account;
  }
  async id(username: string): Promise<number> {
    const user = await this.searchExact(username);
    return user.pk;
  }
}
