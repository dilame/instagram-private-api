export interface DirectThreadRepositoryBroadcastResponseRootObject {
  action: string;
  status_code: string;
  payload: DirectThreadRepositoryBroadcastResponsePayload;
  message_metadata: DirectThreadRepositoryBroadcastResponseMessage_metadata[];
  status: string;
}
export interface DirectThreadRepositoryBroadcastResponseMessage_metadata {
  client_context: string;
  item_id: string;
  timestamp: string;
  thread_id: string;
  participant_ids: string[];
}
export interface DirectThreadRepositoryBroadcastResponsePayload {
  client_context: string;
  item_id: string;
  timestamp: string;
  thread_id: string;
}
