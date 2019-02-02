import * as Resource from './resource';
import { Request } from '../request';
import { LOGIN_EXPERIMENTS, SUPPORTED_CAPABILITIES } from '../constants/constants';

export class Internal extends Resource {
  static readMsisdnHeader (session) {
    return new Request(session)
      .setMethod('POST')
      .setResource('readMsisdnHeader')
      .setHeaders({
        'X-DEVICE-ID': session.uuid,
      })
      .setData({
        mobile_subno_usage: 'ig_select_app',
      })
      .setBodyType('form')
      .signPayload()
      .send();
  }

  static qeSync (session, preLogin) {
    const req = new Request(session)
      .setMethod('POST')
      .setResource('qeSync')
      .setHeaders({
        'X-DEVICE-ID': session.uuid,
      })
      .setBodyType('form')
      .setData({})
      .setData({
        id: session.uuid,
        experiments: LOGIN_EXPERIMENTS.join(','),
      });

    if (!preLogin) {
      return session.getAccountId().then(id =>
        req
          .setData({
            _uuid: session.uuid,
            _uid: id,
          })
          .signPayload()
          .send(),
      );
    } else {
      return req.signPayload().send();
    }
  }

  static launcherSync (session, preLogin) {
    const req = new Request(session)
      .setMethod('POST')
      .setResource('launcherSync')
      .setHeaders({
        'X-DEVICE-ID': session.uuid,
      })
      .setBodyType('form')
      .setData({
        configs: '',
      });

    if (!preLogin) {
      return session.getAccountId().then(id =>
        req
          .setData({
            id,
            _uuid: session.uuid,
            _uid: id,
          })
          .signPayload()
          .send(),
      );
    } else {
      return req
        .setData({ id: session.uuid })
        .signPayload()
        .send();
    }
  }

  static logAttribution (session) {
    return new Request(session)
      .setMethod('POST')
      .setResource('logAttribution')
      .setBodyType('form')
      .setData({})
      .setData({
        adid: session.advertising_id,
      })
      .signPayload()
      .send();
  }

  static fetchZeroRatingToken (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('zeroRatingToken', {
        cd_id: session.uuid,
        d_id: session.device.id,
        fr: 'token_expired',
        th: '',
      })
      .setBodyType('form')
      .send();
  }

  static setContactPointPrefill (session) {
    return new Request(session)
      .setMethod('POST')
      .setResource('contactPointPrefill')
      .setBodyType('form')
      .setData({})
      .setData({
        phone_id: session.phone_id,
        usage: 'prefill',
        _csrftoken: session.CSRFToken,
      })
      .signPayload()
      .send();
  }

  static getRankedRecipients (session, mode) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getRankedRecipients', {
        mode,
        show_threads: true,
        use_unified_inbox: true,
      })
      .setBodyType('form')
      .send();
  }

  static getPresences (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getPresences')
      .setBodyType('form')
      .send();
  }

  static getRecentActivityInbox (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getRecentActivityInbox')
      .setBodyType('form')
      .send();
  }

  static getProfileNotice (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getProfileNotice')
      .setBodyType('form')
      .send();
  }

  static getExploreFeed (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('exploreFeed', {
        is_prefetch: '',
        session_id: session.session_id,
        supported_capabilities_new: encodeURIComponent(JSON.stringify(SUPPORTED_CAPABILITIES)),
      })
      .setBodyType('form')
      .send();
  }
}
