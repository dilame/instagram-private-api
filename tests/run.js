require('should');
const { V1: Client, Device } = require('../dist');
const mkdirp = require('mkdirp');
const support = require('./support');
const _ = require('lodash');
const fs = require('fs');
const imageDiff = require('image-diff');
const rp = require('request-promise');
let session;
let credentials; // [username, password, proxy]

const deleteFolderRecursive = path => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive(`${__dirname}/cookies`);
deleteFolderRecursive(`${__dirname}/tmp`);

mkdirp.sync(`${__dirname}/cookies`);
mkdirp.sync(`${__dirname}/tmp`);

// For self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Client.Request.setProxy('http://127.0.0.1:8888')
// Client.Request.setSocks5Proxy('127.0.0.1', 8888);

describe('Sessions', () => {
  before(function(done) {
    // Wait one hour
    this.timeout(60 * 60 * 1000);
    support.credentials().then(auth => {
      credentials = auth;
      done();
    });
  });

  it('should have credentials', () => {
    credentials.length.should.be.equal(3);
    credentials[0].should.be.String();
    credentials[1].should.be.String();
  });

  it('should not be problem to create sessions', async done => {
    const device = new Device({ username: credentials[0] });
    const storage = new Client.CookieMemoryStorage();
    try{
      const session = await Client.Session.create(
        device,
        storage,
        credentials[0],
        credentials[1],
        credentials[2],
      );
      module.exports.session = session;
      console.log(session);
      session.should.be.instanceOf(Client.Session);
      done();
    } catch (e) {
      done(e);
    }

  });

  describe('Basics', () => {
    require('./cases/device');
    require('./cases/account-creator');
  });

  describe('Samples', () => {
    it('should not be problem to get account from session', done => {
      session.getAccount().then(acc => {
        acc.should.be.instanceOf(Client.Account);
        acc.params.should.have.property('username');
        done();
      });
    });

    it('should not be problem to search account with session', done => {
      Client.Account.searchForUser(session, 'instagram').then(account => {
        account.params.username.should.be.equal('instagram');
        done();
      });
    });

    it('should not be problem to show discover feed', done => {
      Client.discover(session, false, 5).then(discover => {
        discover.length.should.be.above(0);
        discover[0].account.should.be.instanceOf(Client.Account);
        discover[0].mediaIds.should.be.Array();
        done();
      });
    });

    it('should be able to ask for json endpoint through web-request', done => {
      new Client.Web.Request(session)
        .setMethod('GET')
        .setResource('userInfo', { id: 'instagram' })
        .setJSONEndpoint()
        .send()
        .then(result => {
          result.graphql.user.should.be.Object();
          result.graphql.user.username.should.be.String();
          result.graphql.user.username.should.equal('instagram');
          done();
        });
    });

    it('should not be problem to get media likers', done => {
      Client.Media.likers(session, '1317759032287303554_25025320').then(
        likers => {
          _.each(likers, liker => {
            liker.should.be.instanceOf(Client.Account);
          });
          done();
        },
      );
    });

    it('should be able to block user', done => {
      Client.Relationship.block(session, '1750777689').then(relationship => {
        relationship.should.be.instanceOf(Client.Relationship);
        relationship.params.blocking.should.be.Boolean();
        done();
      });
    });

    it('should be able to unblock user', done => {
      Client.Relationship.block(session, '1750777689').then(relationship => {
        relationship.should.be.instanceOf(Client.Relationship);
        relationship.params.blocking.should.be.Boolean();
        done();
      });
    });

    it('should not be problem to access media location property', done => {
      function shouldBeValidLocation (location) {
        location.params.should.have.property('title');
        location.params.should.have.property('id');
        location.should.have.property('id');
      }

      Client.Location.search(session, 'New York')
        .then(locations => {
          _.each(locations, shouldBeValidLocation);
          const locationFeed = new Client.Feed.LocationMedia(
            session,
            _.first(locations).id,
          );
          return locationFeed.get();
        })
        .then(media => {
          const first = media[0];
          shouldBeValidLocation(first.location);
          done();
        });
    });

    it('should not be problem to like media', done => {
      const mId = '1312896938542959690_25025320';
      Client.Like.destroy(session, mId)
        .then(() => Client.Media.getById(session, mId))
        .then(m => {
          m.params.hasLiked.should.equal(false);
          return Client.Like.create(session, mId);
        })
        .then(() => Client.Media.getById(session, mId))
        .then(m => {
          m.params.hasLiked.should.equal(true);
          done();
        });
    });

    it('should not be problem to search hashtag', done => {
      Client.Hashtag.search(session, 'instagram').then(hashtags => {
        _.each(hashtags, hashtag => {
          hashtag.should.be.instanceOf(Client.Hashtag);
        });
        done();
      });
    });

    it('should not be problem to use in memory cookies', done => {
      const device = new Client.Device(credentials[0]);
      const storage = new Client.CookieMemoryStorage();
      const promise = Client.Session.create(
        device,
        storage,
        credentials[0],
        credentials[1],
        credentials[2],
      );
      promise
        .then(sessionInstance => {
          sessionInstance.should.be.instanceOf(Client.Session);
          return sessionInstance.getAccount();
        })
        .then(account => {
          account.should.be.instanceOf(Client.Account);
          done();
        });
    });

    it('should not be problem to upload profile picture', done => {
      const device = new Client.Device(credentials[0]);
      const storage = new Client.CookieMemoryStorage();
      const catPath = `${__dirname}/cat.jpg`;
      const catTmpPath = `${__dirname}/tmp/downloaded.jpg`;
      const promise = Client.Session.create(
        device,
        storage,
        credentials[0],
        credentials[1],
        credentials[2],
      );
      promise
        .then(sessionInstance => {
          sessionInstance.should.be.instanceOf(Client.Session);
          return Client.Account.setProfilePicture(session, catPath);
        })
        .then(account => {
          account.should.be.instanceOf(Client.Account);
          const picture = account.params.picture;
          return [rp.get(picture, { encoding: 'binary' }), account];
        })
        .spread(picture => {
          fs.writeFileSync(
            `${__dirname}/tmp/downloaded.jpg`,
            picture,
            'binary',
          );
          return new Promise((res, rej) => {
            imageDiff.getFullResult(
              {
                actualImage: catTmpPath,
                expectedImage: catPath,
              },
              (err, diff) => {
                if (err) return rej(err);
                return res(diff);
              },
            );
          });
        })
        .then(diff => {
          diff.percentage.should.be.below(0.1);
          done();
        })
        .catch(reason => {
          done(reason);
        });
    });
  });

  describe('Feeds', () => {
    require('./cases/feeds/media-comments');
    require('./cases/feeds/tagged-media');
    require('./cases/feeds/inbox');
    require('./cases/feeds/inbox-pending');
    require('./cases/feeds/timeline');
    require('./cases/feeds/account-following');
    require('./cases/feeds/account-followers');
  });
});
