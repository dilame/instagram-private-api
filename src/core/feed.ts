import { Observable } from 'rxjs';
import { classToPlain, Expose, plainToClassFromExist, serialize } from 'class-transformer';
import { AttemptOptions, retry } from '@lifeomic/attempt';
import * as Chance from 'chance';
import { IgResponseError } from '../errors';
import { Repository } from './repository';
import { Enumerable } from '../decorators';

export abstract class Feed<Response = any, Item = any> extends Repository {
  public attemptOptions: Partial<AttemptOptions<any>> = {
    delay: 60000,
    factor: 1.5,
    maxAttempts: 10,
    minDelay: 60000,
    maxDelay: 300000,
    jitter: true,
  };
  public get items$() {
    return this.observable();
  }
  public observable(semaphore?: () => Promise<any>, attemptOptions?: Partial<AttemptOptions<any>>) {
    return new Observable<Item[]>(observer => {
      let subscribed = true;
      process.nextTick(async () => {
        do {
          try {
            await retry(
              async () => {
                const items = await this.items();
                observer.next(items);
                if (typeof semaphore === 'function') {
                  await semaphore();
                }
              },
              {
                handleError(error, context) {
                  // If instagram just tells us to wait - we are waiting.
                  if (
                    error instanceof IgResponseError &&
                    [400, 429, 500, 502].includes(error.response.statusCode) &&
                    subscribed
                  ) {
                    return;
                  } else {
                    context.abort();
                  }
                },
                ...(attemptOptions || this.attemptOptions),
              },
            );
          } catch (e) {
            observer.error(e);
          }
        } while (this.isMoreAvailable() && subscribed);
        observer.complete();
      });
      return function unsubscribe() {
        subscribed = false;
      };
    });
  }
  @Expose()
  protected moreAvailable: boolean;
  @Enumerable(false)
  protected chance = new Chance();
  @Expose()
  protected rankToken = this.chance.guid();

  protected abstract set state(response: Response);

  abstract request(...args: any[]): Promise<Response>;

  abstract items(): Promise<Item[]>;

  public serialize() {
    return serialize(this, { strategy: 'excludeAll' });
  }

  public deserialize(data: string): void {
    plainToClassFromExist(this, JSON.parse(data));
  }

  public toPlain() {
    return classToPlain(this, { strategy: 'excludeAll' });
  }

  public isMoreAvailable() {
    return !!this.moreAvailable;
  }
}
