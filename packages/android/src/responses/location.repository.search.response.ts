import { StatusResponse } from './status.response';

export interface LocationRepositorySearchResponseRootObject extends StatusResponse {
  venues: LocationRepositorySearchResponseVenuesItem[];
  request_id: string;
  rank_token: string;
}

export interface LocationRepositorySearchResponseVenuesItem {
  name: string;
  external_id: string;
  external_id_source: string;
  lat: number;
  lng: number;
  address: string;
  minimum_age: number;
}
