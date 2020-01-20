export interface DirectThreadBroadcastPhotoOptions {
  file: Buffer;
  allowFullAspectRatio?: boolean;
  uploadId?: string;
}

export interface DirectThreadBroadcastVideoOptions {
  video: Buffer;
  uploadId?: string;
  sampled?: boolean;
  transcodeDelay?: number;
}

export interface DirectThreadBroadcastStoryOptions {
  viewMode?: 'replayable' | 'once' | string;
  replyType?: 'story' | string;
  uploadId?: number;
}

// gets directly sent to PublishService
export interface DirectThreadBroadcastPhotoStoryOptions extends DirectThreadBroadcastStoryOptions {
  file: Buffer;
}

// gets directly sent to PublishService
export interface DirectThreadBroadcastVideoStoryOptions extends DirectThreadBroadcastStoryOptions {
  video: Buffer;
  coverImage: Buffer;
}

export interface DirectThreadBroadcastVoiceOptions {
  waveformSamplingFrequencyHz?: number;
  waveform?: number[];
  file: Buffer;
  uploadId?: string;
  transcodeDelay?: number;
}
