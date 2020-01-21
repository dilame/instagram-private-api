import { classToPlain, Expose, plainToClassFromExist, serialize } from 'class-transformer';
import * as Chance from 'chance';
import { Enumerable } from '../decorators';

export abstract class Feed<Response, Item> {
  /**
   * @description indicates whether feed reached the end or not.
   */
  @Expose()
  public done: boolean;
  @Enumerable(false)
  protected chance = new Chance();
  @Expose()
  protected rankToken = this.chance.guid();

  protected abstract set state(response: Response);

  abstract async request(...args: any[]): Promise<Response>;

  abstract items(raw: Response): Item[];

  public async next() {
    const raw = await this.request();
    this.state = raw;
    return {
      raw,
      get items() {
        return this.items(raw);
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

  public isMoreAvailable() {
    return !!this.done;
  }
}
