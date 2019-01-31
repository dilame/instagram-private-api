const should = require('should');
const { V1: Client } = require('../../../dist');
const _ = require('lodash');

describe('`AccountFollowing` class', () => {
  let feed;
  let session;

  before(() => {
    session = require('../../run').session;
    feed = new Client.Feed.AccountFollowing(session, '193860719');
  });

  it('should not be problem to get followings', done => {
    const originalCursor = feed.getCursor();
    feed.get().then(data => {
      data.forEach(account => {
        account.should.be.instanceOf(Client.Account);
      });
      should(originalCursor).should.not.equal(feed.getCursor());
      feed.moreAvailable.should.be.Boolean();
      feed.moreAvailable.should.equal(false);
      done();
    });
  });
});
