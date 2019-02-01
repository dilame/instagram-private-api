const _ = require('lodash');
const Request = require('../../request');
const routes = require('../routes');
const CONSTANTS = require('../../constants/constants');
const Exceptions = require('../exceptions');

class WebRequest extends Request {
  constructor(...args) {
    super(...args);
    this._request.headers = _.extend(_.clone(this._request.headers), {
      'Upgrade-Insecure-Requests': '1',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    });
    this._jsonEndpoint = false;
    delete this._request.headers['X-IG-Connection-Type'];
    delete this._request.headers['X-IG-Capabilities'];
  }

  setResource(resource, data) {
    this._resource = resource;
    this.setUrl(routes.getWebUrl(resource, data));
    return this;
  }

  setDevice(device) {
    this._device = device;
    this.setHeaders({
      'User-Agent': device.userAgent(),
    });
    return this;
  }

  setJSONEndpoint(json) {
    this.setOptions({
      qs: { __a: '1' },
    });
    this._jsonEndpoint = true;
    return this;
  }

  setCSRFToken(token) {
    this.setHeaders({
      'x-csrftoken': token,
    });
    return this;
  }

  setHost(host) {
    if (!host) host = CONSTANTS.WEB_HOSTNAME;
    this.setHeaders({
      Host: host,
    });
    return this;
  }

  send(options) {
    const that = this;
    return this._mergeOptions(options)
      .then(opts => [opts, that._prepareData()])
      .spread((opts, data) => {
        opts = _.defaults(opts, data);
        return that._transform(opts);
      })
      .then(opts => {
        options = opts;
        return [Request.requestClient(options), options];
      })
      .spread((response, options) => {
        if (that._jsonEndpoint) {
          const beforeParse = _.bind(that.beforeParse, that);
          const parseMiddleware = _.bind(that.parseMiddleware, that);
          return new Promise((resolve, reject) =>
            resolve(beforeParse(response)),
          ).then(parseMiddleware);
        }
        return response;
      })
      .then(response => {
        if (that._jsonEndpoint) return response.body;
        return response;
      })
      .catch(error => that.beforeError(error, options, 0))
      .catch(err => {
        if (!err || !err.response) throw err;
        const response = err.response;
        if (response.statusCode == 404)
          throw new Exceptions.NotFoundError(response);
        throw err;
      })
      .catch(error => that.afterError(error, options, 0));
  }
}

module.exports = WebRequest;
