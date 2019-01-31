const Resource = require('./resource');
const Request = require('../request');

class Save extends Resource {
  parseParams(json) {
    return json || {};
  }

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
}

module.exports = Save;
