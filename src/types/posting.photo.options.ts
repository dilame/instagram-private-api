export interface PostingUsertags {
  in: Array<{ user_id: number | string; position: [number, number] }>;
}

export interface PostingLocation {
  name: string;
  address: string;
  lat: number;
  lng: number;
  external_source: string;
  facebook_places_id: string;
}

export interface PostingPhotoOptions {
  file: Buffer;
  caption?: string;
  usertags?: PostingUsertags;
  location?: PostingLocation;
}
