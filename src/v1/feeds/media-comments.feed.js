const _ = require('lodash');
import { BaseFeed } from './_base.feed';

const Exceptions = require('../../exceptions');
const { Request } = require('../../request');
const Comment = require('../comment');

class MediaCommentsFeed extends BaseFeed {
  constructor (session, mediaId) {
    super(...arguments);
    this.mediaId = mediaId;
    this.cursorType = 'minId';
  }

  setCursor (cursor) {
    this.cursor = encodeURIComponent(cursor);
  }

  get () {
    const that = this;
    const resource = { mediaId: this.mediaId };

    resource[this.cursorType] = this.getCursor();
    this.cursorType === 'minId' ? (resource['maxId'] = null) : (resource['minId'] = null);

    console.log(resource);
    return new Request(that.session)
      .setMethod('GET')
      .setResource('mediaComments', resource)
      .send()
      .then(data => {
        data.next_max_id ? (that.cursorType = 'maxId') : (that.cursorType = 'minId');

        that.cursorType === 'minId'
          ? (that.moreAvailable = data.has_more_headload_comments && !!data.next_min_id)
          : (that.moreAvailable = data.has_more_comments && !!data.next_max_id);

        that.iteration = that.iteration++;

        if (that.moreAvailable) {
          that.cursorType === 'minId' ? that.setCursor(data.next_min_id) : that.setCursor(data.next_max_id);
        }

        return _.map(data.comments, comment => {
          comment.media_id = that.mediaId;
          return new Comment(that.session, comment);
        });
      })
      .catch(reason => {
        if (reason.json.message === 'Media is unavailable') throw new Exceptions.MediaUnavailableError();
        else throw reason;
      });
  }
}

module.exports = MediaCommentsFeed;
