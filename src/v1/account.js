const _ = require('lodash');
const Resource = require('./resource');
const Request = require('../request');
const Helpers = require('../helpers');
const camelKeys = require('camelcase-keys');
const Exceptions = require('./exceptions');

class Account extends Resource {
  static getById(session, id) {
    return new Request(session)
      .setMethod('GET')
      .setResource('userInfo', { id })
      .send()
      .then(data => new Account(session, data.user));
  }

  static search(session, username) {
    return session
      .getAccountId()
      .then(id => {
        const rankToken = Helpers.buildRankToken(id);
        return new Request(session)
          .setMethod('GET')
          .setResource('accountsSearch', {
            query: username,
            rankToken,
          })
          .send();
      })
      .then(data => _.map(data.users, user => new Account(session, user)));
  }

  static searchForUser(session, username) {
    return Account.search(session, username).then(accounts => {
      const account = _.find(
        accounts,
        account => account.params.username === username,
      );
      if (!account) throw new Exceptions.IGAccountNotFoundError();
      return account;
    });
  }

  static setProfilePicture(session, streamOrPath) {
    const stream = Helpers.pathToStream(streamOrPath);
    const request = new Request(session);
    return request
      .setMethod('POST')
      .setResource('changeProfilePicture')
      .generateUUID()
      .signPayload()
      .transform(opts => {
        opts.formData.profile_pic = {
          value: stream,
          options: {
            filename: 'profile_pic',
            contentType: 'image/jpeg',
          },
        };
        return opts;
      })
      .send()
      .then(json => new Account(session, json.user));
  }

  static setPrivacy(session, pri) {
    return new Request(session)
      .setMethod('POST')
      .setResource(pri ? 'setAccountPrivate' : 'setAccountPublic')
      .generateUUID()
      .signPayload()
      .send()
      .then(json => new Account(session, json.user));
  }

  static editProfile(session, settings) {
    settings = _.isObject(settings) ? settings : {};
    if (_.isString(settings.phoneNumber))
      settings.phone_number = settings.phoneNumber;
    if (_.isString(settings.fullName)) settings.first_name = settings.fullName;
    if (_.isString(settings.externalUrl))
      settings.external_url = settings.externalUrl;
    const pickData = o =>
      _.pick(
        o,
        'gender',
        'biography',
        'phone_number',
        'first_name',
        'external_url',
        'username',
        'email',
      );
    return new Request(session)
      .setMethod('GET')
      .setResource('currentAccount')
      .send()
      .then(json =>
        new Request(session)
          .setMethod('POST')
          .setResource('editAccount')
          .generateUUID()
          .setData(pickData(_.extend(json.user, settings)))
          .signPayload()
          .send(),
      )
      .then(json => {
        const account = new Account(session, json.user);
        return account.update();
      })
      .catch(e => {
        if (e && e.json && e.json.message && _.isArray(e.json.message.errors)) {
          throw new Exceptions.RequestError({
            message: e.json.message.errors.join('. '),
          });
        }
        throw e;
      });
  }

  static showProfile(session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('currentAccount')
      .send()
      .then(json => Account.prototype.parseParams(json.user));
  }

  parseParams(json) {
    const hash = camelKeys(json);
    hash.picture = json.profile_pic_url;
    hash.id = (json.pk || json.id || json.instagram_id).toString();
    return hash;
  }

  update() {
    const that = this;
    return Account.getById(this.session, this.id).then(account => {
      that._params = account.params;
      return that;
    });
  }

  setProfilePicture(streamOrPath) {
    const that = this;
    return Account.setProfilePicture(this.session, streamOrPath).then(user => {
      that._params.picture = user.params.picture;
      return that;
    });
  }

  setPrivacy(pri) {
    const that = this;
    return Account.setPrivacy(this.session, pri).then(user => {
      that._params.isPrivate = user.params.isPrivate;
      return that;
    });
  }

  editProfile(settings) {
    return Account.editProfile(this.session, settings || {});
  }

  showProfile() {
    return Account.showProfile(this.session);
  }
}

module.exports = Account;
