var should = require('should');
var Client = require('../../../client/v1');
var _ = require('lodash');

var shouldBeThread = require('../thread').shouldBeThread;

describe("`InboxPending` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.InboxPending(session);
    });

    it("should not be problem to get pending threads", function(done) {

        feed.get().then(function(items) {
            _.each(items, shouldBeThread);
            feed.isMoreAvailable().should.be.Boolean();
            done();
        })
    })

});