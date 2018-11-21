var should = require('should');
var Client = require('../../client/v1');
var _ = require('lodash');

describe('`AccountCreator` class', function() {

    var session;
    before(function() {
        var device = new Client.Device('somenotExistingUser');
        var storage = new Client.CookieFileStorage(__dirname + '/../cookies/somenotExistingUser.json');
        session = new Client.Session(device, storage);
    })

    it('should not be problem to set username for `AccountCreator`', function() {
        var creator = new Client.AccountCreator(session, 'email');
        creator.setUsername('hello')
        creator.username.should.be.equal('hello')
        should(function() {
            creator.setUsername('`@#$~^&*{}');
        }).throw(/not an valid username/);
    });

    it('should check username', function(done) {
        var creator = new Client.AccountCreator(session, 'email');
        creator.checkUsername('hello')
            .then(function(json) {
                json.error.should.match(/is not available/);
                done();
            });
    });

    it('should suggest usernames', function(done) {
        var creator = new Client.AccountCreator(session, 'email');
        creator.usernameSuggestions('hello')
            .then(function(json) {
                json.suggestions.should.be.Array();
                done();
            });
    });

    it('should validate username', function(done) {
        var creator = new Client.AccountCreator(session, 'email');
        creator.setUsername(_.random(999999) + '.unexsiting');
        creator.validateUsername()
            .then(function(bool) {
                bool.should.be.Boolean();
                done();
            });
    });

    it('should not be problem to set property password', function() {
        var creator = new Client.AccountCreator(session, 'email');
        creator.setPassword(_.random(999999) + '.unexsiting');
        should(function() {
            creator.setPassword('1');
        }).throw(/be at least 6/);
    });

    it('should validate username with suggestions', function(done) {
        var creator = new Client.AccountCreator(session, 'email');
        creator.setUsername('instagram');
        creator.validateUsername()
            .catch(Client.Exceptions.InvalidUsername, function(e) {
                e.json.suggestions.should.be.Array();
                done();
            });
    });

    describe('`AccountPhoneCreator` class', function() {
        it('should not be problem to set phone property', function() {
            var creator = new Client.AccountPhoneCreator(session);
            creator.setPhone('123456');
            creator.phone.should.be.equal('123456');
            creator.setPhone('+21(345)123456');
            should(function() {
                creator.setPhone('omf');
            }).throw(/not a valid phone/);
        });

        it('should not be problem to validate', function(done) {
            var creator = new Client.AccountPhoneCreator(session);
            creator.setPhone('123456');
            creator.setUsername(_.random(999999) + '.unexsiting');
            should(function() {
                creator.validate();
            }).throw(/setPhoneCallback/);
            creator.setPhoneCallback(function(){});
            creator.validate()
                .then(function(bool) {
                    bool.should.be.Boolean();
                    done();
                });
        });

        // it('create account should call phone creator', function(done) {
        //     var creator = new Client.AccountPhoneCreator(session);
        //     creator.setPhone('+8613100000000')
        //     creator.setUsername(_.random(999999) + '.unexsiting')
        //     creator.setPhoneCallback(function() {
        //         throw new Error('test')
        //     })
        //     creator.create()
        //         .catch(function(e) {
        //             e.message.should.equal('test');
        //             done()
        //         })
        // })

        // it('create account should call phone creator and', function(done) {
        //     var creator = new Client.AccountPhoneCreator(session);
        //     creator.setPhone('+8613100000000');
        //     creator.setUsername(_.random(999999) + '.unexsiting');
        //     creator.setPhoneCallback(function() {
        //         return Promise.resolve(123456);
        //     });
        //     creator.create()
        //         .catch(function(e) {
        //             e.message.should.match(/valid/);
        //             done();
        //         });
        // });
    });

    describe('`AccountEmailCreator` class', function() {
        it('should not be problem to set email property', function() {
            var creator = new Client.AccountEmailCreator(session);
            creator.setEmail('test@test.com');
            should(function() {
                creator.setEmail('test@_žýáí§ů.com');
            }).throw(/not an valid email/);
        });

        it('should not be problem to check email', function(done) {
            var creator = new Client.AccountEmailCreator(session);
            creator.setEmail('instagram@instagram.com')
            creator.checkEmail()
                .then(function(json) {
                    json.available.should.equal(false);
                    done();
                });
        });


        it('should not be problem to validate', function(done) {
            var creator = new Client.AccountEmailCreator(session);
            var nick = _.random(999999) + '.unexsiting';
            creator.setEmail(nick + '@gmail.com');
            creator.setUsername(nick);
            creator.validate()
                .then(function() {
                    done();
                });
        });
    });

});
