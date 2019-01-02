var _ = require('lodash');
var util = require('util');
var FeedBase = require('./feed-base');
var Exceptions = require('../exceptions');

function MediaCommentsFeed(session, mediaId) {
    this.mediaId = mediaId;
    this.cursorType = 'minId';
    FeedBase.apply(this, arguments);
}
util.inherits(MediaCommentsFeed, FeedBase);

module.exports = MediaCommentsFeed;
var Request = require('../request');
var Comment = require('../comment');

MediaCommentsFeed.prototype.setCursor = function (cursor) {
    this.cursor = encodeURIComponent(cursor);
}

MediaCommentsFeed.prototype.get = function () {
    var that = this;
    var resource = {mediaId: this.mediaId};
    
    resource[this.cursorType] = this.getCursor();
    this.cursorType === 'minId' ? resource['maxId'] = null : resource['minId'] = null;

    console.log(resource);
    return new Request(that.session)
        .setMethod('GET')
        .setResource('mediaComments', resource)
        .send()
        .then(function(data) {

            data.next_max_id ?
                that.cursorType = 'maxId' :
                that.cursorType = 'minId';

            that.cursorType === 'minId' ?
                that.moreAvailable = data.has_more_headload_comments && !!data.next_min_id :
                that.moreAvailable = data.has_more_comments && !!data.next_max_id;

            that.iteration = that.iteration++;

            if (that.moreAvailable) {
                that.cursorType === 'minId' ?
                    that.setCursor(data.next_min_id) :
                    that.setCursor(data.next_max_id);
            }

            return _.map(data.comments, function (comment) {
                comment.media_id = that.mediaId;
                return new Comment(that.session, comment);
            });
        })
        .catch(function (reason) {
            if(reason.json.message === 'Media is unavailable')throw new Exceptions.MediaUnavailableError();
            else throw reason;
        })
};
