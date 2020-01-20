export interface FbsearchRepositoryPlacesResponseRootObject {
  items: FbsearchRepositoryPlacesResponseItemsItem[];
  has_more: boolean;
  rank_token: string;
  status: string;
}
export interface FbsearchRepositoryPlacesResponseItemsItem {
  location: FbsearchRepositoryPlacesResponseLocation;
  title: string;
  subtitle: string;
  media_bundles: any[];
  header_media: FbsearchRepositoryPlacesResponseHeader_media;
}
export interface FbsearchRepositoryPlacesResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}
export interface FbsearchRepositoryPlacesResponseHeader_media {}
