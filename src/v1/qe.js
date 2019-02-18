const _ = require('lodash');
const Resource = require('./resource');
const CONSTANTS = require('../constants/constants');
const { Request } = require('../core/request');

class QE extends Resource {
  // Lets fake this experiment bullshit
  static sync (session) {
    const random = parseInt(Math.random() * 100) + 1;
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

module.exports = QE;
