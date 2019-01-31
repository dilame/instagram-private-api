const _ = require('lodash');
const Request = require('../../request');
const Media = require('../media');

class UserStory {
  constructor(session, userIds) {
    this.session = session;
    this.userIds = userIds.map(id => String(id));
  }

  get() {
    const that = this;
    return new Request(that.session)
      .setMethod('POST')
      .setResource('userStory')
      .generateUUID()
      .setData({
        user_ids: this.userIds,
      })
      .signPayload()
      .send()
      .then(data =>
        _.map(
          data.reels[that.userIds].items,
          medium => new Media(that.session, medium),
        ),
      );
  }
}

module.exports = UserStory;
