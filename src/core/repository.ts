import { IgApiClient } from './client';

export abstract class Repository {
  constructor(protected client: IgApiClient) {}
}
