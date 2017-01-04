var _ = require('underscore');

function SavedFeed(session, limit) {
    this.cursor = null;
    this.moreAvailable = null;
    this.session = session;
    this.allMedia = [];
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
}

module.exports = SavedFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');


SavedFeed.prototype.setCursor = function (maxId) {
    this.cursor = maxId;
};


SavedFeed.prototype.getCursor = function () {
    return this.cursor;
};


SavedFeed.prototype.isMoreAvailable = function () {
    return !!this.moreAvailable;
};


SavedFeed.prototype.get = function () {
    var that = this;

    return new Request(that.session)
      .setMethod('POST')
      .setResource('savedFeed')
      .generateUUID()
      .setData({})
      .signPayload()
      .send()
      .then(function(data) {
        that.moreAvailable = data.more_available;
        var lastOne = _.last(data.items);
        if (that.moreAvailable && lastOne) {
            that.setCursor(lastOne.id);
        }
        return _.map(data.items, function (medium) {
            return new Media(that.session, medium.media);
        });
      })
};


SavedFeed.prototype.all = function () {
    var that = this;
    return this.get().then(function (medias) {
        that.allMedia = that.allMedia.concat(medias);
        var exceedLimit = false;
        if (that.limit && that.allMedia.length > that.limit)
            exceedLimit = true;
        if (that.moreAvailable && !exceedLimit) {
            return that.all();
        } else {
            return that.allMedia;
        }
    })
};

SavedFeed.prototype.allSafe = function () {
    return this.all().timeout(this.timeout);
};
