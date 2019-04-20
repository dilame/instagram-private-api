import { Repository } from '../core/repository';
import { DirectThreadRecord } from '../records';

export class DmService extends Repository {
  public thread(id: string): DirectThreadRecord {
    const thread = new DirectThreadRecord(this.client);
    thread.thread_id = id;
    return thread;
  }
}
