import { Repository } from '../core/repository';
import { FriendshipRepositoryShowResponseRootObject } from '../responses/friendship.repository.show.response';

export class FriendshipRepository extends Repository {
  async show(id: string | number) {
    const { body } = await this.client.request.send<FriendshipRepositoryShowResponseRootObject>({
      url: `/api/v1/friendships/show/${id}/`,
    });
    return body;
  }
}
