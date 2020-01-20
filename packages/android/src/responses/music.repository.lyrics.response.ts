export interface MusicRepositoryLyricsResponseRootObject {
  lyrics: MusicRepositoryLyricsResponseLyrics;
  status: string;
}
export interface MusicRepositoryLyricsResponseLyrics {
  phrases: MusicRepositoryLyricsResponsePhrasesItem[];
}
export interface MusicRepositoryLyricsResponsePhrasesItem {
  start_time_in_ms: number;
  phrase: string;
}
