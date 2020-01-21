import { flatten } from 'lodash';
import { Expose } from 'class-transformer';
import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { TagsFeedResponse, TagsFeedResponseMedia } from '../responses';
import { AndroidState } from '../core/android.state';

@injectable()
export class TagsFeed extends Feed<TagsFeedResponse, TagsFeedResponseMedia> {
  tag: string;
  tab: 'top' | 'recent' | 'places';
  @Expose()
  private nextMaxId: string;
  @Expose()
  private nextPage: number;
  @Expose()
  private nextMediaIds: Array<string> = [];

  constructor(private http: AndroidHttp, private clientState: AndroidState) {
    super();
  }

  set state(body: TagsFeedResponse) {
    this.done = body.more_available;
    this.nextMaxId = body.next_max_id;
    this.nextPage = body.next_page;
    this.nextMediaIds = body.next_media_ids;
  }

  public async request() {
    const { body } = await this.http.send<TagsFeedResponse>({
      url: `/api/v1/tags/${encodeURI(this.tag)}/sections/`,
      method: 'POST',
      form: {
        _csrftoken: this.clientState.cookieCsrfToken,
        tab: this.tab,
        _uuid: this.clientState.uuid,
        session_id: this.clientState.clientSessionId,
        page: this.nextPage,
        next_media_ids: this.nextPage ? JSON.stringify(this.nextMediaIds) : void 0,
        max_id: this.nextMaxId,
      },
    });

    return body;
  }

  items(raw: TagsFeedResponse) {
    return flatten(
      raw.sections.map(section => {
        if (section.layout_type !== 'media_grid') {
          return;
        }

        return section.layout_content.medias.map(medias => medias.media);
      }),
    );
  }
}
