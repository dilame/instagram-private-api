var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var path = require('path');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('lodash');
var fs = require('fs');

describe("`Timeline` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.Timeline(session)
    })

    it("should not be problem to get timeline feed", function(done) {
        var originalCursor = feed.getCursor();
        feed.get().then(function(media) {
            media.should.not.be.empty();
            _.each(media, function(medium) {
                medium.should.be.instanceOf(Client.Media)
            })
            should(originalCursor).should.not.equal(feed.getCursor())
            feed.moreAvailable.should.be.Boolean();
            feed.moreAvailable.should.equal(true);
            done()
        })
    })

})
