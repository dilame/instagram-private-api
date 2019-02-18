import { plainToClass } from 'class-transformer';
import { User } from '../models/user';
import { Request } from '../core/request';

const Resource = require('./resource');
const _ = require('lodash');
const crypto = require('crypto');
const camelKeys = require('camelcase-keys');

class Comment extends Resource {
  static create (session, mediaId, text) {
    return new Request(session)
      .setMethod('POST')
      .setResource('comment', { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        src: 'profile',
        comment_text: text,
        idempotence_token: crypto
          .createHash('md5')
          .update(text)
          .digest('hex'),
      })
      .signPayload()
      .send()
      .then(data => new Comment(session, data.comment));
  }

  static delete (session, mediaId, commentId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('commentDelete', { id: mediaId, commentId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        src: 'profile',
        idempotence_token: crypto
          .createHash('md5')
          .update(commentId)
          .digest('hex'),
      })
      .signPayload()
      .send()
      .then(data => data);
  }

  static bulkDelete (session, mediaId, commentIds) {
    return new Request(session)
      .setMethod('POST')
      .setResource('commentBulkDelete', { id: mediaId })
      .generateUUID()
      .setData({
        media_id: mediaId,
        comment_ids_to_delete: commentIds.join(','),
        src: 'profile',
        idempotence_token: crypto
          .createHash('md5')
          .update(commentIds.join(','))
          .digest('hex'),
      })
      .signPayload()
      .send()
      .then(data => data);
  }

  static like (session, commentId) {
    return new Request(session)
      .setMethod('POST')
      .setResource('commentLike', { id: commentId })
      .generateUUID()
      .signPayload()
      .send()
      .then(data => data);
  }

  parseParams (json) {
    const hash = camelKeys(json);
    hash.created = json.created_at;
    hash.status = (json.status || 'unknown').toLowerCase();
    hash.id = (json.pk || json.id).toString();
    this.account = plainToClass(User, json.user);
    return hash;
  }

  account () {
    return this.account;
  }

  getParams () {
    return _.defaults(
      {
        account: this.account.params,
      },
      this._params,
    );
  }
}

module.exports = Comment;
