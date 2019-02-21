import { Helpers } from '../helpers';

const _ = require('lodash');
const Resource = require('./resource');
const camelKeys = require('camelcase-keys');
const { Request } = require('../core/request');
const Media = require('./media').Media;
const Exceptions = require('../core/exceptions');

class Location extends Resource {
  static getRankedMedia (session, locationId) {
    return (
      new Request(session)
        .setMethod('GET')
        .setResource('locationFeed', {
          id: locationId,
          maxId: null,
          rankToken: Helpers.generateUUID(),
        })
        .send()
        .then(data => _.map(data.ranked_items, medium => new Media(session, medium)))
        // will throw an error with 500 which turn to parse error
        .catch(Exceptions.ParseError, () => {
          throw new Exceptions.PlaceNotFound();
        })
    );
  }

  static search (session, query) {
    const that = this;
    return session
      .getAccountId()
      .then(id => {
        const rankToken = Helpers.buildRankToken(id);
        return new Request(session)
          .setMethod('GET')
          .setResource('locationsSearch', {
            query,
            rankToken,
          })
          .send();
      })
      .then(data => _.map(data.items, location => new Location(session, location)));
  }

  parseParams (json) {
    const hash = camelKeys(json);
    hash.address = json.location.address;
    hash.city = json.location.city;
    hash.state = json.location.state;
    hash.id = json.location.id || json.location.pk;
    hash.lat = parseFloat(json.location.lat) || 0;
    hash.lng = parseFloat(json.location.lng) || 0;
    return hash;
  }
}

module.exports = Location;
