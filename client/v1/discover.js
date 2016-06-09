var Request = require('./request');
var Helpers = require('../../helpers');
var _ = require('underscore');
var Media = require('./media');
var Account = require('./account');

module.exports = function(session, inSingup, numMedia) {
    numMedia = _.isNumber(numMedia) ? numMedia : 3;
    return new Request(session)
        .setMethod('POST')
        .setResource('discoverAyml')
        .generateUUID()
        .setData({
            phone_id: Helpers.generateUUID(),
            in_singup: !!inSingup,
            module: 'ayml_recommended_users'
        })
        .send()
        .then(function(json) {
            var groups = _.first(json.groups || []);
            var items = groups.items || [];
            return _.map(items, function(item) {
                return {
                    account: new Account(session, item.user),
                    mediaIds: item.media_ids
                }       
            })
        })
};



