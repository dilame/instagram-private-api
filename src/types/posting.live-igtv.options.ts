export interface PostingLiveIgtvOptions {
  file: Buffer;
  title: string;
  caption?: string;
  broadcastId: string;
  igtv_share_preview_to_feed?: '1' | '0';
  transcodeDelay?: number
}