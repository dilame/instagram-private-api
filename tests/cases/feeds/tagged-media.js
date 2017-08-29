var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var path = require('path');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('lodash');
var fs = require('fs');


describe("`TaggedMedia` class", function() {

    var feed, session;

    before(function() {
        // https://github.com/huttarichard/instagram-private-api/issues/23
        session = require('../../run').session;
        feed = new Client.Feed.TaggedMedia(session, 'форумтаврида')
    })

    it("should not be problem to get media", function(done) {
        var originalCursor = feed.getCursor();
        feed.get().then(function(media) {
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
