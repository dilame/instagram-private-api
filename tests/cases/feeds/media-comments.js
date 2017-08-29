var should = require('should');
var Client = require('../../../client/v1');
var Promise = require('bluebird');
var path = require('path');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var _ = require('lodash');
var fs = require('fs');


describe("`MediaComments` class", function() {

    var feed, session;

    before(function() {
        session = require('../../run').session;
        feed = new Client.Feed.MediaComments(session, '1312896938542959690_25025320')
    })

    it("should not be problem to get comments", function(done) {
        var originalCursor = feed.getCursor();
        feed.get().then(function(comments) {
            comments[0].should.have.property('account')
            comments[0].params.should.have.property('created')
            comments[0].params.created.should.be.Number();
            comments[0].params.should.have.property('text')
            comments[0].params.text.should.be.String();

            _.each(comments, function(comment) {
                comment.should.be.instanceOf(Client.Comment)
            })
            should(originalCursor).should.not.equal(feed.getCursor())
            feed.moreAvailable.should.be.Boolean();
            feed.moreAvailable.should.equal(true);
            done()
        })
    })

})