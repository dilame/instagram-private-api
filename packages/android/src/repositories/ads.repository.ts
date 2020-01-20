import { Repository } from '../core/repository';
import { GraphQLRequestOptions } from '../types';

export class AdsRepository extends Repository {
  public async graphQL<T extends { data: any }>(options: GraphQLRequestOptions): Promise<T> {
    const { body } = await this.client.request.send<T>(
      {
        url: '/api/v1/ads/graphql/',
        method: 'POST',
        qs: {
          locale: this.client.state.language,
          vc_policy: 'insights_policy',
          ...(options.surface.name ? { surface: options.surface.name } : {}),
        },
        form: {
          access_token: options.accessToken,
          fb_api_caller_class: 'RelayModern',
          fb_api_req_friendly_name: options.surface.friendlyName,
          doc_id: options.documentId,
          variables: JSON.stringify(options.variables),
        },
      },
      true,
    );
    return body;
  }
}
