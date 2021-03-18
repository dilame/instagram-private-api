import { Repository } from './repository';
import { DirectThreadEntity, ProfileEntity } from '../entities';
import { DirectThreadFeedResponseThread } from 'src/responses';

export class EntityFactory extends Repository {
  public directThread(threadResp: DirectThreadFeedResponseThread): DirectThreadEntity {
    const thread = new DirectThreadEntity(this.client);
    thread.userIds = threadResp.users.map(user => user.username);
    thread.threadId = threadResp.thread_id;
    return thread;
  }

  public profile(pk: string): ProfileEntity {
    const thread = new ProfileEntity(this.client);
    thread.pk = pk;
    return thread;
  }
}
