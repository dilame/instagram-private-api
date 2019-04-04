import * as CONSTANTS from './constants/constants';
import * as routes from './core/routes';
import { Device } from './core/devices/device';
import { CookieStorage } from './core/cookies/cookie-storage';
import { CookieFileStorage } from './core/cookies/cookie-file-storage';
import { CookieMemoryStorage } from './core/cookies/cookie-memory-storage';
import * as Exceptions from './core/exceptions';
import { pruned as prunedJson } from './v1/json-pruned';
import { InstagramResource as Resource } from './v1/resource';

import { Request } from './core/request';
import { Session } from './core/session';
import { Account } from './v1/account';
import { Media } from './v1/media';
import { Like } from './v1/like';
import { Comment } from './v1/comment';
import { Hashtag } from './v1/hashtag';
import { Link } from './v1/link';
import { Placeholder } from './v1/placeholder';
import { Location } from './v1/location';
import { Relationship } from './v1/relationship';
import { Thread } from './v1/thread';
import { ThreadItem } from './v1/thread-item';
import { QE } from './v1/qe';
import { Internal } from './v1/internal';
import { Upload } from './v1/upload';
import { discover } from './v1/discover';
import { Save } from './v1/save';
import { search } from './v1/search';

import { AccountCreator, AccountEmailCreator, AccountPhoneCreator } from './v1/account-creator';

import { AccountFollowersFeed as AccountFollowers } from './feeds/account-followers.feed';
import { AccountFollowingFeed as AccountFollowing } from './feeds/account-following.feed';
import { InboxFeed as Inbox } from './feeds/inbox.feed';
import { InboxPendingFeed as InboxPending } from './feeds/inbox-pending.feed';
import { LocationMediaFeed as LocationMedia } from './feeds/location-media.feed';
import { TaggedMediaFeed as TaggedMedia } from './feeds/tagged-media.feed';
import { ThreadItemsFeed as ThreadItems } from './feeds/thread-items.feed';
import { TimelineFeed as Timeline } from './feeds/timeline.feed';
import { UserMediaFeed as UserMedia } from './feeds/user-media.feed';
import { SelfLikedFeed as SelfLiked } from './feeds/self-liked.feed';
import { MediaCommentsFeed as MediaComments } from './feeds/media-comments.feed';
import { SavedMediaFeed as SavedMedia } from './feeds/saved-media.feed';
import { StoryTrayFeed } from './feeds/story-tray.feed';
import { UserStoryFeed } from './feeds/user-story.feed';
import { StoryViewersFeed } from './feeds/story-viewers.feed';

import { WebRequest } from './core/web-request';
import {
  Challenge,
  EmailVerificationChallenge,
  NotImplementedChallenge,
  PhoneVerificationChallenge,
} from './v1/challenge';

const Feed = {
  AccountFollowers,
  AccountFollowing,
  Inbox,
  InboxPending,
  LocationMedia,
  TaggedMedia,
  ThreadItems,
  Timeline,
  UserMedia,
  SelfLiked,
  MediaComments,
  SavedMedia,
  TagMedia: TaggedMedia, // Alias but deprecated
  StoryTrayFeed,
  UserStoryFeed,
  StoryViewersFeed,
};
const Web = {
  Request: WebRequest,
  Challenge,
  NotImplementedChallenge,
  EmailVerificationChallenge,
  PhoneVerificationChallenge,
};
const InstagramV1 = {
  CONSTANTS,
  routes,
  Device,
  CookieStorage,
  CookieFileStorage,
  CookieMemoryStorage,
  Exceptions,
  prunedJson,
  Resource,
  Request,
  Session,
  Account,
  Media,
  Like,
  Comment,
  Hashtag,
  Link,
  Placeholder,
  Location,
  Relationship,
  Thread,
  ThreadItem,
  QE,
  Internal,
  Upload,
  discover,
  Save,
  search,
  AccountCreator,
  AccountPhoneCreator,
  AccountEmailCreator,
  Feed,
  Web,
};

export default InstagramV1;
