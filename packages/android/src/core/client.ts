import { AndroidState } from './android.state';
import { AndroidHttp } from './android.http';
import { FeedFactory } from './feed.factory';
import { AccountRepository } from '../repositories/account.repository';
import { MediaRepository } from '../repositories/media.repository';
import { ChallengeRepository } from '../repositories/challenge.repository';
import { FriendshipRepository } from '../repositories/friendship.repository';
import { UploadRepository } from '../repositories/upload.repository';
import { PublishService } from '../services/publish.service';
import { DirectThreadRepository } from '../repositories/direct-thread.repository';
import { EntityFactory } from './entity.factory';
import { QeRepository } from '../repositories/qe.repository';
import { ZrRepository } from '../repositories/zr.repository';
import { LauncherRepository } from '../repositories/launcher.repository';
import { DirectRepository } from '../repositories/direct.repository';
import { LoomRepository } from '../repositories/loom.repository';
import { QpRepository } from '../repositories/qp.repository';
import { CreativesRepository } from '../repositories/creatives.repository';
import { LinkedAccountRepository } from '../repositories/linked-account.repository';
import { AttributionRepository } from '../repositories/attribution.repository';
import { FbsearchRepository } from '../repositories/fbsearch.repository';
import { SimulateService } from '../services/simulate.service';
import { DiscoverRepository } from '../repositories/discover.repository';
import { ConsentRepository } from '../repositories/consent.repository';
import { UserRepository } from '../repositories/user.repository';
import { TagRepository } from '../repositories/tag.repository';
import { SearchService } from '../services/search.service';
import { StoryService } from '../services/story.service';
import { LiveRepository } from '../repositories/live.repository';
import { LocationRepository } from '../repositories/location.repository';
import { LocationSearch } from '../repositories/location-search.repository';
import { MusicRepository } from '../repositories/music.repository';
import { NewsRepository } from '../repositories/news.repository';
import { HighlightsRepository } from '../repositories/highlights.repository';
import { AdsRepository } from '../repositories/ads.repository';
import { InsightsService } from '../services/insights.service';
import { RestrictActionRepository } from '../repositories/restrict-action.repository';
import { AddressBookRepository } from '../repositories/address-book.repository';
import { StatusRepository } from '../repositories/status.repository';
import { IgtvRepository } from '../repositories/igtv.repository';
import { container } from 'tsyringe';
import constructor from 'tsyringe/dist/typings/types/constructor';
import Lifecycle from 'tsyringe/dist/typings/types/lifecycle';

export class IgApiClient {
  // Every instance got it's own IoC container
  private container = container.createChildContainer();
  constructor() {
    this.container.registerInstance('IoC', this.container);
    this.container.registerInstance(AndroidState, new AndroidState());
    this.container.register(AndroidHttp, { useClass: AndroidHttp }, { lifecycle: Lifecycle.ContainerScoped });
  }
  public get feed() {
    return this.resolve(FeedFactory);
  }
  public get entity() {
    return this.resolve(EntityFactory);
  }
  /* Repositories */
  public get account() {
    return this.resolve(AccountRepository);
  }
  public get attribution() {
    return this.resolve(AttributionRepository);
  }
  public get challenge() {
    return this.resolve(ChallengeRepository);
  }
  public get consent() {
    return this.resolve(ConsentRepository);
  }
  public get creatives() {
    return this.resolve(CreativesRepository);
  }
  public get direct() {
    return this.resolve(DirectRepository);
  }
  public get directThread() {
    return this.resolve(DirectThreadRepository);
  }
  public get discover() {
    return this.resolve(DiscoverRepository);
  }
  public get fbsearch() {
    return this.resolve(FbsearchRepository);
  }
  public get friendship() {
    return this.resolve(FriendshipRepository);
  }
  public get launcher() {
    return this.resolve(LauncherRepository);
  }
  public get linkedAccount() {
    return this.resolve(LinkedAccountRepository);
  }
  public get loom() {
    return this.resolve(LoomRepository);
  }
  public get media() {
    return this.resolve(MediaRepository);
  }
  public get qe() {
    return this.resolve(QeRepository);
  }
  public get qp() {
    return this.resolve(QpRepository);
  }
  public get tag() {
    return this.resolve(TagRepository);
  }
  public get upload() {
    return this.resolve(UploadRepository);
  }
  public get user() {
    return this.resolve(UserRepository);
  }
  public get zr() {
    return this.resolve(ZrRepository);
  }
  public get live() {
    return this.resolve(LiveRepository);
  }
  public get location() {
    return this.resolve(LocationRepository);
  }
  public get locationSearch() {
    return this.resolve(LocationSearch);
  }
  public get music() {
    return this.resolve(MusicRepository);
  }
  public get news() {
    return this.resolve(NewsRepository);
  }
  public get highlights() {
    return this.resolve(HighlightsRepository);
  }
  public get ads() {
    return this.resolve(AdsRepository);
  }
  public get restrictAction() {
    return this.resolve(RestrictActionRepository);
  }
  public get addressBook() {
    return this.resolve(AddressBookRepository);
  }
  public get status() {
    return this.resolve(StatusRepository);
  }
  public get igtv() {
    return this.resolve(IgtvRepository);
  }
  /* Services */
  public get publish() {
    return this.resolve(PublishService);
  }
  public get search() {
    return this.resolve(SearchService);
  }
  public get simulate() {
    return this.resolve(SimulateService);
  }
  public get story() {
    return this.resolve(StoryService);
  }
  public get insights() {
    return this.resolve(InsightsService);
  }

  private resolve<T>(dependency: constructor<T>): T {
    if (!this.container.isRegistered(dependency)) {
      this.container.register(dependency, { useClass: dependency }, { lifecycle: Lifecycle.ContainerScoped });
    }
    return this.container.resolve(dependency);
  }
}
