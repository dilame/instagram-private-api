var should = require('should');
var _ = require('lodash');
var Client = require('../../client/v1');

function shouldBeThreadItem (item) {
    item.params.should.have.property('id');
    item.params.should.have.property('type');
    item.params.should.have.property('created');
    item.params.type.should.be.oneOf(['text', 'media', 'mediaShare', 'actionLog', 'profile', 'location', 'hashtag', 'like', 'link']);
    if (item.params.type == "text") {
        item.params.text.should.be.String();
    }
    if (item.params.type == "media") {
        item.params.media.should.be.Array();
    }
    if (item.params.type == "mediaShare") {
        item.mediaShare.should.be.instanceOf(Client.Media);
    }
    if (item.params.type == "actionLog") {
        item.params.actionLog.should.be.Object();
    }
    if (item.params.type == "profile") {
        item.profile.should.be.instanceOf(Client.Account)
    }
    if (item.params.type == "location") {
        item.location.should.be.instanceOf(Client.Location);
    }
    if (item.params.type == "hashtag") {
        item.hashtag.should.be.instanceOf(Client.Hashtag);
    }
    if (item.params.type == "link") {
        item.params.link.should.be.Object();
    }
}

function shouldBeThread (thread) {
    thread.params.should.have.property('title');
    thread.params.should.have.property('id');
    thread.id.should.not.be.empty();
    _.each(thread.items, shouldBeThreadItem)
}

module.exports.shouldBeThreadItem = shouldBeThreadItem;
module.exports.shouldBeThread = shouldBeThread;