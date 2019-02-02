import { BaseModel } from './_base-model';

export class FriendshipStatus extends BaseModel {
  muting: boolean;
  is_muting_reel: boolean;
  following: boolean;
  is_private: boolean;
  outgoing_request: boolean;
  incoming_request: boolean;
  is_bestie: boolean;
}
