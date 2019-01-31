const _ = require('lodash');
const FeedBase = require('./feed-base');
const Request = require('../../request');
const Account = require('../account');

// Only works with the stories of the logged user
class StoryViewers extends FeedBase {
  constructor(session, mediaId) {
    super(...arguments);
    this.session = session;
    this.mediaId = mediaId;
  }

  get() {
    const that = this;
    return new Request(that.session)
      .setMethod('GET')
      .setResource('storyViewers', {
        mediaId: that.mediaId,
        maxId: that.getCursor(),
      })
      .send()
      .then(data => {
        const nextMaxId = data.next_max_id
          ? data.next_max_id.toString()
          : data.next_max_id;
        that.moreAvailable = !!nextMaxId;
        if (that.moreAvailable) that.setCursor(nextMaxId);
        return _.map(data.users, user => new Account(that.session, user));
      });
  }
}

module.exports = StoryViewers;
