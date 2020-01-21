import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { GraphQLRequestOptions } from '../types';

@injectable()
export class AdsRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async graphQL<T extends { data: any }>(options: GraphQLRequestOptions): Promise<T> {
    const { body } = await this.http.send<T>(
      {
        url: '/api/v1/ads/graphql/',
        method: 'POST',
        qs: {
          locale: this.state.language,
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
