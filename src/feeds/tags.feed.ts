import { flatten } from 'lodash';
import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { TagsFeedResponse, TagsFeedResponseMedia } from '../responses';

export class TagsFeed extends Feed<TagsFeedResponse, TagsFeedResponseMedia> {
  tag: string;
  tab: 'top' | 'recent' | 'places';
  @Expose()
  private nextMaxId: string;
  @Expose()
  private nextPage: number;
  @Expose()
  private nextMediaIds: Array<string> = [];

  protected set state(body: TagsFeedResponse) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
    this.nextPage = body.next_page;
    this.nextMediaIds = body.next_media_ids;
  }

  public async request() {
    const { body } = await this.client.request.send<TagsFeedResponse>({
      url: `/api/v1/tags/${encodeURI(this.tag)}/sections/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        tab: this.tab,
        _uuid: this.client.state.uuid,
        session_id: this.client.state.clientSessionId,
        page: this.nextPage,
        next_media_ids: this.nextPage ? JSON.stringify(this.nextMediaIds) : void 0,
        max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  public async items() {
    const response = await this.request();
    return flatten(
      response.sections.map(section => {
        if (section.layout_type !== 'media_grid') return;

        return section.layout_content.medias.map(medias => medias.media);
      }),
    );
  }
}
