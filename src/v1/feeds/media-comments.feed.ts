import { plainToClass } from 'class-transformer';
import { BaseFeed } from './_base.feed';
import { Session } from '../../session';
import { Comment } from '../../models/comment';
import { Request } from '../../request';
import { MediaUnavailableError } from '../../exceptions';

class MediaCommentsFeed extends BaseFeed {
  cursorType = 'minId';

  constructor(session: Session, public mediaId) {
    super(session);
  }

  setCursor(cursor) {
    this.cursor = encodeURIComponent(cursor);
  }

  get() {
    const resource = { mediaId: this.mediaId };

    resource[this.cursorType] = this.getCursor();
    this.cursorType === 'minId' ? (resource['maxId'] = null) : (resource['minId'] = null);
    return new Request(this.session)
      .setMethod('GET')
      .setResource('mediaComments', resource)
      .send()
      .then(data => {
        data.next_max_id ? (this.cursorType = 'maxId') : (this.cursorType = 'minId');

        this.cursorType === 'minId'
          ? (this.moreAvailable = data.has_more_headload_comments && !!data.next_min_id)
          : (this.moreAvailable = data.has_more_comments && !!data.next_max_id);

        this.iteration = this.iteration++;

        if (this.moreAvailable) {
          this.cursorType === 'minId' ? this.setCursor(data.next_min_id) : this.setCursor(data.next_max_id);
        }
        return plainToClass(Comment, data.comments);
      })
      .catch(reason => {
        if (reason.json.message === 'Media is unavailable') throw new MediaUnavailableError();
        else throw reason;
      });
  }
}

module.exports = MediaCommentsFeed;
