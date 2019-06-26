export interface DirectRepositoryGetPresenceResponseRootObject {
  /**
   * user_presence: {
   *   user_id: {
   *     is_active: boolean,
   *     last_activity_at_ms,
   *   },...
   * }
   */
  user_presence: any;
  status: string;
}
