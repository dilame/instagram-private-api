var should = require('should');
var Client = require('../client/v1');
var path = require('path');
var mkdirp = require('mkdirp');
var support = require('./support');
var _ = require('underscore');
var fs = require('fs');
var dir = './cookies';
var session;
var credentails; // [username, password, proxy]

var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
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
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Client.Request.setProxy('http://127.0.0.1:8888')

describe("Sessions", function () {
    before(function (done) {
        // Wait one hour
        this.timeout(60 * 60 * 1000);
        support.credentials()
            .then(function (auth) {
                credentails = auth;
                done();
            });
    });

    it("should have credentials", function () {
        credentails.length.should.be.equal(3);
        credentails[0].should.be.String()
        credentails[1].should.be.String()
    });

    it("should not be problem to create sessions", function (done) {
        var device = new Client.Device(credentails[0]);
        var storage = new Client.CookieFileStorage(__dirname + '/cookies/'+credentails[0]+'.json');
        var promise = Client.Session.create(device, storage, credentails[0], credentails[1], credentails[2]);
        promise.then(function(sessionInstance) {
            session = sessionInstance;
        	session.should.be.instanceOf(Client.Session);
            done();
        });
    });

    it("should not be problem to get account from session", function(done) {
        session.getAccount().then(function(acc){
            acc.should.be.instanceOf(Client.Account);
            acc.params.should.have.property('username')
            done();
        })
    })

    it("should not be problem to search account with session", function(done) {
        Client.Account.searchForUser(session, 'instagram')
            .then(function(account) {
                account.params.username.should.be.equal('instagram');
                done();
            }) 
    })

    it("should not be problem to show discover feed", function(done) {
        Client.discover(session, false, 5)
            .then(function(discover) {
                discover.length.should.be.above(0);
                discover[0].account.should.be.instanceOf(Client.Account)
                discover[0].mediaIds.should.be.Array();
                done();
            }) 
    })

    it("should be able to ask for json endpoint trough web-request", function(done) {
        var request = new  Client.Web.Request(session)
            .setMethod('GET')
            .setResource('userInfo', {id: 'instagram'})
            .setJSONEndpoint()
            .send()
            .then(function(result) {
                result.user.should.be.Object();
                result.user.username.should.be.String();
                result.user.username.should.equal('instagram')
                done();
            }) 
    })

    it("should be able to resolve challenge", function(done) {
        // to simulate checkpoint
        var checkpintError = new Client.Exceptions.CheckpointError({
            checkpoint_url: 'https://i.instagram.com/challenge/'
        }, session)
        var request = new Client.Web.Challenge.resolve(checkpintError)
            .catch(Client.Exceptions.NoChallengeRequired, function(e) {
                done();
            })
    });

    it("should not be problem to fetch media comments", function(done) {
        var feed = new Client.Feed.MediaComments(session, '1258975077729962593_1750777689');
        return feed.get()
            .then(function(comments) {
                comments.length.should.be.equal(1);
                comments[0].should.have.property('account')
                comments[0].params.should.have.property('created')
                comments[0].params.created.should.be.Number();
                comments[0].params.should.have.property('text')
                comments[0].params.text.should.be.String();
                done();
            });
    })

    it("should not be problem to get media likers", function(done) {
        Client.Media.likers(session, '1258975077729962593_1750777689')
            .then(function(likers) {
                _.each(likers, function(liker){ 
                    liker.should.be.instanceOf(Client.Account)
                })
                done();
            });
    })

    require('./cases/device')(session);
    require('./cases/account-creator')(session);
})
