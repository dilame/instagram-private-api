import { IgApiClient } from '../client';

export abstract class InstagramRepository {
  constructor(protected client: IgApiClient) {}
}
