var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var trim = require('underscore.string/trim');
var faker = require('faker');
var session;

describe("thread", function () {
    
    var instagramOfficialId = 25025320;
    var session, thread, selfId, randomId;
    var text = trim(faker.lorem.text(10).slice(0,200));
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    before(function (done) {
        var account = session.getAccount();
        selfId = account.id;
        ClientV1.Media.forHashtag(session, 'instagram')
            .then(function(json) {
                var medium = _.sample(json.media);
                randomId = medium.account.id;
                return ClientV1.Thread.configureText(session, [selfId, randomId], text)
            })
            .then(function (t) {
                thread = t;
                done();
            })
    });
    
    
    function shoulBeThread(thread) {
        should(thread).not.be.empty()
        thread.should.be.instanceOf(ClientV1.Thread)
        thread.should.have.property('id');
        thread.inviter.should.be.an.instanceOf(ClientV1.Account);
        thread.accounts.should.be.an.Array();
        thread.accounts.should.not.be.empty();
        thread.items.should.be.an.Array();
        thread.items.should.not.be.empty();
        thread.params.accounts.should.not.be.empty();
        thread.params.items.should.not.be.empty();
        thread.params.inviter.should.have.property('id');
        _.each(thread.accounts, function (account) {
            account.should.be.instanceOf(ClientV1.Account)
        })
        _.each(thread.items, function (account) {
            account.should.be.instanceOf(ClientV1.ThreadItem)
        })
    }
    
    function shouldHaveAThreadProfileItem(threadItem) {
        threadItem.should.be.instanceOf(ClientV1.ThreadItem);
        threadItem.params.type.should.be.equal('profile');
        threadItem.params.profile.username.should.be.a.String();
        threadItem.params.profile.id.should.be.a.Number();
        threadItem.params.accountId.should.be.an.Number();
        threadItem.params.created.should.be.a.Date();
        threadItem.params.profileMediaPreview.should.be.an.Array();
        _.each(threadItem.params.profileMediaPreview, function (medium) {
            medium.id.should.be.a.String();
            medium.images.should.be.an.Array();
            _.each(medium.images, function (image) {
                image.should.have.property('url')
                image.should.have.property('width')
                image.should.have.property('height')    
            })
        })
        
    }
    
    
    function shouldHaveAThreadHashtagItem(threadItem) {
        threadItem.should.be.instanceOf(ClientV1.ThreadItem);
        threadItem.params.type.should.be.equal('hashtag');
        threadItem.params.hashtag.mediaCount.should.be.a.Number();
        threadItem.params.hashtag.name.should.be.a.String();
    }
    
    
    it("should be created and valid thread", function() {
        shoulBeThread(thread)
    })
    
    
    it("should be able to fetch inbox with message account sent", function (done) {      
        ClientV1.Thread.all(session, 1)
            .then(function (threads) {
                var t = _.findWhere(threads, {id: thread.id});
                shoulBeThread(t)
                done();
            })
    });    
    
    
    it("should be able to fetch thread with items", function (done) {      
        ClientV1.Thread.show(session, thread.id, 10)
            .then(function (t) {
                shoulBeThread(t)
                done();
            })
    });
    
    
    it("should be able to approve message", function (done) {      
        ClientV1.Thread.approve(session, thread.id)
            .then(function () {
                done();
            })
    });    
    
    
    it("should be able to approve all messages", function (done) {      
        ClientV1.Thread.approveAll(session)
            .then(function () {
                done();
            })
    });    
    
    
    
    // Text
    it("should be able to respond with text to thread", function (done) {      
        thread.broadcastText("hello")
            .then(function (thread) {
                shoulBeThread(thread);
                done();
            })
    });    
    
    
    it("should be able to respond with media share to thread", function (done) {  
        ClientV1.Media.forAccount(session, instagramOfficialId, 1)
            .then(function (json) {
                var medium = _.first(json.media);
                return thread.broadcastMediaShare(medium.id)
            })   
            .then(function (thread) {
                shoulBeThread(thread);
                done();
            })
    });    
    
    
    
    
    // Profile 
    it("should be able to respond with profile to thread", function (done) {  
        thread.broadcastProfile(instagramOfficialId, true) 
            .then(function (thread) {
                shoulBeThread(thread);
                shouldHaveAThreadProfileItem(_.first(thread.items));
                done();
            })
    });    
    
    
    it("should be able to configure profile", function (done) {   
        ClientV1.Thread.configureProfile(session, [selfId, randomId], instagramOfficialId)
            .then(function (thread) {
                shoulBeThread(thread);
                shouldHaveAThreadProfileItem(_.last(thread.items));
                done();
            })
    });    
    
    it("should be able to respond with profile to thread with text", function (done) {  
        var text = faker.lorem.text(10).slice(0, 100);
        thread.broadcastProfileWithText(instagramOfficialId, text) 
            .then(function (thread) {
                shoulBeThread(thread);
                var first = _.first(thread.items, 2);
                first[0].params.text.should.be.equal(text);
                shouldHaveAThreadProfileItem(first[1]);
                done();
            })
    });    
    
    it("should be able to configure profile with text", function (done) {  
        var text = faker.lorem.text(10).slice(0, 100);
        ClientV1.Thread.configureProfileWithText(session, [selfId, randomId], instagramOfficialId, text) 
            .then(function (thread) {
                shoulBeThread(thread);
                var first = _.first(thread.items, 2);
                first[0].params.text.should.be.equal(text);
                shouldHaveAThreadProfileItem(first[1]);
                done();
            })
    });    
        
    
    // hashtag 
    it("should be able to respond with hashtag to thread", function (done) { 
        thread.broadcastHashtag('hello', true) 
            .then(function (thread) {
                shoulBeThread(thread);
                shouldHaveAThreadHashtagItem(_.first(thread.items));
                done();
            })
    });    
    
    
    it("should be able to configure hashtag", function (done) {   
        ClientV1.Thread.configureHashtag(session, [selfId, randomId], 'hello')
            .then(function (thread) {
                shoulBeThread(thread);
                shouldHaveAThreadHashtagItem(_.last(thread.items));
                done();
            })
    });    
    
    it("should be able to respond with hashtag to thread with text", function (done) {  
        var text = faker.lorem.text(10).slice(0, 100);
        thread.broadcastHashtagWithText('hello', text) 
            .then(function (thread) {
                shoulBeThread(thread);
                var first = _.first(thread.items, 2);
                first[0].params.text.should.be.equal(text);
                shouldHaveAThreadHashtagItem(first[1]);
                done();
            })
    });    
    
    it("should be able to configure hashtag with text", function (done) {  
        var text = faker.lorem.text(10).slice(0, 100);
        ClientV1.Thread.configureHashtagWithText(session, [selfId, randomId], 'hello', text) 
            .then(function (thread) {
                shoulBeThread(thread);
                var first = _.first(thread.items, 2);
                first[0].params.text.should.be.equal(text);
                shouldHaveAThreadHashtagItem(first[1]);
                done();
            })
    });    
    
    
    // Media share
    it("should be able to configure media share", function (done) {   
        ClientV1.Media.forAccount(session, instagramOfficialId, 1)
            .then(function (json) {
                var medium = _.first(json.media);
                return ClientV1.Thread.configureMediaShare(session, [selfId, randomId], medium.id);
            })   
            .then(function (thread) {
                shoulBeThread(thread);
                done();
            })
    });    
    
    
    it("should be able to seen message", function (done) {      
        ClientV1.Thread.seen(session, thread.id)
            .then(function () {
                done();
            })
    });       
    
    
    it("should be able to seen message with thread instance", function (done) {      
        thread.seen().then(function () {
            done();
        })
    }); 
    
    
    it("should be able to hide message", function (done) {      
        ClientV1.Thread.hide(session, thread.id)
            .then(function () {
                done();
            })
    }); 
    
    
    it("should be able to hide message with thread instance", function (done) {      
        thread.hide().then(function () {
            done();
        })
    }); 
    
    
    
    it("should not be problem to subscribe to thread and get message", function (done) {      
        this.timeout(3000);
        var text = faker.lorem.text(10).slice(0, 10);
        thread.subscribe(function (thread) {
            shoulBeThread(thread);
            _.first(thread.items).params.text.should.be.equal(text)
            done();
        });
        thread.broadcastText(text);
    }); 
    
    
    it("should not be problem to subscribe to threads (all)", function (done) {      
        this.timeout(20000);
        var text = faker.lorem.text(10).slice(0, 10);
        ClientV1.Thread.subscribeAll(session, function (thread) {
            shoulBeThread(thread);
            _.first(thread.items).params.text.should.be.equal(text)
            done();
        })
        thread.broadcastText(text);
    }); 
    
    
    it("should not be problem to get error on invalid key", function (done) {      
        var key = session._sessionKey;
        session._sessionKey = "wuf"
        ClientV1.Thread.subscribeAll(session, function (thread) {}, function (error) {
           error.should.be.an.instanceOf(Error);
           error.message.should.be.equal('Not possible to find key or create socket session');
           done();
        })
        session._sessionKey = key;
    }); 
    
})

