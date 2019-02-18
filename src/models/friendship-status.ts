import { AbstractModel } from './abstract.model';

export class FriendshipStatus extends AbstractModel {
  muting: boolean;
  is_muting_reel: boolean;
  following: boolean;
  is_private: boolean;
  outgoing_request: boolean;
  incoming_request: boolean;
  is_bestie: boolean;
}
