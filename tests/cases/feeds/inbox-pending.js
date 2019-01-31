const { V1: Client } = require('../../../dist');

const shouldBeThread = require('../thread').shouldBeThread;

describe('`InboxPending` class', () => {
  let feed;
  let session;

  before(() => {
    session = require('../../run').session;
    feed = new Client.Feed.InboxPending(session);
  });

  it('should not be problem to get pending threads', done => {
    feed.get().then(items => {
      items.forEach(shouldBeThread);
      feed.isMoreAvailable().should.be.Boolean();
      done();
    });
  });
});
