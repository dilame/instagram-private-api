import { State } from './state';
import { Request } from './request';
import { FeedFactory } from './feed.factory';
import { AccountRepository } from '../repositories/account.repository';
import { MediaRepository } from '../repositories/media.repository';
import { ChallengeRepository } from '../repositories/challenge.repository';
import { FriendshipRepository } from '../repositories/friendship.repository';
import { UploadRepository } from '../repositories/upload.repository';
import { StoryRepository } from '../repositories/story.repository';
import { PublishService } from '../services/publish.service';
import { DirectThreadRepository } from '../repositories/direct-thread.repository';
import { EntityFactory } from './entity.factory';
import { UserService } from '../services/user.service';

export class IgApiClient {
  public state = new State();
  public request = new Request(this);
  public feed = new FeedFactory(this);
  public entity = new EntityFactory(this);
  /* Repositories */
  public challenge = new ChallengeRepository(this);
  public account = new AccountRepository(this);
  public friendship = new FriendshipRepository(this);
  public media = new MediaRepository(this);
  public upload = new UploadRepository(this);
  public story = new StoryRepository(this);
  public directThread = new DirectThreadRepository(this);
  /* Services */
  public user = new UserService(this);
  public publish = new PublishService(this);
}
