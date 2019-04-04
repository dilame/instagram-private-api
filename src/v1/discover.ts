import { plainToClass } from 'class-transformer';
import { UserResponse } from '../responses/user.response';
import { Request } from '../core/request';
import { Helpers } from '../helpers';

const _ = require('lodash');

export const discover = (session, inSingup) =>
  new Request(session)
    .setMethod('POST')
    .setResource('discoverAyml')
    .generateUUID()
    .setData({
      phone_id: Helpers.generateUUID(),
      in_signup: inSingup ? 'true' : 'false',
      module: 'discover_people',
    })
    .send()
    .then(json => {
      const items = _.property('suggested_users.suggestions')(json) || [];
      return _.map(items, item => ({
        account: plainToClass(UserResponse, item.user),
        mediaIds: item.media_ids,
      }));
    });
