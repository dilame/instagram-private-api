const _ = require('lodash');
const FeedBase = require('./feed-base');
const Media = require('../media');
const Request = require('../../request');
const Helpers = require('../../helpers');
const Exceptions = require('../exceptions');

class TaggedMediaFeed extends FeedBase {
  constructor(session, tag, limit) {
    super(...arguments);
    this.tag = tag;
    this.limit = parseInt(limit) || null;
  }

  get() {
    const that = this;
    return this.session.getAccountId().then(id => {
      const rankToken = Helpers.buildRankToken(id);
      return new Request(that.session)
        .setMethod('GET')
        .setResource('tagFeed', {
          tag: that.tag,
          maxId: that.getCursor(),
          rankToken,
        })
        .send()
        .then(data => {
          that.moreAvailable = data.more_available && !!data.next_max_id;
          if (
            !that.moreAvailable &&
            !_.isEmpty(data.ranked_items) &&
            !that.getCursor()
          )
            throw new Exceptions.OnlyRankedItemsError();
          if (that.moreAvailable) that.setCursor(data.next_max_id);
          return _.map(data.items, medium => new Media(that.session, medium));
        });
    });
  }

  getRankedItems() {
    const that = this;
    return this.session.getAccountId().then(id => {
      const rankToken = Helpers.buildRankToken(id);
      return new Request(that.session)
        .setMethod('GET')
        .setResource('tagFeed', {
          tag: that.tag,
          maxId: that.getCursor(),
          rankToken,
        })
        .send()
        .then(data => {
          let { ranked_items } = data;
          let { next_max_id } = ranked_items[ranked_items.length - 1];
          that.moreAvailable = !!next_max_id;
          if (that.moreAvailable) that.setCursor(ranked_items.next_max_id);
          return _.map(ranked_items, medium => new Media(that.session, medium));
        });
    });
  }
}

module.exports = TaggedMediaFeed;
