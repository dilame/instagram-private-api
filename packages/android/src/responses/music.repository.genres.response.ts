export interface MusicRepositoryGenresResponseRootObject {
  items: MusicRepositoryGenresResponseItemsItem[];
  status: string;
}
export interface MusicRepositoryGenresResponseItemsItem {
  genre: MusicRepositoryGenresResponseGenre;
}
export interface MusicRepositoryGenresResponseGenre {
  id: string;
  name: string;
  cover_artwork_uri: string;
}
