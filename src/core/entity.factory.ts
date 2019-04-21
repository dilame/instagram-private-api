import { Repository } from './repository';
import { DirectThreadEntity } from '../entities';

export class EntityFactory extends Repository {
  public directThread(id: string): DirectThreadEntity {
    const thread = new DirectThreadEntity(this.client);
    thread.thread_id = id;
    return thread;
  }
}
