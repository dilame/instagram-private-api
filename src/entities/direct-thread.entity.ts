import { Entity } from '../core/entity';
import { DirectThreadBroadcastPhotoOptions } from '../types/direct-thread.broadcast-photo.options';

export class DirectThreadEntity extends Entity {
  thread_id: string;
  public async broadcastText(text: string) {
    return await this.client.directThread.broadcast({
      item: 'text',
      threadIds: this.thread_id,
      form: {
        text,
      },
    });
  }

  public async broadcastPhoto(options: DirectThreadBroadcastPhotoOptions) {
    const { upload_id } = await this.client.upload.photo({
      uploadId: options.uploadId,
      file: options.file,
    });
    return await this.client.directThread.broadcast({
      item: 'configure_photo',
      threadIds: this.thread_id,
      form: {
        allow_full_aspect_ratio: options.allowFullAspectRatio || true,
        upload_id,
      },
    });
  }
}
