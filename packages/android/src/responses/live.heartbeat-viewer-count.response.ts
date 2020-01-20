export interface LiveHeartbeatViewerCountResponseRootObject {
  viewer_count: number;
  broadcast_status: string;
  cobroadcaster_ids: any[];
  offset_to_video_start: number;
  total_unique_viewer_count: number;
  is_top_live_eligible: number;
  status: string;
}
