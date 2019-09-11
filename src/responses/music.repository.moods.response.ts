export interface MusicRepositoryMoodsResponseRootObject {
  items: MusicRepositoryMoodsResponseItemsItem[];
  status: string;
}
export interface MusicRepositoryMoodsResponseItemsItem {
  mood: MusicRepositoryMoodsResponseMood;
}
export interface MusicRepositoryMoodsResponseMood {
  id: string;
  name: string;
  cover_artwork_uri: string;
}
