export type TimelineFeedReason = 'pagination' | 'pull_to_refresh' | 'warm_start_fetch' | 'cold_start_fetch';

export interface TimelineFeedsOptions {
  reason?: TimelineFeedReason;
  recoveredFromCrash?: string;
  pushDisabled?: boolean;
  latestStoryPk?: string | number;
}
