import { Response } from './response';

export class FriendshipStatusResponse extends Response {
  muting: boolean;
  is_muting_reel: boolean;
  following: boolean;
  is_private: boolean;
  outgoing_request: boolean;
  incoming_request: boolean;
  is_bestie: boolean;
}
