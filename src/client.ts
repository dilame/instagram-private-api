import { State, Request } from './core';
import { AuthRepository } from './repositories/auth.repository';
import { FeedFactory } from './feeds/feed.factory';

export class IgApiClient {
  public state = new State();
  public request = new Request(this);
  public auth = new AuthRepository(this);
  public feed = new FeedFactory(this);
  constructor() {}
}
