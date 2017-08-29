var _ = require('lodash');
var Request = require('../request');
var Media = require('../media');

function UserStory(session, userIds) {
    this.session = session;
    this.userIds = userIds.map( id => String(id) );
}

UserStory.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('POST')
        .setResource('userStory')
        .generateUUID()
        .setData({
            user_ids: this.userIds
        })
        .signPayload()
        .send()
        .then(function(data) {
          return _.map(data.items, function (medium) {
              return new Media(that.session, medium);
            });
        });
};

module.exports = UserStory;