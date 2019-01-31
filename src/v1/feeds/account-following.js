const _ = require('lodash');
const FeedBase = require('./feed-base');
const Request = require('../../request');
const Helpers = require('../../helpers');
const Account = require('../account');

class AccountFollowingFeed extends FeedBase {
  constructor(session, accountId, limit) {
    super(...arguments);
    this.accountId = accountId;
    this.limit = limit || 7500;
    // Should be enought for 7500 records
    this.timeout = 10 * 60 * 1000;
  }

  get() {
    const that = this;
    return new Request(that.session)
      .setMethod('GET')
      .setResource('followingFeed', {
        id: that.accountId,
        maxId: that.getCursor(),
        rankToken: Helpers.generateUUID(),
      })
      .send()
      .then(data => {
        that.moreAvailable = !!data.next_max_id;
        if (that.moreAvailable) that.setCursor(data.next_max_id);
        return _.map(data.users, user => new Account(that.session, user));
      });
  }
}

module.exports = AccountFollowingFeed;
