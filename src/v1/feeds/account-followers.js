const _ = require('lodash');
const FeedBase = require('./feed-base');
const Request = require('../../request');
const Account = require('../account');

class AccountFollowersFeed extends FeedBase {
  constructor(session, accountId, limit) {
    super(...arguments);
    this.accountId = accountId;
    this.limit = limit || Infinity;
    this.timeout = 10 * 60 * 1000;
  }

  get() {
    const that = this;
    return new Request(that.session)
      .setMethod('GET')
      .setResource('followersFeed', {
        id: that.accountId,
        maxId: that.cursor,
      })
      .send()
      .then(data => {
        that.moreAvailable = !!data.next_max_id;
        if (that.moreAvailable) {
          that.setCursor(data.next_max_id);
        }
        return _.map(data.users, user => new Account(that.session, user));
      });
  }
}

module.exports = AccountFollowersFeed;
