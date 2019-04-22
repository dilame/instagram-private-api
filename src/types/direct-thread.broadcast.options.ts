export interface DirectThreadBroadcastOptions {
  threadIds?: Array<string | number> | string | number;
  userIds?: Array<string | number> | string | number;
  item: string;
  form?: { [x: string]: any };
}
