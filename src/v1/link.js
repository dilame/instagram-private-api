const Resource = require('./resource');

class Link extends Resource {
  parseParams (json) {
    const hash = {};
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

module.exports = Link;
