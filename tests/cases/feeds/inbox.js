var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var path = require('path');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('underscore');
var fs = require('fs');


describe("`Inbox` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.Inbox(session)
    })

    function shouldBeThreadItem(item) {
        item.params.should.have.property('id')
        item.params.should.have.property('type')
        item.params.should.have.property('created')
        item.params.should.be.oneOf(['text', 'media', 'mediaShare', 'actionLog', 'profile', 'location', 'hashtag']);
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

    it("should not be problem to get comments", function(done) {
        let firstDose;
        feed.get().then(function(threads) {
            firstDose = threads;
            threads[0].params.should.have.property('title')
            threads[0].params.should.have.property('id')
            threads[0].id.should.not.be.empty();
            _.each(threads.items, function(item) {
                shouldBeThreadItem(item);
            })
            feed.isMoreAvailable().should.be.Boolean();
            return feed.get();
        })
        .then(function(threads) {
            firstDose[0].id.should.not.be.equal(threads[0].id);
            done()
        })
    })

})
