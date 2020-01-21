import { injectable } from 'tsyringe';
import { FbsearchRepository } from '../repositories/fbsearch.repository';
import { UserRepository } from '../repositories/user.repository';
import { TagRepository } from '../repositories/tag.repository';
import { LocationSearch } from '../repositories/location-search.repository';

@injectable()
export class SearchService {
  constructor(
    private fbsearch: FbsearchRepository,
    private user: UserRepository,
    private tag: TagRepository,
    private locationSearch: LocationSearch,
  ) {}
  public async blended(query: string) {
    const result = await this.fbsearch.topsearchFlat(query);
    return result.list;
  }
  public async blendedItems(query: string) {
    const list = await this.blended(query);
    return list.map(item => item.user || item.hashtag || item.place);
  }
  public async users(query: string) {
    const result = await this.user.search(query);
    return result.users;
  }
  public async tags(query: string) {
    const result = await this.tag.search(query);
    return result.results;
  }
  public async places(query: string) {
    const result = await this.fbsearch.places(query);
    return result.items;
  }

  public async location(latitude: number, longitude: number, query?: string) {
    const result = await this.locationSearch.index(latitude, longitude, query);
    return result.venues;
  }
}
