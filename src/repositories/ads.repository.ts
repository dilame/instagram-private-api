import { Repository } from '../core/repository';

export class AdsRepository extends Repository {
  public async graphql(surface: string, doc_id: string, variables: object, vc_policy: string = 'insights_policy') {
    const { body } = await this.client.request.send(
      {
        url: '/api/v1/ads/graphql/',
        method: 'POST',
        qs: {
          locale: this.client.state.language,
          vc_policy,
          surface,
        },
        form: {
          access_token: null,
          fb_api_caller_class: 'RelayModern',
          variables: JSON.stringify(variables),
          doc_id,
        },
      },
      false,
    );

    return body;
  }
}
