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

export interface DirectThreadBroadcastStoryOptions {
  file: Buffer;
  viewMode?: 'replayable' | 'once' | string;
  replyType?: 'story' | string;
}
