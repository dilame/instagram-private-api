var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');

function TimelineFeed(session, limit) {
    this.limit = parseInt(limit) || null;
    FeedBase.apply(this, arguments);
}
util.inherits(TimelineFeed, FeedBase);

module.exports = TimelineFeed;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Media = require('../media');


TimelineFeed.prototype.get = function () {
    var oldThis = this;
    return new Request(this.session)
        .setMethod('POST')
        .setResource('timelineFeed', {
            maxId: this.getCursor(),
        })
        .setHeaders({
            'X-Ads-Opt-Out': '0',
            'X-Google-AD-ID': this.session.advertising_id,
            'X-DEVICE-ID': this.session.uuid
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
            is_pull_to_refresh: '1'
        })
        .send()
        .then(function(data) {
            oldThis.moreAvailable = data.more_available;
            var media = _.compact(_.map(data.feed_items, function(item){
                var medium = item.media_or_ad;
                if(!medium || medium.injected) return false;
                return new Media(oldThis.session, medium);
            }));
            if (oldThis.moreAvailable)
                oldThis.setCursor(data.next_max_id);
            return media;    
        });
};