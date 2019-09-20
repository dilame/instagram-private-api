export interface DirectThreadBroadcastPhotoOptions {
  file: Buffer;
  allowFullAspectRatio?: boolean;
  uploadId?: string;
}

export interface DirectThreadBroadcastVideoOptions {
  video: Buffer;
  uploadId?: string;
  sampled?: boolean;
}
