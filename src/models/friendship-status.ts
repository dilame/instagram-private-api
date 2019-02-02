import { BaseModel } from './base-model';

export class FriendshipStatus  extends BaseModel{
  muting: boolean;
  is_muting_reel: boolean;
  following: boolean;
  outgoing_request: boolean;
}
