import Resource from './resource';

class Placeholder extends Resource {
  parseParams (json) {
    const hash: any = {};
    hash.is_linked = json.is_linked;
    hash.title = json.title;
    hash.message = json.message;
    return hash;
  }
}

export default Placeholder;
