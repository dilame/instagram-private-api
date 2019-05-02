import { Repository } from './repository';
import { DirectThreadEntity } from '../entities';
import { ProfileEntity } from '../entities/profile.entity';

export class EntityFactory extends Repository {
  public directThread(id: string): DirectThreadEntity {
    const thread = new DirectThreadEntity(this.client);
    thread.thread_id = id;
    return thread;
  }
  public profile(pk: string): ProfileEntity {
    const thread = new ProfileEntity(this.client);
    thread.pk = pk;
    return thread;
  }
}
