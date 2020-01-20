export interface StoryQuestionResponsesFeedResponseRootObject {
  responder_info: StoryQuestionResponsesFeedResponseResponder_info;
  status: string;
}
export interface StoryQuestionResponsesFeedResponseResponder_info {
  question_id: string;
  question: string;
  question_type: string;
  background_color: string;
  text_color: string;
  responders: StoryQuestionResponsesFeedResponseRespondersItem[];
  max_id: null;
  more_available: boolean;
  question_response_count: number;
  unanswered_response_count: number;
  latest_question_response_time: number;
}
export interface StoryQuestionResponsesFeedResponseRespondersItem {
  response: string;
  has_shared_response: boolean;
  id: string;
  user: StoryQuestionResponsesFeedResponseUser;
  ts: number;
}
export interface StoryQuestionResponsesFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
