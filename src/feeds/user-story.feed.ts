import { Request, Session } from '../core';
import { MediaResponse } from '../responses/media.response';
import { plainToClass } from 'class-transformer';

export class UserStoryFeed {
  constructor(public session: Session, public userIds: (string | number)[]) {}

  async get(): Promise<MediaResponse[]> {
    const data = await new Request(this.session)
      .setMethod('POST')
      .setResource('userStory')
      .generateUUID()
      .setData({
        user_ids: this.userIds.map(id => String(id)),
      })
      .signPayload()
      .send();
    return plainToClass(MediaResponse, data.reels);
  }
}
