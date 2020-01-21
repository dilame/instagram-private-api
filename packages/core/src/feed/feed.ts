import { classToPlain, Expose, plainToClassFromExist, serialize } from 'class-transformer';

export abstract class Feed<Response, Item> {
  /**
   * @description indicates whether feed reached the end or not.
   */
  @Expose()
  public hasMore: boolean = true;

  protected abstract set state(response: Response);

  protected abstract async request(...args: any[]): Promise<Response>;

  public abstract items(raw: Response): Item[];

  public async next() {
    const raw = await this.request();
    this.state = raw;
    const feed = this;
    return {
      raw,
      get items() {
        return feed.items(raw);
      },
    };
  }

  public serialize() {
    return serialize(this, { strategy: 'excludeAll' });
  }

  public deserialize(data: string): void {
    plainToClassFromExist(this, JSON.parse(data));
  }

  public toPlain() {
    return classToPlain(this, { strategy: 'excludeAll' });
  }

  [Symbol.asyncIterator]() {
    const feed = this;
    return {
      async next() {
        if (feed.hasMore) {
          const value = await feed.next();
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}
