var Client = require('../client/v1');
var mkdirp = require('mkdirp');
var support = require('./support');
var _ = require('lodash');
var fs = require('fs');
var imageDiff = require('image-diff');
var rp = require('request-promise');
var session;
var credentials; // [username, password, proxy]

var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + '/' + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive(__dirname + '/cookies');
deleteFolderRecursive(__dirname + '/tmp');

mkdirp.sync(__dirname + '/cookies');
mkdirp.sync(__dirname + '/tmp');

// For self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Client.Request.setProxy('http://127.0.0.1:8888')
// Client.Request.setSocks5Proxy('127.0.0.1', 8888);

describe('Sessions', function () {
    before(function (done) {
        // Wait one hour
        this.timeout(60 * 60 * 1000);
        support.credentials()
            .then(function (auth) {
                credentials = auth;
                done();
            });
    });

    it('should have credentials', function () {
        credentials.length.should.be.equal(3);
        credentials[0].should.be.String();
        credentials[1].should.be.String();
    });

    it('should not be problem to create sessions', function (done) {
        var device = new Client.Device(credentials[0]);
        var storage = new Client.CookieFileStorage(__dirname + '/cookies/' + credentials[0] + '.json');
        var promise = Client.Session.create(device, storage, credentials[0], credentials[1], credentials[2]);
        promise.then(function(sessionInstance) {
            session = sessionInstance;
            module.exports.session = session;
        	session.should.be.instanceOf(Client.Session);
            done();
        });
    });

    describe('Basics', function() {

        require('./cases/device');
        require('./cases/account-creator');

    });

    describe('Samples', function() {
        it('should not be problem to get account from session', function(done) {
            session.getAccount().then(function(acc){
                acc.should.be.instanceOf(Client.Account);
                acc.params.should.have.property('username');
                done();
            });
        });

        it('should not be problem to search account with session', function(done) {
            Client.Account.searchForUser(session, 'instagram')
                .then(function(account) {
                    account.params.username.should.be.equal('instagram');
                    done();
                });
        });

        it('should not be problem to show discover feed', function(done) {
            Client.discover(session, false, 5)
                .then(function(discover) {
                    discover.length.should.be.above(0);
                    discover[0].account.should.be.instanceOf(Client.Account);
                    discover[0].mediaIds.should.be.Array();
                    done();
                });
        });

        it('should be able to ask for json endpoint through web-request', function(done) {
            new Client.Web.Request(session)
                .setMethod('GET')
                .setResource('userInfo', {id: 'instagram'})
                .setJSONEndpoint()
                .send()
                .then(function(result) {
                    result.graphql.user.should.be.Object();
                    result.graphql.user.username.should.be.String();
                    result.graphql.user.username.should.equal('instagram')
                    done();
                });
        });

        it('should not be problem to get media likers', function(done) {
            Client.Media.likers(session, '1317759032287303554_25025320')
                .then(function(likers) {
                    _.each(likers, function(liker) {
                        liker.should.be.instanceOf(Client.Account);
                    })
                    done();
                });
        });

        it('should be able to block user', function(done) {
            Client.Relationship.block(session, '1750777689')
                .then(function(relationship) {
                    relationship.should.be.instanceOf(Client.Relationship);
                    relationship.params.blocking.should.be.Boolean();
                    done();
                });
        });

        it('should be able to unblock user', function(done) {
            Client.Relationship.block(session, '1750777689')
                .then(function(relationship) {
                    relationship.should.be.instanceOf(Client.Relationship);
                    relationship.params.blocking.should.be.Boolean();
                    done();
                });
        });


        it('should not be problem to access media location property', function(done) {
            function shouldBeValidLocation(location) {
                location.params.should.have.property('title');
                location.params.should.have.property('id');
                location.should.have.property('id');
            }

            Client.Location.search(session, 'New York')
                .then(function(locations) {
                    _.each(locations, shouldBeValidLocation);
                    var locationFeed = new Client.Feed.LocationMedia(session, _.first(locations).id);
                    return locationFeed.get();
                })
                .then(function(media) {
                    var first = media[0];
                    shouldBeValidLocation(first.location);
                    done();
                });
        });

        it('should not be problem to like media', function(done) {
            var mId = '1312896938542959690_25025320';
            Client.Like.destroy(session, mId)
                .then(function() {
                    return Client.Media.getById(session, mId);
                })
                .then(function(m) {
                    m.params.hasLiked.should.equal(false);
                    return Client.Like.create(session, mId);
                })
                .then(function() {
                    return Client.Media.getById(session, mId);
                })
                .then(function(m) {
                    m.params.hasLiked.should.equal(true);
                    done();
                });
        });

        it('should not be problem to search hashtag', function(done) {
            Client.Hashtag.search(session, 'instagram')
                .then(function(hashtags) {
                    _.each(hashtags, function(hashtag) {
                        hashtag.should.be.instanceOf(Client.Hashtag);
                    })
                    done();
                });
        });

        it('should not be problem to use in memory cookies', function(done) {
            var device = new Client.Device(credentials[0]);
            var storage = new Client.CookieMemoryStorage();
            var promise = Client.Session.create(device, storage, credentials[0], credentials[1], credentials[2]);
            promise.then(function(sessionInstance) {
                sessionInstance.should.be.instanceOf(Client.Session);
                return sessionInstance.getAccount();
            })
            .then(function(account) {
                account.should.be.instanceOf(Client.Account);
                done();
            });
        });

        it('should not be problem to upload profile picture', function(done) {
            var device = new Client.Device(credentials[0]);
            var storage = new Client.CookieMemoryStorage();
            var catPath = __dirname + '/cat.jpg';
            var catTmpPath = __dirname + '/tmp/downloaded.jpg';
            var promise = Client.Session.create(device, storage, credentials[0], credentials[1], credentials[2]);
            promise.then(function(sessionInstance) {
                sessionInstance.should.be.instanceOf(Client.Session);
                return Client.Account.setProfilePicture(session, catPath);
            })
            .then(function(account) {
                account.should.be.instanceOf(Client.Account);
                var picture = account.params.picture;
                return [rp.get(picture, {encoding: 'binary'}), account];
            })
            .spread(function (picture) {
                fs.writeFileSync(__dirname + '/tmp/downloaded.jpg', picture, 'binary');
                return new Promise(function(res, rej) {
                    imageDiff.getFullResult({
                        actualImage: catTmpPath,
                        expectedImage: catPath
                    }, function(err, diff) {
                        if(err) return rej(err);
                        return res(diff)
                    });
                });
            })
            .then(function(diff) {
                diff.percentage.should.be.below(0.1);
                done();
            })
            .catch(function (reason) {
                done(reason);
            });
        });
    });

    describe('Feeds', function() {
        require('./cases/feeds/media-comments');
        require('./cases/feeds/tagged-media');
        require('./cases/feeds/inbox');
        require('./cases/feeds/inbox-pending');
        require('./cases/feeds/timeline');
        require('./cases/feeds/account-following');
        require('./cases/feeds/account-followers');
    });
});
