import { InstagramResponse } from './instagram.response';

export class ImageVersionResponse extends InstagramResponse {
  width: number;
  height: number;
  url: string;
}
