import { Entity } from '../core/entity';
import { LiveRtmpSettings } from '../types/live.obs-settings';

export class LiveEntity extends Entity {
  public static getUrlAndKey(info: { upload_url: string; broadcast_id: string }): LiveRtmpSettings {
    const parts = info.upload_url.split(new RegExp(info.broadcast_id));
    return { stream_url: parts[0], stream_key: info.broadcast_id + parts[1] };
  }
}
