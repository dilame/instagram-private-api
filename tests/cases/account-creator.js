const should = require('should');
const { V1: Client, Device } = require('../../dist');
const _ = require('lodash');

describe('`AccountCreator` class', () => {
  let session;
  before(() => {
    const device = new Device({ username: 'somenotExistingUser' });
    const storage = new Client.CookieFileStorage(
      `${__dirname}/../cookies/somenotExistingUser.json`,
    );
    session = new Client.Session(device, storage);
  });

  it('should not be problem to set username for `AccountCreator`', () => {
    const creator = new Client.AccountCreator(session, 'email');
    creator.setUsername('hello');
    creator.username.should.be.equal('hello');
    should(() => {
      creator.setUsername('`@#$~^&*{}');
    }).throw(/not an valid username/);
  });

  it('should check username', done => {
    const creator = new Client.AccountCreator(session, 'email');
    creator.checkUsername('hello').then(json => {
      json.error.should.match(/is not available/);
      done();
    });
  });

  it('should suggest usernames', done => {
    const creator = new Client.AccountCreator(session, 'email');
    creator.usernameSuggestions('hello').then(json => {
      json.suggestions_with_metadata.suggestions.should.be.Array();
      done();
    });
  });

  it('should validate username', done => {
    const creator = new Client.AccountCreator(session, 'email');
    creator.setUsername(`${_.random(999999)}.unexsiting`);
    creator.validateUsername().then(bool => {
      bool.should.be.Boolean();
      done();
    });
  });

  it('should not be problem to set property password', () => {
    const creator = new Client.AccountCreator(session, 'email');
    creator.setPassword(`${_.random(999999)}.unexsiting`);
    should(() => {
      creator.setPassword('1');
    }).throw(/be at least 6/);
  });

  it('should validate username with suggestions', done => {
    const creator = new Client.AccountCreator(session, 'email');
    creator.setUsername('instagram');
    creator
      .validateUsername()
      .catch(Client.Exceptions.InvalidUsername, e => {
        e.json.suggestions.should.be.Array();
        done();
      });
  });

  describe('`AccountPhoneCreator` class', () => {
    it('should not be problem to set phone property', () => {
      const creator = new Client.AccountPhoneCreator(session);
      creator.setPhone('123456');
      creator.phone.should.be.equal('123456');
      creator.setPhone('+21(345)123456');
      should(() => {
        creator.setPhone('omf');
      }).throw(/not a valid phone/);
    });

    it('should not be problem to validate', done => {
      const creator = new Client.AccountPhoneCreator(session);
      creator.setPhone('123456');
      creator.setUsername(`${_.random(999999)}.unexsiting`);
      should(() => {
        creator.validate();
      }).throw(/setPhoneCallback/);
      creator.setPhoneCallback(() => {});
      creator.validate().then(bool => {
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

  describe('`AccountEmailCreator` class', () => {
    it('should not be problem to set email property', () => {
      const creator = new Client.AccountEmailCreator(session);
      creator.setEmail('test@test.com');
      should(() => {
        creator.setEmail('test@_žýáí§ů.com');
      }).throw(/not an valid email/);
    });

    it('should not be problem to check email', done => {
      const creator = new Client.AccountEmailCreator(session);
      creator.setEmail('instagram@instagram.com');
      creator.checkEmail().then(json => {
        json.available.should.equal(false);
        done();
      });
    });

    it('should not be problem to validate', done => {
      const creator = new Client.AccountEmailCreator(session);
      const nick = `${_.random(999999)}.unexsiting`;
      creator.setEmail(`${nick}@gmail.com`);
      creator.setUsername(nick);
      creator.validate().then(() => {
        done();
      });
    });
  });
});
