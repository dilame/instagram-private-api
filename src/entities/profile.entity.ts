import { Entity } from '../core/entity';

export class ProfileEntity extends Entity {
  pk: string | number;
  public async checkFollow() {
    const friendshipStatus = await this.client.friendship.show(this.pk);
    if (friendshipStatus.following === true) return friendshipStatus;
    return await this.client.friendship.create(this.pk);
  }
  public async checkUnfollow() {
    const friendshipStatus = await this.client.friendship.show(this.pk);
    if (friendshipStatus.following === false) return friendshipStatus;
    return await this.client.friendship.destroy(this.pk);
  }
}
