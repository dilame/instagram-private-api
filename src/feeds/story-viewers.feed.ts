import { AbstractFeed } from './abstract.feed';
import { Request } from '../core/request';
import { plainToClass } from 'class-transformer';
import { User } from '../models/user';

// Only works with the stories of the logged user
export class StoryViewersFeed extends AbstractFeed<User> {
  constructor(session, public mediaId) {
    super(session);
  }

  async get() {
    const data = await new Request(this.session)
      .setMethod('GET')
      .setResource('storyViewers', {
        mediaId: this.mediaId,
        maxId: this.getCursor(),
      })
      .send();
    const nextMaxId = data.next_max_id ? data.next_max_id.toString() : data.next_max_id;
    this.moreAvailable = !!nextMaxId;
    if (this.moreAvailable) this.setCursor(nextMaxId);
    return plainToClass(User, data.users);
  }
}
