import { Response } from './response';

export class ImageVersionResponse extends Response {
  width: number;
  height: number;
  url: string;
}
