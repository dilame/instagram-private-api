export interface IgtvWriteSeenStateOptions {
  impressions?: { [x: string]: { view_progress_s: number } };
  grid_impressions?: string[];
}
