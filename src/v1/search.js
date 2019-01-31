const _ = require('lodash');
const Request = require('../request');
const Helpers = require('../helpers');
const Account = require('./account');
const Hashtag = require('./hashtag');
const Location = require('./location');

module.exports = (session, query) =>
  session
    .getAccountId()
    .then(id =>
      new Request(session)
        .setMethod('GET')
        .setResource('topSearch', {
          rankToken: Helpers.buildRankToken(id).toUpperCase(),
          query,
        })
        .send(),
    )
    .then(json => {
      const users = json.users.map(user => ({
        user: new Account(session, user.user),
        position: user.position,
      }));
      const places = json.places.map(place => ({
        place: new Location(session, place.place),
        position: place.position,
      }));
      const hashtags = json.hashtags.map(hashtag => ({
        hashtag: new Hashtag(session, hashtag.hashtag),
        position: hashtag.position,
      }));

      return {
        users,
        places,
        hashtags,
      };
    });
