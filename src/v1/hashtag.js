import { Request } from '../core/request';
import { Helpers } from '../helpers';

const _ = require('lodash');
const Resource = require('./resource');
const camelKeys = require('camelcase-keys');

class Hashtag extends Resource {
  static search (session, query) {
    return session
      .getAccountId()
      .then(id => {
        const rankToken = Helpers.buildRankToken(id);
        return new Request(session)
          .setMethod('GET')
          .setResource('hashtagsSearch', {
            query,
            rankToken,
          })
          .send();
      })
      .then(data => _.map(data.results, hashtag => new Hashtag(session, hashtag)));
  }

  static related (session, tag) {
    return new Request(session)
      .setMethod('GET')
      .setResource('hashtagsRelated', {
        tag,
        visited: `[{"id":"${tag}","type":"hashtag"}]`,
        related_types: '["hashtag"]',
      })
      .send()
      .then(data => _.map(data.related, hashtag => new Hashtag(session, hashtag)));
  }

  static info (session, tag) {
    return new Request(session)
      .setMethod('GET')
      .setResource('hashtagsInfo', {
        tag,
      })
      .send()
      .then(hashtag => new Hashtag(session, hashtag));
  }

  parseParams (json) {
    const hash = camelKeys(json);
    hash.mediaCount = parseInt(json.media_count);
    if (_.isObject(hash.id)) hash.id = hash.id.toString();
    return hash;
  }
}

module.exports = Hashtag;
