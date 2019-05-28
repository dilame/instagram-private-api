import { Repository } from '../core/repository';

export class SavedRepository extends Repository {
  public async save(id: string) {
    const { body } = await this.client.request.send({
      url: '/api/v1/feed/save/',
      method: 'POST',
        qs: {
            id,
        },
    });
    return body;
  }

  async unsave(id: string) {
    await this.client.request.send({
        url: '/api/v1/feed/unsave/',
        method: 'POST',
        qs: {
            id,
        },
    });
}
