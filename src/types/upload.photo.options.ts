export interface UploadPhotoOptions {
  uploadId?: string;
  file: Buffer;
  isSidecar?: boolean;
  waterfallId?: string;
}
