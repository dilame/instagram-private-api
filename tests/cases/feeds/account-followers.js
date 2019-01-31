const should = require('should');
const { V1: Client } = require('../../../dist');

describe('`AccountFollowers` class', () => {
  let feed;
  let session;

  before(() => {
    session = require('../../run').session;
    feed = new Client.Feed.AccountFollowers(session, '25025320', 400);
  });

  it('should not be problem to get followers', done => {
    const originalCursor = feed.getCursor();
    feed.get().then(data => {
      data.forEach(account => {
        account.should.be.instanceOf(Client.Account);
      });
      should(originalCursor).not.equal(feed.getCursor());
      feed.moreAvailable.should.be.Boolean();
      feed.moreAvailable.should.equal(true);
      done();
    });
  });

  it('should not be problem to get all followers with limit 400', done => {
    feed.all().then(data => {
      data.forEach(account => {
        account.should.be.instanceOf(Client.Account);
      });
      feed.moreAvailable.should.be.Boolean();
      done();
    });
  });
});
