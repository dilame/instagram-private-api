import { State } from './state';
import { Request } from './request';
import { FeedFactory } from './feed.factory';
import { AccountRepository } from '../repositories/account.repository';
import { UserRepository } from '../repositories/user.repository';
import { MediaRepository } from '../repositories/media.repository';
import { ChallengeRepository } from '../repositories/challenge.repository';
import { FriendshipRepository } from '../repositories/friendship.repository';
import { UploadRepository } from '../repositories/upload.repository';
import { StoryRepository } from '../repositories/story.repository';

export class IgApiClient {
  public state = new State();
  public request = new Request(this);
  public challenge = new ChallengeRepository(this);
  public account = new AccountRepository(this);
  public user = new UserRepository(this);
  public friendship = new FriendshipRepository(this);
  public media = new MediaRepository(this);
  public upload = new UploadRepository(this);
  public feed = new FeedFactory(this);
  public story = new StoryRepository(this);
}
