export interface StorySliderVotersFeedResponseResponseRootObject {
  voter_info: StorySliderVotersFeedResponseResponseVoter_info;
  status: string;
}
export interface StorySliderVotersFeedResponseResponseVoter_info {
  slider_id: string;
  voters: StorySliderVotersFeedResponseResponseVotersItem[];
  max_id: null;
  more_available: boolean;
  latest_slider_vote_time: number;
}
export interface StorySliderVotersFeedResponseResponseVotersItem {
  user: StorySliderVotersFeedResponseResponseUser;
  vote: number;
  ts: number;
}
export interface StorySliderVotersFeedResponseResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: StorySliderVotersFeedResponseResponseFriendship_status;
  is_verified: boolean;
}
export interface StorySliderVotersFeedResponseResponseFriendship_status {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
