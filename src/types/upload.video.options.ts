export interface UploadVideoOptions {
  video: Buffer;
  uploadId?: string;
  duration: number;
  width: number;
  height: number;
  isSidecar?: boolean;
  forAlbum?: boolean;
  isDirect?: boolean;
  mediaType?: string;
  forDirectStory?: boolean;
}
