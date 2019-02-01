const _ = require('lodash');
const FeedBase = require('./feed-base');
const Request = require('../../request');
const Media = require('../media').Media;

class TimelineFeed extends FeedBase {
  constructor(session, limit) {
    super(...arguments);
    this.limit = parseInt(limit) || null;
  }

  get() {
    const oldThis = this;
    return new Request(this.session)
      .setMethod('POST')
      .setResource('timelineFeed', {
        maxId: this.getCursor(),
      })
      .setHeaders({
        'X-Ads-Opt-Out': '0',
        'X-Google-AD-ID': this.session.advertising_id,
        'X-DEVICE-ID': this.session.uuid,
      })
      .setBodyType('form')
      .setData({
        _uuid: this.session.uuid,
        is_prefetch: '0',
        phone_id: this.session.phone_id,
        client_session_id: this.session.session_id,
        battery_level: '100',
        is_charging: '1',
        will_sound_on: '1',
        is_on_screen: true,
        timezone_offset: '2',
        reason: 'pull_to_refresh',
        is_pull_to_refresh: '1',
      })
      .send()
      .then(data => {
        oldThis.moreAvailable = data.more_available;
        const media = _.compact(
          _.map(data.feed_items, item => {
            const medium = item.media_or_ad;
            if (!medium || medium.injected) return false;
            return new Media(oldThis.session, medium);
          }),
        );
        if (oldThis.moreAvailable) oldThis.setCursor(data.next_max_id);
        return media;
      });
  }
}

module.exports = TimelineFeed;
