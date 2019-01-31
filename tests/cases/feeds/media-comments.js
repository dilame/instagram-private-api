const should = require('should');
const { V1: Client } = require('../../../dist');

describe('`MediaComments` class', () => {
  let feed;
  let session;

  before(() => {
    session = require('../../run').session;
    feed = new Client.Feed.MediaComments(
      session,
      '1312896938542959690_25025320',
    );
  });

  it('should not be problem to get comments', done => {
    const originalCursor = feed.getCursor();
    feed.get().then(comments => {
      comments[0].should.have.property('account');
      comments[0].params.should.have.property('created');
      comments[0].params.created.should.be.Number();
      comments[0].params.should.have.property('text');
      comments[0].params.text.should.be.String();

      comments.forEach(comment => {
        comment.should.be.instanceOf(Client.Comment);
      });
      should(originalCursor).should.not.equal(feed.getCursor());
      feed.moreAvailable.should.be.Boolean();
      feed.moreAvailable.should.equal(true);
      done();
    });
  });
});
