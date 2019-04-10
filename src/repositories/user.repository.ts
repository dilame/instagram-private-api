import { InstagramRepository } from './repository';
import { UserRepositoryInfoResponseRootObject, UserRepositoryInfoResponseUser } from '../responses';

export class UserRepository extends InstagramRepository {
  async info(id: string | number): Promise<UserRepositoryInfoResponseUser> {
    const { body } = await this.client.request.send<UserRepositoryInfoResponseRootObject>({
      url: `/api/v1/users/${id}/info`,
    });
    return body.user;
  }
}
