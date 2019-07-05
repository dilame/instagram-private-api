import { XOR } from 'ts-xor';

interface ExistingThreadOptions {
  threadIds: Array<string | number> | string | number;
}

interface CreateThreadOptions {
  userIds: Array<string | number> | string | number;
}

interface DirectTreadBroadcastBaseOptions {
  item: string;
  form?: { [x: string]: any };
}

export type DirectThreadBroadcastOptions = DirectTreadBroadcastBaseOptions &
  XOR<ExistingThreadOptions, CreateThreadOptions>;
