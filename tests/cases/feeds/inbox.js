var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('lodash');
var fs = require('fs');

var shouldBeThreadItem = require('../thread').shouldBeThreadItem;
var shouldBeThread = require('../thread').shouldBeThread;

var threadBigOne = null;

describe("`Inbox` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.Inbox(session)
    });

    it("should not be problem to get threads", function(done) {
        var firstDose;
        feed.get()
            .then(function(threads) {
                firstDose = threads;
                _.each(threads, shouldBeThread);
                threadBigOne = _.maxBy(threads, function (thread) { return thread.items.length });
                feed.isMoreAvailable().should.be.Boolean();
                if(feed.isMoreAvailable())
                    return feed.get()
                        .then(function(threads) {
                            firstDose[0].id.should.not.be.equal(threads[0].id);
                            _.each(threads, shouldBeThread);
                            return Promise.resolve()
                        });
                else return Promise.resolve()
            })
            .then(function () {
                done()
            })
    })

});



describe("`ThreadItemsFeed` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.ThreadItems(session, threadBigOne.id);
    });

    it("should not be problem to get items", function(done) {
        feed.get().then(function(items) {
            _.each(items, shouldBeThreadItem);
            feed.isMoreAvailable().should.be.Boolean();
            done();
        })
    })

});