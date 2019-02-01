const _ = require('lodash');
const FeedBase = require('./feed-base');
const Media = require('../media').Media;
const Request = require('../../request');
const Helpers = require('../../helpers');

class UserMediaFeed extends FeedBase {
  constructor(session, accountId, limit) {
    super(...arguments);
    this.accountId = accountId;
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
  }

  get() {
    const that = this;
    return this.session.getAccountId().then(id => {
      const rankToken = Helpers.buildRankToken(id);
      return new Request(that.session)
        .setMethod('GET')
        .setResource('userFeed', {
          id: that.accountId,
          maxId: that.getCursor(),
          rankToken,
        })
        .send()
        .then(data => {
          that.moreAvailable = data.more_available && !!data.next_max_id;
          if (that.moreAvailable) {
            that.setCursor(data.next_max_id);
          }
          return _.map(data.items, medium => new Media(that.session, medium));
        });
    });
  }
}

module.exports = UserMediaFeed;
