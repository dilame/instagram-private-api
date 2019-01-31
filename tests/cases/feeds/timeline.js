require('should');
const { V1: Client } = require('../../../dist');

describe('`Timeline` class', () => {
  let feed;
  let session;

  before(() => {
    session = require('../../run').session;
    feed = new Client.Feed.Timeline(session);
  });

  it('should not be problem to get timeline feed', done => {
    const originalCursor = feed.getCursor();
    feed.get().then(media => {
      media.forEach(medium => {
        medium.should.be.instanceOf(Client.Media);
      });
      should(originalCursor).should.not.equal(feed.getCursor());
      feed.moreAvailable.should.be.Boolean();
      done();
    });
  });
});
