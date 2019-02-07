export interface IDevicePayload {
  android_release: string;
  model: string;
  android_version: string;
  manufacturer: string;
}

export interface IAppCredentials {
  SIG_KEY: string;
  SIG_VERSION: string;
  VERSION: string;
  VERSION_CODE: string;
  FB_ANALYTICS_APPLICATION_ID: string;
  LANGUAGE: string;
}
