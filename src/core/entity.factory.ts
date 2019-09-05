import { Repository } from './repository';
import { DirectThreadEntity, ProfileEntity } from '../entities';
import { DirectInboxFeedResponseThreadsItem } from '../responses';
import { plainToClassFromExist } from 'class-transformer';

export class EntityFactory extends Repository {
  public directThread(id: string | string[]): DirectThreadEntity {
    const thread = new DirectThreadEntity(this.client);
    if (id instanceof Array) {
      thread.userIds = id;
    } else {
      thread.threadId = id;
    }
    return thread;
  }

  public directThreadFromResponse(responseItem: DirectInboxFeedResponseThreadsItem): DirectThreadEntity {
    return plainToClassFromExist(this.directThread(responseItem.thread_id), responseItem);
  }

  public profile(pk: string): ProfileEntity {
    const thread = new ProfileEntity(this.client);
    thread.pk = pk;
    return thread;
  }
}
