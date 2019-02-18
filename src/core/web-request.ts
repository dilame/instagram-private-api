import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import { Request } from './request';
import * as CONSTANTS from '../constants/constants';
import * as routes from './routes';
import { NotFoundError } from './exceptions';
import { Device } from '..';
import { Session } from './session';

export class WebRequest extends Request {
  private _jsonEndpoint = false;

  constructor(session: Session) {
    super(session);
    this._request.headers = _.extend(_.clone(this._request.headers), {
      'Upgrade-Insecure-Requests': '1',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    });
    delete this._request.headers['X-IG-Connection-Type'];
    delete this._request.headers['X-IG-Capabilities'];
  }

  setResource(resource, data) {
    this._resource = resource;
    this.setUrl(routes.getWebUrl(resource, data));
    return this;
  }

  setDevice(device: Device) {
    this._device = device;
    this.setHeaders({
      'User-Agent': device.userAgentWeb(),
    });
    return this;
  }

  setJSONEndpoint() {
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
    return Bluebird.try(async () => {
      const response = await this.sendAndGetRaw(options);
      if (this._jsonEndpoint) {
        return this.parseMiddleware(response).body;
      }
      return response;
    }).catch(err => {
      if (!err || !err.response) throw err;
      const response = err.response;
      if (response.statusCode === 404) throw new NotFoundError(response);
      throw err;
    });
  }
}
