import { Request } from '../core/request';
import { LikeModuleName } from '../interfaces/like.interface';

export class Like {
  static async post(
    action: 'like' | 'unlike' = 'like',
    session,
    mediaId: string | number,
    moduleInfo: LikeModuleName.Type = { moduleName: 'feed_timeline', d: false },
  ) {
    return new Request(session)
      .setMethod('POST')
      .setResource(action, { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        _uid: await session.getAccountId(),
        radio_type: 'wifi-none',
        ...moduleInfo,
      })
      .signPayload()
      .send();
  }

  static create(session, mediaId: string | number, moduleName: LikeModuleName.Type) {
    return this.post('like', session, mediaId, moduleName);
  }

  static destroy(session, mediaId: string | number, moduleName: LikeModuleName.Type) {
    return this.post('unlike', session, mediaId, moduleName);
  }
}
