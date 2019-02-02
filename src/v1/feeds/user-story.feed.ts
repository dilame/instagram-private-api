import { Session } from '../../session';
import { Request } from '../../request';
import { Media } from '../../models/media';
import { plainToClass } from 'class-transformer';

export class UserStoryFeed {
  constructor(public session: Session, public userIds: string[]) {
  }

  async get(): Promise<Media[]> {
    const data = await new Request(this.session)
      .setMethod('POST')
      .setResource('userStory')
      .generateUUID()
      .setData({
        user_ids: this.userIds.map(id => String(id)),
      })
      .signPayload()
      .send();
    return plainToClass(Media, data.reels[this.userIds].items);
  }
}
