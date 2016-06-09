var Promise = require('bluebird');
var Resource = require('./resource');
var _ = require('underscore');
var util = require('util');

function ThreadItem(session, params) {
    Resource.apply(this, arguments);
}

module.exports = ThreadItem;
util.inherits(ThreadItem, Resource);

var routes = require('./routes');
var Request = require('./request');
var Medium = require('./media');
var Account = require('./account');


ThreadItem.prototype.parseParams = function (params) {
    params.created = new Date(params.created);
    if(params.type == 'mediaShare')
        this.mediaShare = new Medium(this.session, params.mediaShare)
    if(params.type == 'profile')
        this.profile = new Account(this.session, params.profile)
    return params;
};