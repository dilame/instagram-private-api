import { Repository } from '../core/repository';

export class SavedRepository extends Repository {
  // tip: id = savedFeed.items()[0].media.id
  public async save(id: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${id}/save/`,
      method: 'POST',
    });
    return body;
  }

  async unsave(id: string) {
    const { body } = await this.client.request.send({
      url: `/api/v1/media/${id}/unsave/`,
      method: 'POST',
    });
    return body;
  }
}
