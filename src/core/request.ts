import { defaultsDeep, inRange, random } from 'lodash';
import { createHmac } from 'crypto';
import { Subject } from 'rxjs';
import { AttemptOptions, retry } from '@lifeomic/attempt';
import * as request from 'request-promise';
import * as simpleRequest from 'request';
import * as SocksProxyAgent from 'socks-proxy-agent';
import { Options, Response } from 'request';
import { IgApiClient } from './client';
import {
  IgActionSpamError,
  IgCheckpointError,
  IgClientError,
  IgInactiveUserError,
  IgLoginRequiredError,
  IgNetworkError,
  IgNotFoundError,
  IgPrivateUserError,
  IgResponseError,
  IgSentryBlockError,
} from '../errors';
import JSONbigInt = require('json-bigint');
import { IgResponse } from '../types/common.types';

const JSONbigString = JSONbigInt({ storeAsString: true });

const saveTrafficRequest = (options: Options) => {
  const req = simpleRequest(options);

  return new Promise<{ body: { statusCode: number; status: string } }>((res, rej) => {
    req.on('response', data => {
      req.abort();
    });

    req.on('error', rej);

    req.on('end', data => {
      res({
        body: {
          statusCode: req.response.statusCode,
          status: req.response.statusCode === 200 ? 'ok' : 'not ok',
        },
      });
    });
  });
};

type Payload = { [key: string]: any } | string;

interface SignedPost {
  signed_body: string;
  ig_sig_key_version: string;
}

export class Request {
  end$ = new Subject();
  error$ = new Subject<IgClientError>();
  attemptOptions: Partial<AttemptOptions<any>> = {
    maxAttempts: 1,
  };
  defaults: Partial<Options> = {};

  constructor(private client: IgApiClient) {}

  private static requestTransform(body, response: Response, resolveWithFullResponse) {
    try {
      // Sometimes we have numbers greater than Number.MAX_SAFE_INTEGER in json response
      // To handle it we just wrap numbers with length > 15 it double quotes to get strings instead
      response.body = JSONbigString.parse(body);
    } catch (e) {
      if (inRange(response.statusCode, 200, 299)) {
        throw e;
      }
    }
    return resolveWithFullResponse ? response : response.body;
  }

  public async send<T = any>(userOptions: Options & { isReg?: boolean; userAgent?: string }): Promise<IgResponse<T>> {
    const options = defaultsDeep(
      userOptions,
      {
        baseUrl: 'https://i.instagram.com/',
        resolveWithFullResponse: true,
        proxy: this.client.state.proxyUrl,
        simple: false,
        transform: Request.requestTransform,
        jar: this.client.state.cookieJar,
        strictSSL: false,
        gzip: true,
        headers: this.getDefaultHeaders(userOptions),
      },
      this.defaults,
    );

    // handle socks proxy
    if (options.proxy.startsWith('socks')) {
      options.agent = new SocksProxyAgent(options.proxy);
      delete options.proxy;
    }

    const response = userOptions.isReg ? await saveTrafficRequest(options) : await this.faultTolerantRequest(options);

    process.nextTick(() => this.end$.next());
    if (response.body.status === 'ok' || response.statusCode === 200) {
      /*newCookieJar
        .getCookies(parsedUrl)
        .forEach(cookie => this.client.state.cookieJar.setCookie(cookie.toString(), parsedUrl));*/
      return response;
    }
    const error = this.handleResponseError(response);
    process.nextTick(() => this.error$.next(error));
    throw error;
  }
  public signature(data: string) {
    return createHmac('sha256', this.client.state.signatureKey)
      .update(data)
      .digest('hex');
  }

  public sign(payload: Payload): SignedPost {
    const json = typeof payload === 'object' ? JSON.stringify(payload) : payload;
    const signature = this.signature(json);
    return {
      ig_sig_key_version: this.client.state.signatureVersion,
      signed_body: `${signature}.${json}`,
    };
  }

  public userBreadcrumb(size: number) {
    const term = random(2, 3) * 1000 + size + random(15, 20) * 1000;
    const textChangeEventCount = Math.round(size / random(2, 3)) || 1;
    const data = `${size} ${term} ${textChangeEventCount} ${Date.now()}`;
    const signature = Buffer.from(
      createHmac('sha256', this.client.state.userBreadcrumbKey)
        .update(data)
        .digest('hex'),
    ).toString('base64');
    const body = Buffer.from(data).toString('base64');
    return `${signature}\n${body}\n`;
  }

  private handleResponseError(response: Response): IgClientError {
    const json = response.body;
    if (json.spam) {
      return new IgActionSpamError(response);
    }
    if (response.statusCode === 404) {
      return new IgNotFoundError(response);
    }
    if (typeof json.message === 'string') {
      if (json.message === 'challenge_required') {
        this.client.state.checkpoint = json;
        return new IgCheckpointError(response);
      }
      if (['user_has_logged_out', 'login_required'].includes(json.message)) {
        return new IgLoginRequiredError(response);
      }
      if (json.message.toLowerCase() === 'not authorized to view user') {
        return new IgPrivateUserError(response);
      }
    }
    if (json.error_type === 'sentry_block') {
      return new IgSentryBlockError(response);
    }
    if (json.status === 'not ok') {
      return new Error(`saveTrafficRequest ${json.statusCode} error`);
    }
    if (json.error_type === 'inactive user') {
      return new IgInactiveUserError(response);
    }
    return new IgResponseError(response);
  }

  private async faultTolerantRequest(options: Options) {
    try {
      return await retry(async () => request(options), this.attemptOptions);
    } catch (err) {
      throw new IgNetworkError(err);
    }
  }

  private getDefaultHeaders(options: Options & { isReg?: boolean; userAgent?: string }) {
    // TODO: unquoted Host and Connection?!
    return {
      'User-Agent': options.userAgent || this.client.state.appUserAgent,
      /*'Accept-Language': this.client.state.language.replace('_', '-'),
      'X-IG-App-Locale': this.client.state.language,
      'X-IG-Device-Locale': this.client.state.language,
      'X-Bloks-Version-Id': '0a3ae4c88248863609Connectionc67e278f34af44673cff300bc76add965a9fb036bd3ca3',
      'X-IG-WWW-Claim': '0',
      'X-Bloks-Is-Layout-RTL': 'false',
      'X-IG-Device-ID': this.client.state.uuid,
      'X-IG-Android-ID': this.client.state.deviceId,
      'X-FB-HTTP-Engine': 'Liger',
      'X-Pigeon-Session-Id': this.client.state.pigeonSessionId,
      'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
      'X-IG-Connection-Speed': `-1kbps`,
      'X-IG-Bandwidth-Speed-KBPS': '-1.000',
      'X-IG-Bandwidth-TotalBytes-B': '0',
      'X-IG-Bandwidth-TotalTime-MS': '0',
      'X-IG-Connection-Type': this.client.state.connectionTypeHeader,
      'X-IG-Capabilities': this.client.state.capabilitiesHeader,
      'X-IG-App-ID': this.client.state.fbAnalyticsApplicationId,
      Host: 'i.instagram.com',
      'Accept-Encoding': 'gzip, deflate',
      Connection: 'close',*/

      'Accept-Language': `${this.client.state.language.split('_')[0]};q=1, ${this.client.state.language.replace(
        '_',
        '-',
      )};q=0.9`,
      'X-IG-Capabilities': this.client.state.capabilitiesHeader,
      'X-IG-App-ID': 124024574287414,
      'X-IG-Connection-Type': 'WiFi',
      'X-IG-Connection-Speed': '-1kbps',
      Host: 'i.instagram.com',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-IG-ABR-Connection-Speed-KBPS': 0,
      Connection: 'close',
      'Accept-Encoding': 'gzip, deflate',
    };
  }
}
