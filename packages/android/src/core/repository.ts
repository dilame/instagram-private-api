import { IgApiClient } from './client';
import { Enumerable } from '@igpapi/core';

export abstract class Repository {
  @Enumerable(false)
  protected client: IgApiClient;
  constructor(client: IgApiClient) {
    this.client = client;
  }
}
