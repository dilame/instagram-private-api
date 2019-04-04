import { InstagramResource as Resource } from './resource';
import { Request } from '../core/request';

export class Save extends Resource {
  static create(session, mediaId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('save', { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        src: 'profile',
      })
      .signPayload()
      .send()
      .then(data => new Save(session, {}));
  }

  static destroy(session, mediaId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('unsave', { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        src: 'profile',
      })
      .signPayload()
      .send()
      .then(data => new Save(session, {}));
  }

  parseParams(json) {
    return json || {};
  }
}
