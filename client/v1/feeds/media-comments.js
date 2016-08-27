var _ = require('underscore');

function MediaCommentsFeed(session, mediaId) {
    this.lastMaxId = null;
    this.moreAvailable = null;
    this.mediaId = mediaId;
    this.session = session;
}

module.exports = MediaCommentsFeed;
var Request = require('../request');
var Comment = require('../comment');

MediaCommentsFeed.prototype.setMaxId = function (maxId) {
    this.lastMaxId = maxId;
};

MediaCommentsFeed.prototype.getMaxId = function () {
    return this.lastMaxId;
};

MediaCommentsFeed.prototype.isMoreAvailable = function() {
    return !!this.moreAvailable;
};

MediaCommentsFeed.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('mediaComments', {
            mediaId: that.mediaId,
            maxId: that.lastMaxId
        })
        .send()
        .then(function(data) {
            that.moreAvailable = data.has_more_comments && !!data.next_max_id;
            if (that.moreAvailable) {
                that.setMaxId(data.next_max_id);
            }
            return _.map(data.comments, function (comment) {
                comment.pk = comment.pk.c.join("");
                comment.media_id = that.mediaId;
                return new Comment(that.session, comment);
            });
        })
};