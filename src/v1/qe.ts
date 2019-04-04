const _ = require('lodash');
import { InstagramResource as Resource } from './resource';
import * as CONSTANTS from '../constants/constants';
import { Request } from '../core/request';

export class QE extends Resource {
  // Lets fake this experiment bullshit
  static sync(session) {
    const random = parseInt(`${Math.random() * 100}`) + 1;
    const experiments = _.sampleSize(CONSTANTS.EXPERIMENTS, random);
    return session.getAccountId().then(id =>
      new Request(session)
        .setMethod('POST')
        .setResource('qeSync')
        .generateUUID()
        .setData({
          id,
          _uid: id,
          experiments: experiments.join(','),
        })
        .signPayload()
        .send(),
    );
  }
}
