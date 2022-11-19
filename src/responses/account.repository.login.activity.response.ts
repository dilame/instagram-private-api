export interface AccountRepositoryLoginActivityResponseRootObject {
  sessions: AccountRepositoryLoginActivityResponseSession[];
  suspicious_logins: AccountRepositoryLoginActivityResponseSuspiciousLogin[];
  status: string;
}
export interface AccountRepositoryLoginActivityResponseSession {
  id: string;
  location: string;
  latitude: number;
  longitude: number;
  device: string;
  timestamp: number;
  login_timestamp: number;
  is_current: boolean;
  login_id: string;
  user_agent: string;
  ip_address: string;
  device_id: string;
  device_id_uuid: string;
  family_device_id: string;
}

export interface AccountRepositoryLoginActivityResponseSuspiciousLogin {
  id: string;
  location: string;
  latitude: number;
  longitude: number;
  device: string;
  timestamp: number;
  user_agent: string;
  ip_address: string;
}
