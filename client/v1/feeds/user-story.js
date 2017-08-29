var _ = require('lodash');

function UserStory(session, userIds) {
    this.session = session;
    this.userIds = userIds;
}

module.exports = UserStory;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Media = require('../media');

UserStory.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('POST')
        .setResource('userStory')
        .generateUUID()
        .setData({
            user_ids: that.userIds
        })
        .signPayload()
        .send()
        .then(function(data) {
            var media = _.map(data.items, function(medium){
                return new Media(that.session, medium);
            });
            return media;    
        });
};