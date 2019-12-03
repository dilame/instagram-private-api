export interface StoryQuizParticipantsFeedResponseRootObject {
  participant_info: StoryQuizParticipantsFeedResponseParticipant_info;
  status: string;
}
export interface StoryQuizParticipantsFeedResponseParticipant_info {
  quiz_id: string;
  participants: StoryQuizParticipantsFeedResponseParticipantsItem[];
  max_id: null;
  more_available: boolean;
}
export interface StoryQuizParticipantsFeedResponseParticipantsItem {
  user: StoryQuizParticipantsFeedResponseUser;
  answer: number;
  ts: number;
}
export interface StoryQuizParticipantsFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  latest_reel_media: number;
}
