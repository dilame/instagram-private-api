var _ = require('underscore');

function UserMediaFeed(session, accountId, limit) {
    this.cursor = null;
    this.moreAvailable = null;
    this.accountId = accountId;
    this.session = session;
    this.allMedia = [];
    this.timeout = 10 * 60 * 1000; // 10 minutes
    this.limit = limit;
}

module.exports = UserMediaFeed;
var Media = require('../media');
var Request = require('../request');
var Helpers = require('../../../helpers');
var Account = require('../account');


UserMediaFeed.prototype.setCursor = function (maxId) {
    this.cursor = maxId;
};


UserMediaFeed.prototype.getCursor = function () {
    return this.cursor;
};


UserMediaFeed.prototype.isMoreAvailable = function () {
    return !!this.moreAvailable;
};


UserMediaFeed.prototype.get = function () {
    var that = this;
    return this.session.getAccountId()
        .then(function(id) {
            var rankToken = Helpers.buildRankToken(id);
            return new Request(that.session)
                .setMethod('GET')
                .setResource('userFeed', {
                    id: that.accountId,
                    maxId: that.getCursor(),
                    rankToken: rankToken
                })
                .send()
                .then(function(data) {
                    that.moreAvailable = data.more_available;
                    var lastOne = _.last(data.items);
                    if (that.moreAvailable && lastOne)
                        that.setCursor(lastOne.id);
                    return _.map(data.items, function (medium) {
                        return new Media(that.session, medium);
                    });
                })
        });
};


UserMediaFeed.prototype.all = function () {
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

UserMediaFeed.prototype.allSafe = function () {
    return this.all().timeout(this.timeout);
};