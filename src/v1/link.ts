import { InstagramResource as Resource } from './resource';

export class Link extends Resource {
  parseParams(json) {
    const hash: any = {};
    hash.text = json.text;
    hash.link = {
      url: json.link_context.link_url,
      title: json.link_context.link_title,
      summary: json.link_context.link_summary,
      image: {
        url: json.link_context.link_image_url,
      },
    };
    return hash;
  }
}
