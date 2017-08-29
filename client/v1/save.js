var Resource = require('./resource');
var util = require("util");
var _ = require("lodash");


function Save(session, params) {
    Resource.apply(this, arguments);
}

module.exports = Save;
util.inherits(Save, Resource);

var Request = require('./request');


Save.prototype.parseParams = function (json) {
    return json || {};
};


Save.create = function(session, mediaId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('save', {id: mediaId})
        .generateUUID()
        .setData({
            media_id: mediaId,
            src: "profile"
        })
        .signPayload()
        .send()
        .then(function(data) {
            return new Save(session, {});
        })
}

Save.destroy = function(session, mediaId) {
    return new Request(session)
        .setMethod('POST')
        .setResource('unsave', {id: mediaId})
        .generateUUID()
        .setData({
            media_id: mediaId,
            src: "profile"
        })
        .signPayload()
        .send()
        .then(function(data) {
            return new Save(session, {});
        })
}
