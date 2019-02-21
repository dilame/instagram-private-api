import { plainToClass } from 'class-transformer';
import { User } from '../models/user';
import { Request } from '../core/request';
import { Helpers } from '../helpers';

const _ = require('lodash');
const Resource = require('./resource');
const Promise = require('bluebird');
const camelKeys = require('camelcase-keys');
const ThreadItem = require('./thread-item');
const Exceptions = require('../core/exceptions');

class Thread extends Resource {
  static approveAll (session) {
    return new Request(session)
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsApproveAll')
      .send();
  }

  static getById (session, id, cursor) {
    if (_.isEmpty(id)) throw new Error('`id` property is required!');
    return new Request(session)
      .setMethod('GET')
      .generateUUID()
      .setResource('threadsShow', {
        threadId: id,
        cursor,
      })
      .send()
      .then(json => new Thread(session, json.thread));
  }

  static configureText (session, users, text) {
    if (!_.isArray(users)) users = [users];
    const link_urls = Helpers.extractUrl(text);
    let endpoint = 'threadsBrodcastText';

    const payload = {
      recipient_users: JSON.stringify([users]),
      client_context: Helpers.generateUUID(),
    };

    if (link_urls) {
      payload.link_text = text;
      payload.link_urls = JSON.stringify(link_urls);
      endpoint = 'threadsBrodcastLink';
    } else {
      payload.text = text;
    }

    const request = new Request(session)
      .setMethod('POST')
      .generateUUID()
      .setResource(endpoint)
      .setData(payload)
      .send();
    return threadsWrapper(session, request);
  }

  static configurePhoto (session, users, upload_id) {
    if (!_.isArray(users)) users = [users];

    const payload = {
      recipient_users: JSON.stringify([users]),
      client_context: Helpers.generateUUID(),
      upload_id,
    };

    const request = new Request(session);
    return request
      .setMethod('POST')
      .setResource('threadsBrodcastPhoto')
      .generateUUID()
      .setData(payload)
      .send();

    return threadsWrapper(session, request);
  }

  static configureMediaShare (session, users, mediaId, text) {
    if (!_.isArray(users)) users = [users];
    const payload = {
      recipient_users: JSON.stringify([users]),
      client_context: Helpers.generateUUID(),
      media_id: mediaId,
    };
    if (_.isString(text)) payload.text = text;
    const request = new Request(session)
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastShare')
      .setData(payload)
      .send();
    return threadsWrapper(session, request);
  }

  static configureProfile (session, users, profileId, simpleFormat, text) {
    if (!_.isArray(users)) users = [users];
    const payload = {
      recipient_users: JSON.stringify([users]),
      simple_format: simpleFormat ? '1' : '0',
      profile_user_id: profileId,
      client_context: Helpers.generateUUID(),
    };
    if (_.isString(text)) payload.text = text;
    const request = new Request(session)
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastProfile')
      .setData(payload)
      .send();
    return threadsWrapper(session, request);
  }

  static configureHashtag (session, users, hashtag, simpleFormat, text) {
    if (!_.isArray(users)) users = [users];
    const payload = {
      recipient_users: JSON.stringify([users]),
      simple_format: simpleFormat ? '1' : '0',
      hashtag,
      client_context: Helpers.generateUUID(),
    };
    if (_.isString(text)) payload.text = text;
    const request = new Request(session)
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastHashtag')
      .setData(payload)
      .send();
    return threadsWrapper(session, request);
  }

  static recentRecipients (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('threadsRecentRecipients')
      .send()
      .then(json => ({
        recentRecipients: json.recent_recipients,
        expirationInterval: json.expiration_interval,
      }));
  }

  parseParams (json) {
    const hash = camelKeys(json);
    const that = this;
    hash.id = json.thread_id;
    if (_.isObject(json.image_versions2)) hash.images = json.image_versions2.candidates;
    hash.lastActivityAt = parseInt(json.last_activity_at / 1000) || null;
    hash.muted = !!json.muted;
    hash.title = json.thread_title;
    hash.itemsSeenAt = {};
    _.each(json.last_seen_at || [], (val, key) => {
      hash.itemsSeenAt[key] = {
        itemId: val.item_id,
        timestamp: parseInt(parseInt(val.timestamp) / 1000),
      };
    });
    hash.inviter = plainToClass(User, json.inviter);
    this.items = _.map(json.items, item => new ThreadItem(that.session, item));
    this.accounts = plainToClass(User, json.users);
    this.leftUsers = plainToClass(User, json.left_users);
    return hash;
  }

  // todo configure broadcast /configure location

  getParams () {
    const params = _.clone(this._params);
    params.accounts = _.map(this.accounts, 'params');
    params.items = _.map(this.items, 'params');
    params.inviter = params.inviter.params;
    return params;
  }

  seen () {
    const firstItem = _.first(this.items);
    if (!firstItem) throw new Exceptions.ThreadEmptyError();
    const that = this;
    return this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsSeen', {
        threadId: that.id,
        itemId: firstItem.id,
      })
      .setData({
        client_context: Helpers.generateUUID(),
      })
      .send()
      .then(data => ({
        unseenCount: data.unseen_count,
        unseenCountTimestamp: parseInt(data.unseenCountTimestamp / 1000),
      }));
  }

  approve () {
    const that = this;
    return this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsApprove', {
        threadId: that.id,
      })
      .send();
  }

  hide () {
    const that = this;
    return this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsHide', {
        threadId: that.id,
      })
      .send();
  }

  broadcastText (text) {
    const request = this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastText')
      .setData({
        thread_ids: `[${this.id}]`,
        client_context: Helpers.generateUUID(),
        text,
      })
      .send();
    return threadsWrapper(this.session, request);
  }

  broadcastMediaShare (mediaId, text) {
    const payload = {
      thread_ids: `[${this.id}]`,
      media_id: mediaId,
      client_context: Helpers.generateUUID(),
    };
    if (_.isString(text)) payload.text = text;
    const request = this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastShare')
      .setData(payload)
      .send();
    return threadsWrapper(this.session, request);
  }

  broadcastProfile (profileId, simpleFormat, text) {
    const payload = {
      thread_ids: `[${this.id}]`,
      simple_format: simpleFormat ? '1' : '0',
      profile_user_id: profileId,
      client_context: Helpers.generateUUID(),
    };
    if (_.isString(text)) payload.text = text;
    const request = this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastProfile')
      .setData(payload)
      .send();
    return threadsWrapper(this.session, request);
  }

  broadcastHashtag (hashtag, simpleFormat, text) {
    const payload = {
      thread_ids: `[${this.id}]`,
      simple_format: simpleFormat ? '1' : '0',
      hashtag,
      client_context: Helpers.generateUUID(),
    };
    if (_.isString(text)) payload.text = text;
    const request = this.request()
      .setMethod('POST')
      .generateUUID()
      .setResource('threadsBrodcastHashtag')
      .setData(payload)
      .send();
    return threadsWrapper(this.session, request);
  }
}

module.exports = Thread;

function mapPayload (session, payload) {
  return _.map(payload.threads, thread => new Thread(session, thread));
}

function threadsWrapper (session, promise) {
  return promise.then(json => {
    if (_.isArray(json.threads)) return mapPayload(session, json);
    if (_.isEmpty(json.thread_id)) throw new Error('Not sure how to map an thread!');
    // You cannot fetch thread id inmedietly after configure / broadcast
    return Promise.delay(1000)
      .then(() => Thread.getById(session, json.thread_id))
      .then(thread => [thread]);
  });
}
