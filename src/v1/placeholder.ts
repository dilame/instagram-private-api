import { InstagramResource as Resource } from './resource';

export class Placeholder extends Resource {
  parseParams(json) {
    const hash: any = {};
    hash.is_linked = json.is_linked;
    hash.title = json.title;
    hash.message = json.message;
    return hash;
  }
}
