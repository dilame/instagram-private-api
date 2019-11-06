export interface StoryResponseOptions {
  client_context?: string;
  mutation_token?: string;
}

export interface StoryTextQuestionResponse extends StoryResponseOptions {
  response: string;
}

export interface StoryMusicQuestionResponse extends StoryResponseOptions {
  audio_asset_id: string;
  music_browse_session_id?: string;
}
