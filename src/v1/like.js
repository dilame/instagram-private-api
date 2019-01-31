const Resource = require('./resource');
const Request = require('../request');

class Like extends Resource {
  parseParams(json) {
    return json || {};
  }

  static create(session, mediaId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('like', { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        src: 'profile',
      })
      .signPayload()
      .send()
      .then(data => new Like(session, {}));
  }

  static destroy(session, mediaId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('unlike', { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        src: 'profile',
      })
      .signPayload()
      .send()
      .then(data => new Like(session, {}));
  }
}

module.exports = Like;
