const _ = require('lodash');
import { BaseFeed } from './_base.feed';

const Media = require('../media').Media;
const { Request } = require('../../request');

class SavedFeed extends BaseFeed {
  constructor (session, limit) {
    super(...arguments);
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
  }

  get () {
    const that = this;
    return new Request(that.session)
      .setMethod('POST')
      .setResource('savedFeed', {
        maxId: that.cursor,
      })
      .generateUUID()
      .setData({})
      .signPayload()
      .send()
      .then(data => {
        that.moreAvailable = data.more_available;
        if (that.moreAvailable && data.next_max_id) {
          that.setCursor(data.next_max_id);
        }
        return _.map(data.items, medium => new Media(that.session, medium.media));
      });
  }
}

module.exports = SavedFeed;
