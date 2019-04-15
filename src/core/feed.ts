import { Observable } from 'rxjs';
import { AttemptOptions, retry } from '@lifeomic/attempt';
import * as Chance from 'chance';
import { IgResponseError } from '../errors';
import { Repository } from './repository';

export abstract class Feed<T = any> extends Repository {
  public attemptOptions: Partial<AttemptOptions<any>> = {
    delay: 60000,
    factor: 1.5,
    maxAttempts: 10,
    minDelay: 60000,
    maxDelay: 300000,
    jitter: true,
  };
  public stream$ = new Observable<T[]>(observer => {
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
  protected cursor = null;
  protected moreAvailable = null;
  protected chance = new Chance();
  protected rankToken = this.chance.guid();

  abstract async request();

  abstract async items(): Promise<T[]>;

  setCursor(cursor) {
    this.cursor = cursor;
  }

  getCursor() {
    return this.cursor;
  }

  isMoreAvailable() {
    return !!this.moreAvailable;
  }
}
