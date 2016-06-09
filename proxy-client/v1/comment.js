var _ = require('underscore');
var util = require('util');
var Resource = require('./resource');


function Comment(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Comment;
util.inherits(Comment, Resource);

var Account = require('./account');
var routes = require('./routes');
var Request = require('./request');


Comment.prototype.parseParams = function(json) {
    this.account = new Account(this.session, json.account);
    return json;
}

Comment.prototype.getParams = function() {
    return _.defaults({
        account: this.account.params
    }, this._params)
}

Comment.create = function(session, mediaId, text) {
    var url = routes.getUrl(session.getServer(), routes.URL.COMMENTS_FOR_MEDIUM, {id: mediaId});
    return Request.postWithSession(session, url, {json: { text: text }})
        .then(function (comment) {
            return new Comment(session, comment);
        })
}