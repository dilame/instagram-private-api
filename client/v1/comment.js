var Resource = require('./resource');
var util = require("util");
var _ = require("lodash");
var crypto = require('crypto');
var camelKeys = require('camelcase-keys');

function Comment(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(Comment, Resource);
module.exports = Comment;

var Request = require('./request');
var Account = require('./account');
var Media = require('./media');


Comment.prototype.parseParams = function (json) {
  var hash = camelKeys(json);
  hash.created = json.created_at;
  hash.status = (json.status || "unknown").toLowerCase();
  hash.id = json.pk || json.id;
  this.account = new Account(this.session, json.user);
  return hash;
};


Comment.prototype.account = function () {
  return this.account;
};


Comment.prototype.getParams = function () {
    return _.defaults({
        account: this.account.params
    }, this._params);
};


Comment.create = function(session, mediaId, text) {
    return new Request(session)
        .setMethod('POST')
        .setResource('comment', {id: mediaId})
        .generateUUID()
        .setData({
            media_id: mediaId,
            src: "profile",
            comment_text: text,
            idempotence_token: crypto.createHash('md5').update(text).digest('hex')
        })
        .signPayload()
        .send()
        .then(function(data) {
            return new Comment(session, data.comment)
        })
}

Comment.delete = function(session, mediaId, commentId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('commentDelete', {id: mediaId, commentId: commentId})
        .generateUUID()
        .setData({
            media_id: mediaId,
            src: "profile",
            idempotence_token: crypto.createHash('md5').update(commentId).digest('hex')
        })
        .signPayload()
        .send()
        .then(function(data) {
            return data;
        })
}

Comment.bulkDelete = function(session, mediaId, commentIds) {
    return new Request(session)
        .setMethod('POST')
        .setResource('commentBulkDelete', {id: mediaId})
        .generateUUID()
        .setData({
            media_id: mediaId,
            comment_ids_to_delete: commentIds.join(','),
            src: "profile",
            idempotence_token: crypto.createHash('md5').update(commentIds.join(',')).digest('hex')
        })
        .signPayload()
        .send()
        .then(function(data) {
            return data;
        })
}
