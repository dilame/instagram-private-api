import { State } from './state';
import { Request } from './request';
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

export class IgApiClient {
  public state = new State();
  public request = new Request(this);
  public feed = new FeedFactory(this);
  public entity = new EntityFactory(this);
  /* Repositories */
  public account = new AccountRepository(this);
  public attribution = new AttributionRepository(this);
  public challenge = new ChallengeRepository(this);
  public consent = new ConsentRepository(this);
  public creatives = new CreativesRepository(this);
  public direct = new DirectRepository(this);
  public directThread = new DirectThreadRepository(this);
  public discover = new DiscoverRepository(this);
  public fbsearch = new FbsearchRepository(this);
  public friendship = new FriendshipRepository(this);
  public launcher = new LauncherRepository(this);
  public linkedAccount = new LinkedAccountRepository(this);
  public loom = new LoomRepository(this);
  public media = new MediaRepository(this);
  public qe = new QeRepository(this);
  public qp = new QpRepository(this);
  public tag = new TagRepository(this);
  public upload = new UploadRepository(this);
  public user = new UserRepository(this);
  public zr = new ZrRepository(this);
  public live = new LiveRepository(this);
  public location = new LocationRepository(this);
  public locationSearch = new LocationSearch(this);
  public music = new MusicRepository(this);
  public news = new NewsRepository(this);
  public highlights = new HighlightsRepository(this);
  public ads = new AdsRepository(this);
  public restrictAction = new RestrictActionRepository(this);
  public addressBook = new AddressBookRepository(this);
  /* Services */
  public publish = new PublishService(this);
  public search = new SearchService(this);
  public simulate = new SimulateService(this);
  public story = new StoryService(this);
  public insights = new InsightsService(this);

  public destroy() {
    this.request.error$.complete();
    this.request.end$.complete();
  }
}
