var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var path = require('path');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('underscore');
var fs = require('fs');

var threadBigOne = null;
var threadItemsLength = 0;

function shouldBeThreadItem(item) {
    item.params.should.have.property('id')
    item.params.should.have.property('type')
    item.params.should.have.property('created')
    item.params.type.should.be.oneOf(['text', 'media', 'mediaShare', 'actionLog', 'profile', 'location', 'hashtag']);
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
}


describe("`Inbox` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.Inbox(session)
    })

    function shouldBeThread(thread) {
        thread.params.should.have.property('title') 
        thread.params.should.have.property('id')
        thread.id.should.not.be.empty();
        if(thread.items.length > threadItemsLength){
            threadBigOne = thread;
            threadItemsLength = thread.items.length;
        }
        _.each(thread.items, function(item) {
            shouldBeThreadItem(item);
        })
    }

    it("should not be problem to get threads", function(done) {
        var firstDose;
        feed.get().then(function(threads) {
            firstDose = threads;
            _.each(threads, shouldBeThread)
            feed.isMoreAvailable().should.be.Boolean();
            return feed.get();
        })
        .then(function(threads) {
            firstDose[0].id.should.not.be.equal(threads[0].id);
            _.each(threads, shouldBeThread)
            done()
        })
    })

})



describe("`ThreadItemsFeed` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.ThreadItems(session, threadBigOne.id);
    })

    function shouldBeItem(item) {
        item.should.be.instanceOf(Client.ThreadItem);
        item
    }

    it("should not be problem to get items", function(done) {
        var firstDose;
        feed.get().then(function(items) {
            firstDose = items;
            _.each(items, shouldBeThreadItem)
            feed.isMoreAvailable().should.be.Boolean();
            done();
        })
    })


})