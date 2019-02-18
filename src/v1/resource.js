const EventEmitter = require('events').EventEmitter;
const _ = require('lodash');
const { Request } = require('../core/request');

class InstagramResource extends EventEmitter {
  constructor (session, params) {
    super();
    const { Session } = require('../core/session');
    if (!(session instanceof Session)) throw new Error('Argument `session` is not instace of Session');
    this._session = session;
    this._params = {};
    this.setParams(_.isObject(params) ? params : {});
  }

  get params () {
    return this.getParams();
  }

  get session () {
    return this._session;
  }

  parseParams (params) {
    // Override this to parse instagram shit
    return params;
  }

  setParams (params) {
    if (!_.isObject(params)) throw new Error('Method `setParams` must have valid argument');
    params = this.parseParams(params);
    if (!_.isObject(params)) throw new Error('Method `parseParams` must return object');
    this._params = params;
    if (params.id) this.id = params.id;
    return this;
  }

  getParams () {
    return this._params;
  }

  request () {
    return new Request(this._session);
  }
}

module.exports = InstagramResource;
