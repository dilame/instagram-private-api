const _ = require('lodash');
import { InstagramResource as Resource } from './resource';
import { Request } from '../core/request';

export class Megaphone extends Resource {
  static log(session, data) {
    return new Request(session)
      .setMethod('POST')
      .setResource('megaphoneLog')
      .generateUUID()
      .setData(
        _.extend(data, {
          uuid: session.device.md5,
        }),
      );
  }

  static logSeenMainFeed(session) {
    return Megaphone.log(session, {
      action: 'seen',
      display_medium: 'main_feed',
      type: 'feed_aysf',
    });
  }
}
