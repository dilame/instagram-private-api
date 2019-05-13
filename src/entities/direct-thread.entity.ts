import * as urlRegex from 'url-regex';
import { Entity } from '../core/entity';
import { DirectThreadBroadcastPhotoOptions } from '../types/direct-thread.broadcast-photo.options';
import { DirectThreadBroadcastOptions } from '../types/direct-thread.broadcast.options';

export class DirectThreadEntity extends Entity {
  threadId: string = null;
  userIds: string[] = null;
  public async broadcastText(text: string) {
    const urls = text.match(urlRegex({ strict: false }));
    if (urls instanceof Array) {
      return this.broadcastLink(text, urls);
    }
    return await this.broadcast({
      item: 'text',
      form: {
        text,
      },
    });
  }
  public async broadcastLink(link_text: string, link_urls: string[]) {
    return await this.broadcast({
      item: 'link',
      form: {
        link_text,
        link_urls: JSON.stringify(link_urls),
      },
    });
  }

  public async broadcastPhoto(options: DirectThreadBroadcastPhotoOptions) {
    const { upload_id } = await this.client.upload.photo({
      uploadId: options.uploadId,
      file: options.file,
    });
    return await this.broadcast({
      item: 'configure_photo',
      form: {
        allow_full_aspect_ratio: options.allowFullAspectRatio || true,
        upload_id,
      },
    });
  }
  private async broadcast(options: Partial<DirectThreadBroadcastOptions>) {
    if (this.threadId === null && this.userIds === null) {
      throw new Error('DirectThread: No recipients set');
    }
    const baseParams = {
      item: options.item,
      form: options.form,
    };
    let params;
    if (this.threadId) {
      params = Object.assign(baseParams, { threadIds: this.threadId });
    } else {
      params = Object.assign(baseParams, { userIds: this.userIds });
    }
    const response = await this.client.directThread.broadcast(params);
    this.threadId = response.payload.thread_id;
    this.userIds = null;
    return response.payload;
  }
}
