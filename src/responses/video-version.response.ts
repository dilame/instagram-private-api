import { ImageVersionResponse } from './image-version.response';

export class VideoVersionResponse extends ImageVersionResponse {
  id: string;
  type: number;
}
