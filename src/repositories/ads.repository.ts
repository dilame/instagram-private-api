import { Repository } from '../core/repository';

export class AdsRepository extends Repository {
  public async getPostInsights(id: string) {
    const { body } = await this.client.request.send({
      url: '/api/v1/ads/graphql/?locale=en_US&vc_policy=insights_policy&surface=post',
      method: 'POST',
      form: {
        access_token: null,
        fb_api_caller_class: 'RelayModern',
        variables: JSON.stringify({ query_params: { access_token: '', id } }),
        doc_id: '2277548965653663',
      },
    });

    return body;
  }
}
