var Request = require('./request');
var Helpers = require('../../helpers');
var _ = require('lodash');
var Media = require('./media');
var Account = require('./account');

module.exports = function(session, inSingup) {
    return new Request(session)
        .setMethod('POST')
        .setResource('discoverAyml')
        .generateUUID()
        .setData({
            phone_id: Helpers.generateUUID(),
            in_signup: inSingup ? 'true' : 'false',
            module: 'discover_people'
        })
        .send()
        .then(function(json) {
            var items = _.property('suggested_users.suggestions')(json) || [];
            return _.map(items, function(item) {
                return {
                    account: new Account(session, item.user),
                    mediaIds: item.media_ids
                }
            })
        })
};



