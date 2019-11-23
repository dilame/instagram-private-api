export interface StoryPollVotersFeedResponseRootObject {
  voter_info: StoryPollVotersFeedResponseVoter_info;
  status: string;
}
export interface StoryPollVotersFeedResponseVoter_info {
  poll_id: string;
  voters: StoryPollVotersFeedResponseVotersItem[];
  max_id: null;
  more_available: boolean;
  latest_poll_vote_time: number;
}
export interface StoryPollVotersFeedResponseVotersItem {
  user: StoryPollVotersFeedResponseUser;
  vote: number;
  ts: number;
}
export interface StoryPollVotersFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: StoryPollVotersFeedResponseFriendship_status;
  is_verified: boolean;
  latest_reel_media: number;
}
export interface StoryPollVotersFeedResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
