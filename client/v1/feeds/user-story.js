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
            let reels = Object.values(data.reels);
            if (!reels.length) return [];
            return reels.map(reel => reel.items).reduce((acc, val) => acc.concat(val)).map(item => new Media(that.session, item));
        });
};

module.exports = UserStory;
