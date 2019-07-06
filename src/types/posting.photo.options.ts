export interface PostingUsertags {
  in: Array<{ user_id: number | string; position: [number, number] }>;
}

export interface PostingLocation {
  name: string;
  lat: number;
  lng: number;
  external_id_source: string;
  external_id: string;
  address: string;
}

export interface PostingPhotoOptions {
  file: Buffer;
  caption?: string;
  usertags?: PostingUsertags;
  location?: PostingLocation;
}
