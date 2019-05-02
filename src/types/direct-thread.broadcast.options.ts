import { XOR } from 'ts-xor';

type ExistingThreadOptions = {
  threadIds: Array<string | number> | string | number;
};
type CreateThreadOptions = {
  userIds: Array<string | number> | string | number;
};

type DirectTreadBroadcastBaseOptions = {
  item: string;
  form?: { [x: string]: any };
};

export type DirectThreadBroadcastOptions = DirectTreadBroadcastBaseOptions &
  XOR<ExistingThreadOptions, CreateThreadOptions>;
