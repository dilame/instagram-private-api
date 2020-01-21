import { FriendshipRepository } from '../repositories/friendship.repository';

export class ProfileEntity {
  constructor(private friendship: FriendshipRepository) {}
  pk: string | number;
  public async checkFollow() {
    const friendshipStatus = await this.friendship.show(this.pk);
    if (friendshipStatus.following === true) return friendshipStatus;
    return await this.friendship.create(this.pk);
  }
  public async checkUnfollow() {
    const friendshipStatus = await this.friendship.show(this.pk);
    if (friendshipStatus.following === false) return friendshipStatus;
    return await this.friendship.destroy(this.pk);
  }
}
