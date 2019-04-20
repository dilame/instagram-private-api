export interface DirectThreadRepositoryBroadcastResponseRootObject {
  action: string;
  status_code: string;
  payload: DirectThreadRepositoryBroadcastResponsePayload;
  status: string;
}
export interface DirectThreadRepositoryBroadcastResponsePayload {
  client_context: string;
  item_id: string;
  timestamp: string;
  thread_id: string;
}
