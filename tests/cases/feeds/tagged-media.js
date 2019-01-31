const should = require('should');
const { V1: Client } = require('../../../dist');
const _ = require('lodash');

describe('`TaggedMedia` class', () => {
  let feed;
  let session;

  before(() => {
    // https://github.com/huttarichard/instagram-private-api/issues/23
    session = require('../../run').session;
    feed = new Client.Feed.TaggedMedia(session, 'форумтаврида');
  });

  it('should not be problem to get media', done => {
    const originalCursor = feed.getCursor();
    feed.get().then(media => {
      media.forEach(medium => {
        medium.should.be.instanceOf(Client.Media);
      });
      should(originalCursor).should.not.equal(feed.getCursor());
      feed.moreAvailable.should.be.Boolean();
      feed.moreAvailable.should.equal(true);
      done();
    });
  });
});
