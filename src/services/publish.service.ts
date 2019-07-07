import { Repository } from '../core/repository';
import { PostingPhotoOptions } from '../types/posting.photo.options';
import sizeOf = require('image-size');
import { MediaConfigureOptions } from '../types/media.configure.options';
export class PublishService extends Repository {
  /**
   * Uploads a single photo to the timeline-feed
   * @param options - the options, containing caption and image-data
   */
  public async photo(options: PostingPhotoOptions) {
    const uploadedPhoto = await this.client.upload.photo({
      file: options.file,
    });
    const imageSize = await sizeOf(options.file);
    const configureOptions: MediaConfigureOptions = {
      upload_id: uploadedPhoto.upload_id,
      width: imageSize.width,
      height: imageSize.height,
      caption: options.caption,
    };
    if (options.usertags !== undefined) {
      configureOptions.usertags = options.usertags;
    }
    if (options.location !== undefined) {
      const { lat, lng, external_id_source, external_id, name, address } = options.location;
      configureOptions.location = {
        name,
        lat,
        lng,
        address,
        external_source: external_id_source,
        external_id,
      };
      configureOptions.location[external_id_source + '_id'] = external_id;
      configureOptions.geotag_enabled = '1';
      configureOptions.media_latitude = lat.toString();
      configureOptions.media_longitude = lng.toString();
      configureOptions.posting_latitude = lat.toString();
      configureOptions.posting_longitude = lng.toString();
    }
    return await this.client.media.configure(configureOptions);
  }
}
