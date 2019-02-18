import { plainToClass } from 'class-transformer';
import { User } from '../models/user';
import { Request } from '../core/request';
import * as _ from 'lodash';
import * as Resource from './resource';
import * as Exceptions from '../core/exceptions';

export class Relationship extends Resource {
  static get (session, accountId) {
    return new Request(session)
      .setMethod('GET')
      .setResource('friendshipShow', { id: accountId })
      .send()
      .then(data => {
        const relationship = new Relationship(session, data);
        relationship.setAccountId(accountId);
        return relationship;
      });
  }

  static pendingFollowers (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('friendshipPending')
      .generateUUID()
      .signPayload()
      .send()
      .then(data =>
        _.map(data.users, (data, key) => {
          const relationship = new Relationship(session, data);
          relationship.setAccountId(data.pk);
          return relationship;
        }),
      );
  }

  static approvePending (session, accountId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('friendshipPendingApprove', { id: accountId })
      .setData({
        user_id: accountId,
      })
      .generateUUID()
      .signPayload()
      .send();
  }

  static removeFollower (session, accountId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('friendshipRemoveFollower', { id: accountId })
      .setData({
        user_id: accountId,
      })
      .generateUUID()
      .signPayload()
      .send();
  }

  static getMany (session, accountIds) {
    return new Request(session)
      .setMethod('POST')
      .generateUUID()
      .setData({ user_ids: accountIds.join(',') })
      .setResource('friendshipShowMany')
      .send()
      .then(data =>
        _.map(data.friendship_statuses, (data, key) => {
          const relationship = new Relationship(session, data);
          relationship.setAccountId(key);
          return relationship;
        }),
      );
  }

  static create (session, accountId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('follow', { id: accountId })
      .generateUUID()
      .setData({ user_id: accountId })
      .signPayload()
      .send()
      .then(data => {
        const relationship = new Relationship(session, data.friendship_status);
        relationship.setAccountId(accountId);
        return relationship;
      })
      .catch(err => {
        if (err instanceof Exceptions.RequestError && err.message.includes('following the max limit')) {
          throw new Exceptions.TooManyFollowsError();
        } else {
          throw err;
        }
      });
  }

  static destroy (session, accountId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('unfollow', { id: accountId })
      .generateUUID()
      .setData({ user_id: accountId })
      .signPayload()
      .send()
      .then(data => {
        const relationship = new Relationship(session, data.friendship_status);
        relationship.setAccountId(accountId);
        return relationship;
      });
  }

  static autocompleteUserList (session) {
    return new Request(session)
      .setMethod('GET')
      .setResource('autocompleteUserList')
      .send()
      .then(json => {
        json.accounts = plainToClass(User, json.users);
        json.expires = parseInt(json.expires * 1000);
        return json;
      });
  }

  static getBootstrapUsers (session) {
    const surfaces = [
      'coefficient_direct_closed_friends_ranking',
      'coefficient_direct_recipients_ranking_variant_2',
      'coefficient_rank_recipient_user_suggestion',
      'coefficient_ios_section_test_bootstrap_ranking',
      'autocomplete_user_list',
    ];

    return new Request(session)
      .setMethod('GET')
      .setResource('getBootstrapUsers', {
        surfaces: encodeURIComponent(JSON.stringify(surfaces)),
      })
      .setBodyType('form')
      .send();
  }

  static block (session, accountId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('block', { id: accountId })
      .generateUUID()
      .setData({ user_id: accountId })
      .signPayload()
      .send()
      .then(data => {
        const relationship = new Relationship(session, data.friendship_status);
        relationship.setAccountId(accountId);
        return relationship;
      });
  }

  static unblock (session, accountId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('unblock', { id: accountId })
      .generateUUID()
      .setData({ user_id: accountId })
      .signPayload()
      .send()
      .then(data => {
        const relationship = new Relationship(session, data.friendship_status);
        relationship.setAccountId(accountId);
        return relationship;
      });
  }

  setAccountId (accountId) {
    this.accountId = parseInt(accountId);
  }

  getParams () {
    return _.defaults(
      {
        accountId: this.accountId,
      },
      this._params,
    );
  }

  approvePending () {
    return Relationship.approvePending(this.session, this.accountId);
  }

  removeFollower () {
    return Relationship.removeFollower(this.session, this.accountId);
  }

  block () {
    return Relationship.block(this.session, this.accountId);
  }

  unblock () {
    return Relationship.unblock(this.session, this.accountId);
  }
}
