import { Repository } from '../core/repository';
import { PostingPhotoOptions } from '../types/posting.photo.options';
import sizeOf = require('image-size');
export class PublishService extends Repository {
  public async photo(options: PostingPhotoOptions) {
    const uploadedPhoto = await this.client.upload.photo({
      file: options.file,
    });
    const imageSize = await sizeOf(options.file);
    return await this.client.media.configure({
      upload_id: uploadedPhoto.upload_id,
      width: imageSize.width,
      height: imageSize.height,
      caption: options.caption,
    });
  }
}
