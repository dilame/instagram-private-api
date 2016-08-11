var _ = require('underscore');

function MediaLikersFeed(session, mediaId) {
    this.mediaId = mediaId;
    this.session = session;
}

module.exports = MediaLikersFeed;
var Request = require('../request');
var Account = require('../account');

MediaLikersFeed.prototype.get = function() {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('mediaLikes', {mediaId: that.mediaId})
        .send()
        .then(function(data) {
            return _.map(data.users, function (user) {
                return new Account(that.session, user);
            });
        });
};