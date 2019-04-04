const _ = require('lodash');
const camelKeys = require('camelcase-keys');

import { Helpers } from '../helpers';
import { InstagramResource as Resource } from './resource';
import { Request } from '../core/request';
import { Media } from './media';
import * as Exceptions from '../core/exceptions';

export class Location extends Resource {
  static getRankedMedia(session, locationId) {
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

  static search(session, query) {
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

  parseParams(json) {
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
