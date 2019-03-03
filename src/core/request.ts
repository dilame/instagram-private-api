import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import * as request from 'request-promise';
import * as JSONbig from 'json-bigint';
import * as ProxyAgent from 'proxy-agent';
import * as Exceptions from './exceptions';
import * as routes from './routes';
import * as CONSTANTS from '../constants/constants';
import { Session } from './session';
import { Device } from './devices/device';
import { Helpers } from '../helpers';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export class Request {
  static requestClient: any = request.defaults({});
  _request: any;
  protected _resource: any;
  private _signData: boolean;
  private attempts = 2;

  constructor(session: Session) {
    this._url = null;
    this._signData = false;
    this._request = {};
    this._request.method = 'GET';
    this._request.data = {};
    this._request.bodyType = 'formData';
    this._request.options = {
      gzip: true,
    };
    this._request.headers = Request.defaultHeaders;
    this.session = session;
  }

  static get defaultHeaders() {
    return {
      'X-FB-HTTP-Engine': 'Liger',
      'X-IG-Connection-Type': CONSTANTS.HEADERS.X_IG_Connection_Type,
      'X-IG-Capabilities': CONSTANTS.HEADERS.X_IG_Capabilities,
      'X-IG-Connection-Speed': `${_.random(1000, 3700)}kbps`,
      'X-IG-Bandwidth-Speed-KBPS': '-1.000',
      'X-IG-Bandwidth-TotalBytes-B': '0',
      'X-IG-Bandwidth-TotalTime-MS': '0',
      Host: CONSTANTS.HOSTNAME,
      Accept: '*/*',
      'Accept-Encoding': 'gzip,deflate',
      Connection: 'Keep-Alive',
    };
  }

  protected _device: Device;

  get device() {
    return this._device;
  }

  set device(device) {
    this.setDevice(device);
  }

  _url: any;

  get url() {
    return this._url;
  }

  set url(url) {
    this.setUrl(url);
  }

  private _session: Session;

  get session() {
    return this._session;
  }

  set session(session) {
    this.setSession(session);
  }

  static jar(store) {
    return request.jar(store);
  }

  static setTimeout(ms) {
    const object = { timeout: parseInt(ms) };
    Request.requestClient = request.defaults(object);
  }

  static setProxy(proxyUrl) {
    if (!Helpers.isValidUrl(proxyUrl)) throw new Error('`proxyUrl` argument is not an valid url');
    const object = { agent: new ProxyAgent(proxyUrl) };
    Request.requestClient = request.defaults(object);
  }

  _transform = t => t;

  setOptions(options = {}, override?) {
    this._request.options = override
      ? _.extend(this._request.options, options)
      : _.defaults(this._request.options, options);
    return this;
  }

  setMethod(method) {
    method = method.toUpperCase();
    if (!_.includes(['POST', 'GET', 'PATCH', 'PUT', 'DELETE'], method))
      throw new Error(`Method \`${method}\` is not valid method`);
    this._request.method = method;
    return this;
  }

  setData(data, override?) {
    if (_.isEmpty(data)) {
      this._request.data = {};
      return this;
    }
    if (_.isString(data)) {
      this._request.data = data;
      return this;
    }
    _.each(data, (val, key) => {
      data[key] = val && val.toString && !_.isObject(val) ? val.toString() : val;
    });
    this._request.data = override ? data : _.extend(this._request.data, data || {});
    return this;
  }

  setBodyType(type) {
    if (!_.includes(['form', 'formData', 'json', 'body'], type))
      throw new Error('`bodyType` param must be and form, formData, json or body');
    this._request.bodyType = type;
    return this;
  }

  signPayload() {
    this._signData = true;
    return this;
  }

  transform(callback) {
    if (!_.isFunction(callback)) throw new Error('Transform must be an valid function');
    this._transform = callback;
    return this;
  }

  generateUUID() {
    this.setData({
      _uuid: this.session.uuid,
    });
    return this;
  }

  setHeaders(headers) {
    this._request.headers = _.extend(this._request.headers, headers || {});
    return this;
  }

  removeHeader(name) {
    delete this._request.headers[name];
    return this;
  }

  setUrl(url) {
    if (!_.isString(url) || !Helpers.isValidUrl(url)) throw new Error('The `url` parameter must be valid url string');
    this._url = url;
    return this;
  }

  setResource(resource, data?) {
    this._resource = resource;
    this.setUrl(routes.getUrl(resource, data));
    return this;
  }

  setLocalAddress(ipAddress) {
    this.setOptions({ localAddress: ipAddress }, true);
    return this;
  }

  setCSRFToken(token) {
    this.setData({
      _csrftoken: token,
    });
    return this;
  }

  setSession(session) {
    this._session = session;
    this.setCSRFToken(session.CSRFToken);
    this.setOptions({
      jar: session.jar,
    });
    if (session.device) this.setDevice(session.device);
    if (session.proxyUrl) this.setOptions({ agent: new ProxyAgent(session.proxyUrl) });
    return this;
  }

  setDevice(device) {
    this._device = device;
    this.setHeaders({
      'User-Agent': device.userAgent(),
      'X-IG-App-ID': device.credentials.FB_ANALYTICS_APPLICATION_ID,
      'Accept-Language': device.credentials.LANGUAGE.replace('_', '-'),
    });
    this.setData({
      device_id: device.id,
    });
    return this;
  }

  signData() {
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(this._request.method) === false)
      throw new Error('Wrong request method for signing data!');
    return this.device.signRequestPayload(this._request.data);
  }

  _prepareData() {
    if (this._request.method === 'GET') return {};
    if (this._signData) {
      const data = this.signData();
      const obj = {};
      obj[this._request.bodyType] = data;
      return obj;
    } else {
      const obj = {};
      obj[this._request.bodyType] = this._request.data;
      return obj;
    }
  }

  _mergeOptions(options) {
    options = _.defaults(
      {
        method: this._request.method,
        url: this.url,
        resolveWithFullResponse: true,
        headers: this._request.headers,
      },
      options || {},
      this._request.options,
    );
    return options;
  }

  parseMiddleware(response) {
    if (response.req._headers.host === 'upload.instagram.com' && response.statusCode === 201) {
      const loaded = /(\d+)-(\d+)\/(\d+)/.exec(response.body);
      response.body = {
        status: 'ok',
        start: loaded[1],
        end: loaded[2],
        total: loaded[3],
      };
      return response;
    }
    try {
      // JSONbig.parse stores big numbers with bignumber.js library
      // This is a non-standard way, so we need to perform such transformations to get large numbers as strings
      response.body = JSON.parse(JSON.stringify(JSONbig.parse(response.body)));
      return response;
    } catch (err) {
      throw new Exceptions.ParseError(response, this);
    }
  }

  errorMiddleware(response) {
    response = this.parseMiddleware(response);
    const json = response.body;
    if (json.spam) throw new Exceptions.ActionSpamError(json);
    if (json.message === 'challenge_required') throw new Exceptions.CheckpointError(json, this.session);
    if (json.message === 'login_required')
      throw new Exceptions.AuthenticationError('Login required to process this request');
    if (json.error_type === 'sentry_block') throw new Exceptions.SentryBlockError(json);

    if (response.statusCode === 429) throw new Exceptions.RequestsLimitError();
    if (_.isString(json.message) && json.message.toLowerCase().includes('too many requests'))
      throw new Exceptions.RequestsLimitError();
    if (json.message === 'Please wait a few minutes before you try again.') throw new Exceptions.RequestsLimitError();

    if (_.isString(json.message) && json.message.toLowerCase().includes('not authorized to view user'))
      throw new Exceptions.PrivateUserError();
    throw new Exceptions.RequestError(json);
  }

  send(options = {}, attemps = 0): Bluebird<any> {
    return Bluebird.try(async () => {
      const rawResponse = await this.sendAndGetRaw(options);
      const parsedResponse = this.parseMiddleware(rawResponse);
      const json = parsedResponse.body;
      if (_.isObject(json) && json.status === 'ok') return _.omit(parsedResponse.body, 'status');
      if (_.isString(json.message) && json.message.toLowerCase().includes('transcode timeout'))
        throw new Exceptions.TranscodeTimeoutError();
      throw new Exceptions.RequestError(json);
    })
      .catch(err => {
        if (err instanceof Exceptions.APIError) throw err;
        if (!err || !err.response) throw err;
        const response = err.response;
        if (response.statusCode === 404) throw new Exceptions.NotFoundError(response);
        if (response.statusCode >= 500) {
          if (attemps++ <= this.attempts) {
            return this.send(options, attemps);
          } else {
            throw new Exceptions.ParseError(response, this);
          }
        } else {
          this.errorMiddleware(response);
        }
      })
      .catch(error => {
        if (error instanceof Exceptions.APIError) throw error;
        error = _.defaults(error, { message: 'Fatal internal error!' });
        throw new Exceptions.RequestError(error);
      });
  }

  sendAndGetRaw(options = {}) {
    const preparedData = this._prepareData();
    const requestOptions = this._transform(_.defaults(this._mergeOptions(options), preparedData));
    return Request.requestClient(requestOptions);
  }
}
