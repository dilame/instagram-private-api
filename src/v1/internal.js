const Resource = require('./resource');
const Request = require('../request');
const LoginExperiments = require('./login-experiments.json');

class Internal extends Resource {
  static readMsisdnHeader(session) {
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

  static qeSync(session, preLogin) {
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
        experiments: LoginExperiments.join(','),
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

  static launcherSync(session, preLogin) {
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

  static logAttribution(session) {
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

  static fetchZeroRatingToken(session) {
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

  static setContactPointPrefill(session) {
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

  static getRankedRecipients(session, mode) {
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

  static getPresences(session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getPresences')
      .setBodyType('form')
      .send();
  }

  static getRecentActivityInbox(session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getRecentActivityInbox')
      .setBodyType('form')
      .send();
  }

  static getProfileNotice(session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('getProfileNotice')
      .setBodyType('form')
      .send();
  }

  static getExploreFeed(session) {
    const supported_capabilities = [
      {
        name: 'SUPPORTED_SDK_VERSIONS',
        value:
          '9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0',
      },
      {
        name: 'FACE_TRACKER_VERSION',
        value: 10,
      },
      {
        name: 'segmentation',
        value: 'segmentation_enabled',
      },
      {
        name: 'WORLD_TRACKER',
        value: 'WORLD_TRACKER_ENABLED',
      },
    ];

    return new Request(session)
      .setMethod('GET')
      .setResource('exploreFeed', {
        is_prefetch: '',
        session_id: session.session_id,
        supported_capabilities_new: encodeURIComponent(
          JSON.stringify(supported_capabilities),
        ),
      })
      .setBodyType('form')
      .send();
  }
}

module.exports = Internal;
