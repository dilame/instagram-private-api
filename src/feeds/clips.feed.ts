import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { ClipsFeedResponse, TimelineFeedResponseMedia_or_ad } from '../responses';

export class ClipsFeed extends Feed<ClipsFeedResponse, TimelineFeedResponseMedia_or_ad> {
  tag: string;
  @Expose()
  set state(body) {
    this.moreAvailable = body.data.xdt_api__v1__clips__home__connection_v2.page_info.has_next_page;
  }

  async request() {
    const form = {
      fb_dtsg: this.client.state.fb_dtsg,
      fb_api_caller_class: 'RelayModern',
      fb_api_req_friendly_name: 'PolarisClipsTabDesktopContainerQuery',
      variables: JSON.stringify({ data: { container_module: 'clips_tab_desktop_page' } }),
      server_timestamps: true,
      doc_id: '6846808792076706',
    };

    const { body } = await this.client.request.send<ClipsFeedResponse>(
      {
        url: '/api/graphql/',
        method: 'POST',
        headers: {
          Host: 'www.instagram.com',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-FB-Friendly-Name': 'PolarisClipsTabDesktopContainerQuery',
          'User-Agent': null,
        },
        form,
      },
      true,
    );

    this.state = body;
    return body;
  }

  async items() {
    const response = await this.request();
    return response.data.xdt_api__v1__clips__home__connection_v2.edges.filter(i => i.node.media).map(i => i.node.media);
  }
}
