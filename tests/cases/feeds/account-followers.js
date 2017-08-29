var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var path = require('path');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('lodash');
var fs = require('fs');


describe("`AccountFollowers` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.AccountFollowers(session, '25025320', 400);
    })

    it("should not be problem to get followers", function(done) {
        var originalCursor = feed.getCursor();
        feed.get().then(function(data) {
            _.each(data, function(account) {
                account.should.be.instanceOf(Client.Account)
            })
            should(originalCursor).not.equal(feed.getCursor())
            feed.moreAvailable.should.be.Boolean();
            feed.moreAvailable.should.equal(true);
            done()
        })
    })

    it("should not be problem to get all followers with limit 400", function(done) {

        feed.all().then(function(data) {
            _.each(data, function(account) {
                account.should.be.instanceOf(Client.Account)
            })
            feed.moreAvailable.should.be.Boolean();
            done()
        })
    })

})
