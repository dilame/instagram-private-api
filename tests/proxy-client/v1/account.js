var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var resemble = require('node-resemble-js');
var session;

describe("account", function () {
    
    var instagramOfficialId = 25025320;
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    it("should be able to list followers", function(done) {
        ClientV1.Account.followers(session, instagramOfficialId)
            .then(function(json) {
                should(json).not.be.empty();
                json.should.have.property('accounts')
                json.should.have.property('cursor')
                json.should.have.property('hasMoreAvailable')
                return [ClientV1.Account.followers(session, instagramOfficialId, json.cursor), json];
            })
            .spread(function(newCursorJson, json) {
                newCursorJson.accounts[0].id.should.not.be.equal(json.accounts[0].id)
                done();
            })
    })

    
    it("should be able to list follows", function(done) {
        ClientV1.Account.follows(session, instagramOfficialId)
            .then(function(json) {
                should(json).not.be.empty();
                json.should.have.property('accounts')
                json.should.have.property('cursor')
                json.should.have.property('hasMoreAvailable')
                return [ClientV1.Account.followers(session, instagramOfficialId, json.cursor), json];
            })
            .spread(function(newCursorJson, json) {
                newCursorJson.accounts[0].id.should.not.be.equal(json.accounts[0].id)
                done();
            })
    })
    
    it("should be able to list all follows", function(done) {
        this.timeout(4 * 60 * 1000)
        ClientV1.Account.show(session, instagramOfficialId)
            .then(function(account) {
                return [ClientV1.Account.followsAll(session, instagramOfficialId), account]
            })
            .spread(function(accounts, account) {
                should(accounts).not.be.empty();
                accounts.should.be.an.Array();
                _.each(accounts, function(account) {
                    account.should.be.instanceOf(ClientV1.Account);
                });
                should(accounts.length >= account.params.followingsCount).be.ok();
                done();
            });
    })
    
    
    it("should be able to list follows with offset", function(done) {
        this.timeout(4 * 60 * 1000)
        ClientV1.Account.show(session, instagramOfficialId)
            .then(function(account) {
                return [ClientV1.Account.followsAll(session, instagramOfficialId), account]
            })
            .spread(function(allFollows, account) {
                return [ClientV1.Account.followsWithOffset(session, instagramOfficialId, 20), allFollows, account]
            })
            .spread(function(offset, allAccounts, account) {
                should(offset).not.be.empty();
                should(allAccounts).not.be.empty();
                should(account).not.be.empty();
                offset.should.be.an.Array();
                allAccounts.should.be.an.Array();
                _.each(offset, function(account) {
                    account.should.be.instanceOf(ClientV1.Account);
                });
                _.each(allAccounts, function(account) {
                    account.should.be.instanceOf(ClientV1.Account);
                });
                offset.length.should.be.equal(allAccounts.length - 20);
                _.difference(_.pluck(offset, 'id'), _.pluck(allAccounts.slice(20), 'id')).length.should.be.equal(0);
                done();
            });
    })
    
    
    it("should be able to list follows with offset and limit", function(done) {
        ClientV1.Account.followsWithOffset(session, instagramOfficialId, 0, 2)
            .then(function(accounts) {
                should(accounts).not.be.empty();
                accounts.should.be.an.Array();
                accounts.length.should.be.equal(2);
                done();
            });
    })

    
    it("should be able to search accounts", function(done) {
        ClientV1.Account.search(session, 'instagram')
            .then(function(json) {
                should(json).not.be.empty();
                should(json).be.an.Array();
                _.each(json.accounts, function (account) {
                    account.should.be.instanceOf(ClientV1.Account);
                });
                done();
            })
    });
    
    
    it("should be able to search strictly", function(done) {
        ClientV1.Account.searchOneByUsername(session, 'instagram')
            .then(function(account) {
                account.should.be.instanceOf(ClientV1.Account);
                account.params.should.have.property('id')
                account.params.should.not.have.property('biography');
                done();
            })
    });
    
    
    it("should throw an error on strict search", function(done) {
        var notExs = 'someNotExistingBullshitWhichMustBeDefinitlyWierd' + parseInt(Math.random() * 100);
        ClientV1.Account.searchOneByUsername(session, notExs)
            .catch(function(error) {
                error.name.should.be.equal("IGAccountNotFoundError")
                error.should.be.instanceOf(ClientV1.Exceptions.DynamicProxyError)
                done();
            })
    });
    
    
    it("should not be problem to change privacy", function(done) {
        ClientV1.Account.self(session)
            .then(function(account) {
                should(account).be.an.instanceOf(ClientV1.Account);
                return account.setPrivacy(true)
            })
            .then(function(account) {
                should(account).be.an.instanceOf(ClientV1.Account);
                should(account.params.isPrivate).be.ok();
                return ClientV1.Account.setPrivacy(session, false)
            })
            .then(function(account) {
                should(account).be.an.instanceOf(ClientV1.Account);
                should(account.params.isPrivate).not.be.ok();
                done();
            })
    });
    
    it("should not be problem to edit profile", function(done) {
        var middle = ['von', 'fan', 'de', 'es', 'gra', 
            'du', 'pro', 'ensta', 'repla', 'zoro', 'ok', 'fon', 'fona', 'soro', 'let'];
        var name = 'Griber '+_.sample(middle)+' John';    
        var bio = 'My name is ... ' + name;    
        var phone = '+1-202-555-0129';
        var email = 'griberjohn145@gmail.com';
        var url = 'http://'+_.sample(middle)+'.com';
        return ClientV1.Account.editProfile(session, {email: email, fullName: name})
            .then(function(account) {
                should(account).be.an.instanceOf(ClientV1.Account);
                should(account.params.fullName).be.an.String()
                should(account.params.fullName).be.equal(name)
                return account.editProfile({
                    phoneNumber: phone,
                    biography: bio,
                    externalUrl: url
                })
            })
            .then(function(account) {
                should(account).be.an.instanceOf(ClientV1.Account);
                should(account.params.phoneNumber).be.empty();
                should(account.params.biography).not.be.empty();
                should(account.params.biography).be.equal(bio);
                should(account.params.externalUrl).be.equal(url);
                done();
            });
    });
    
    it.only("should not be problem to show profile", function(done) {
        return ClientV1.Account.showProfile(session)
            .then(function(json) {
                json.should.be.an.Object();
                json.email.should.be.String();
                json.phoneNumber.should.be.String();
                done(); 
            });
    });
    
    
    it("should not be problem to update profile picture", function(done) {
        var pngPath;
        support.randomImage()
            .spread(function(readstream, jpeg, png) {
                pngPath = png;
                return ClientV1.Account.changeProfilePicture(session, readstream);    
            })
            .then(function(account) {
                return support.downloadInstagramImage(account.params.picture)
            })
            .spread(function(strem, jpg, png) {
                return new Promise(function (resolve, reject) {
                    resemble(pngPath)
                        .compareTo(png)
                        .ignoreColors()
                        .onComplete(function (data) {
                            resolve(data);
                        });  
                })
            })
            .then(function(data) {
                data.misMatchPercentage.should.be.belowOrEqual(2);
                done()
            })
    });
    
    
    describe("populated", function () {
        var account;
        
        before(function (done) {
             ClientV1.Account.show(session, instagramOfficialId)
                .then(function (a) {
                    account = a;
                    done();
                })
        });
        
        
       it("should fetch full account id and should not be private", function() {
            account.should.be.instanceOf(ClientV1.Account);
            account.params.should.have.property('biography')
            account.isPrivate().should.not.be.ok();
        });
        
        
        it("should be able to get own followers and follows", function(done) {
            Promise.all([account.followers(), account.follows()])
                .spread(function (followers, follows) {
                    followers.accounts.should.be.an.Array();
                    follows.accounts.should.be.an.Array();
                    done();
                })
        });
        
        
        it("should be able to determine activity of account", function(done) {
            Promise.all([
                account.isUserActive(10e15, 0),
                account.isUserActive(0, 10e15)
            ])
            .spread(function (jsonActive, jsonNotActive) {
                jsonActive.privateUser.should.not.be.ok();
                jsonNotActive.privateUser.should.not.be.ok();
                jsonActive.active.should.be.ok();
                jsonNotActive.active.should.not.be.ok();
                done();
            })
        }); 
    });
    
})

