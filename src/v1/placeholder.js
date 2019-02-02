const Resource = require('./resource');

class Placeholder extends Resource {
  parseParams (json) {
    const hash = {};
    hash.is_linked = json.is_linked;
    hash.title = json.title;
    hash.message = json.message;
    return hash;
  }
}

module.exports = Placeholder;
