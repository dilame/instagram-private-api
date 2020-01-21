import { DirectThreadEntity, ProfileEntity } from '../entities';
import { inject } from 'tsyringe';
import DependencyContainer from 'tsyringe/dist/typings/types/dependency-container';

export class EntityFactory {
  constructor(@inject('IoC') private container: DependencyContainer) {}

  public directThread(id: string | string[]): DirectThreadEntity {
    const thread = this.container.resolve(DirectThreadEntity);
    if (id instanceof Array) {
      thread.userIds = id;
    } else {
      thread.threadId = id;
    }
    return thread;
  }

  public profile(pk: string): ProfileEntity {
    const thread = this.container.resolve(ProfileEntity);
    thread.pk = pk;
    return thread;
  }
}
