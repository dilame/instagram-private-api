var should = require('should');
var Client = require('../../../client/v1');
var _ = require('lodash');

describe('`UserTagsMedia` class', function() {
    var feed, session;

    before(function() {
        // https://github.com/huttarichard/instagram-private-api/issues/23
        session = require('../../run').session;
        feed = new Client.Feed.UserTagsMedia(session, 25025320);
    })

    it('should not be problem to get user tags media', function(done) {
        var originalCursor = feed.getCursor();
        feed.get().then(function(media) {
            media.length.should.be.above(0);
            _.each(media, function(medium) {
                medium.should.be.instanceOf(Client.Media);
            });
            should(originalCursor).should.not.equal(feed.getCursor());
            feed.moreAvailable.should.be.Boolean();
            feed.moreAvailable.should.equal(true);
            done();
        });
    });
});
