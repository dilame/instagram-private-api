const _ = require('lodash');
import { BaseFeed } from './_base.feed';

const Media = require('../media').Media;
const { Request } = require('../../request');
const Helpers = require('../../helpers');
const Exceptions = require('../../exceptions');

class LocationMediaFeed extends BaseFeed {
  constructor (session, locationId, limit) {
    super(...arguments);
    this.limit = parseInt(limit) || null;
    this.locationId = locationId;
  }

  get () {
    const that = this;
    return (
      new Request(that.session)
        .setMethod('GET')
        .setResource('locationFeed', {
          id: that.locationId,
          maxId: that.getCursor(),
          rankToken: Helpers.generateUUID(),
        })
        .send()
        .then(data => {
          that.moreAvailable = data.more_available && !!data.next_max_id;
          if (!that.moreAvailable && !_.isEmpty(data.ranked_items) && !that.getCursor())
            throw new Exceptions.OnlyRankedItemsError();
          if (that.moreAvailable) that.setCursor(data.next_max_id);
          return _.map(data.items, medium => new Media(that.session, medium));
        })
        // will throw an error with 500 which turn to parse error
        .catch(Exceptions.ParseError, () => {
          throw new Exceptions.PlaceNotFound();
        })
    );
  }
}

module.exports = LocationMediaFeed;
