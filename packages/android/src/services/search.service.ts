import { Repository } from '../core/repository';

export class SearchService extends Repository {
  public async blended(query: string) {
    const result = await this.client.fbsearch.topsearchFlat(query);
    return result.list;
  }
  public async blendedItems(query: string) {
    const list = await this.blended(query);
    return list.map(item => item.user || item.hashtag || item.place);
  }
  public async users(query: string) {
    const result = await this.client.user.search(query);
    return result.users;
  }
  public async tags(query: string) {
    const result = await this.client.tag.search(query);
    return result.results;
  }
  public async places(query: string) {
    const result = await this.client.fbsearch.places(query);
    return result.items;
  }

  public async location(latitude: number, longitude: number, query?: string) {
    const result = await this.client.locationSearch.index(latitude, longitude, query);
    return result.venues;
  }
}
