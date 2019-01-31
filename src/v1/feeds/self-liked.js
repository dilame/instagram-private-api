const _ = require('lodash');
const FeedBase = require('./feed-base');
const Media = require('../media');
const Request = require('../../request');

class SelfLikedFeed extends FeedBase {
  constructor(session, limit) {
    super(...arguments);
    this.session = session;
    this.limit = parseInt(limit) || null;
  }

  get() {
    const that = this;
    return new Request(that.session)
      .setMethod('GET')
      .setResource('selfLikedFeed', {
        maxId: that.getCursor(),
      })
      .send()
      .then(data => {
        const nextMaxId = data.next_max_id
          ? data.next_max_id.toString()
          : data.next_max_id;
        that.moreAvailable = data.more_available && !!nextMaxId;
        if (that.moreAvailable) that.setCursor(nextMaxId);
        return _.map(data.items, medium => new Media(that.session, medium));
      });
  }
}

module.exports = SelfLikedFeed;
