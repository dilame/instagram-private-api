import { Observable } from 'rxjs';
import { classToPlain, Expose, plainToClassFromExist, serialize } from 'class-transformer';
import { AttemptOptions, retry } from '@lifeomic/attempt';
import * as Chance from 'chance';
import { IgResponseError } from '../errors';
import { Repository } from './repository';

export abstract class Feed<Response = any, Item = any> extends Repository {
  public attemptOptions: Partial<AttemptOptions<any>> = {
    delay: 60000,
    factor: 1.5,
    maxAttempts: 10,
    minDelay: 60000,
    maxDelay: 300000,
    jitter: true,
  };
  public stream$ = new Observable<Item[]>(observer => {
    let subscribed = true;
    process.nextTick(async () => {
      do {
        try {
          await retry(
            async () => {
              const items = await this.items();
              observer.next(items);
            },
            {
              handleError(error, context) {
                // If instagram just tells us to wait - we are waiting.
                if (
                  error instanceof IgResponseError &&
                  error.response.statusCode === 400 &&
                  error.response.body.status === 'fail'
                ) {
                  return;
                } else {
                  context.abort();
                }
              },
              ...this.attemptOptions,
            },
          );
        } catch (e) {
          observer.error(e);
        }
      } while (this.isMoreAvailable() && subscribed);
      observer.complete();
    });
    return () => (subscribed = false);
  });
  @Expose()
  protected moreAvailable: boolean;
  protected chance = new Chance();
  @Expose()
  protected rankToken = this.chance.guid();

  protected abstract set state(response: Response);

  abstract async request(): Promise<Response>;

  abstract async items(): Promise<Array<Item>>;

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
