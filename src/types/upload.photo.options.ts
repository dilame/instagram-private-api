import { ReadStream } from 'fs';

export interface UploadPhotoOptions {
  uploadId?: string;
  file: ReadStream;
}
