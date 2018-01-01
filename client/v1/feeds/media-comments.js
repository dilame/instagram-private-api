var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');
var Exceptions = require('../exceptions');

function MediaCommentsFeed(session, mediaId, limit) {
    this.mediaId = mediaId;
    this.limit = limit;
    FeedBase.apply(this, arguments);
}
util.inherits(MediaCommentsFeed, FeedBase);

module.exports = MediaCommentsFeed;
var Request = require('../request');
var Comment = require('../comment');


MediaCommentsFeed.prototype.getCursor = function () {
    if(typeof this.cursor === 'string'){
      this.cursor = JSON.parse(this.cursor);
    }

    return this.cursor ? this.cursor.server_cursor : this.cursor;
};

MediaCommentsFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('mediaComments', {
            mediaId: that.mediaId,
            maxId: that.getCursor()
        })
        .send()
        .then(function(data) {
            that.moreAvailable = data.has_more_comments && !!data.next_max_id;
            if (that.moreAvailable) {
                that.setCursor(data.next_max_id);
            }
            return _.map(data.comments, function (comment) {
                comment.pk = comment.pk.c.join("");
                comment.media_id = that.mediaId;
                return new Comment(that.session, comment);
            });
        })
        .catch(function (reason) {
            if(reason.json.message === 'Media is unavailable')throw new Exceptions.MediaUnavailableError();
            else throw reason;
        })
};
