import { plainToClass } from 'class-transformer';
import { UserResponse } from '../responses/user.response';
import { Request } from '../core/request';
import { Helpers } from '../helpers';

import { Hashtag } from './hashtag';
import { Location } from './location';

export const search = (session, query) =>
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
        user: plainToClass(UserResponse, user.user),
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
