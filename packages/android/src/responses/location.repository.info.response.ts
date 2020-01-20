import { StatusResponse } from './status.response';

export interface LocationRepositoryInfoResponseRootObject extends StatusResponse {
  location: LocationRepositoryInfoResponseLocation;
}

export interface LocationRepositoryInfoResponseLocation {
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
