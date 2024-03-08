import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { ClipsFeedResponse, ClipsFeedVariables, TimelineFeedResponseMedia_or_ad } from '../responses';

export class ClipsFeed extends Feed<ClipsFeedResponse, TimelineFeedResponseMedia_or_ad> {
  tag: string;
  @Expose()
  private feedVariables: ClipsFeedVariables;

  set state(body) {
    this.moreAvailable = body.data.xdt_api__v1__clips__home__connection_v2.page_info.has_next_page;
    this.feedVariables = {
      after: body.data.xdt_api__v1__clips__home__connection_v2.page_info.end_cursor,
      before: null,
      data: {
        container_module: 'clips_tab_desktop_page',
        seen_reels: body.data.xdt_api__v1__clips__home__connection_v2.edges.map(i => {
          return { id: i.node.media.id };
        }),
      },
      first: 10,
      last: null,
    };
  }

  async request() {
    let form = {
      fb_dtsg: this.client.state.fb_dtsg,
      fb_api_caller_class: 'RelayModern',
      fb_api_req_friendly_name: 'PolarisClipsTabDesktopContainerQuery',
      server_timestamps: true,
      doc_id: '6846808792076706',
    };

    if (this.feedVariables) {
      form = Object.assign(form, {
        variables: JSON.stringify(this.feedVariables),
      });
    } else {
      form = Object.assign(form, {
        variables: JSON.stringify({ data: { container_module: 'clips_tab_desktop_page' } }),
      });
    }

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
