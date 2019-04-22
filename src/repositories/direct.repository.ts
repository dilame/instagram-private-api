import { Repository } from '../core/repository';
import { DirectRepositoryRankedRecipientsResponse } from '../responses/direct.repository.ranked-recipients.response';

export class DirectRepository extends Repository {
  async rankedRecipients(mode: 'raven' | 'reshare' = 'raven') {
    const { body } = await this.client.request.send<DirectRepositoryRankedRecipientsResponse>({
      url: '/api/v1/direct_v2/ranked_recipients/',
      qs: {
        mode,
        show_threads: true,
      },
    });
    return body;
  }
}
