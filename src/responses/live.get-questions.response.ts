export interface LiveGetQuestionsResponseRootObject {
  questions: LiveGetQuestionsResponseQuestionsItem[];
  status: string;
}
export interface LiveGetQuestionsResponseQuestionsItem {
  text: string;
  qid: string;
  source: string;
  user: LiveGetQuestionsResponseUser;
  story_sticker_text: string;
  timestamp: number;
}
export interface LiveGetQuestionsResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}
