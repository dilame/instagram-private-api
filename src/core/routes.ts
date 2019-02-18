import * as _ from 'lodash';
import { API_ENDPOINT, WEBHOST } from '../constants/constants';

export const ROUTES = {
  follow: 'friendships/create/<%= id %>/',
  unfollow: 'friendships/destroy/<%= id %>/',
  expose: 'qe/expose/',
  login: 'accounts/login/',
  logout: 'accounts/logout/',
  setAccountPrivate: 'accounts/set_private/',
  setAccountPublic: 'accounts/set_public/',
  editAccount: 'accounts/edit_profile/',
  currentAccount: 'accounts/current_user/?edit=true',
  comment: 'media/<%= id %>/comment/',
  commentDelete: 'media/<%= id %>/comment/<%= commentId %>/delete/',
  commentBulkDelete: 'media/<%= id %>/comment/bulk_delete/',
  commentLike: 'media/<%= id %>/comment_like/',
  like: 'media/<%= id %>/like/',
  unlike: 'media/<%= id %>/unlike/',
  registrationCreate: 'accounts/create/',
  registrationCreateValidated: 'accounts/create_validated/',
  registrationSMSCode: 'accounts/send_signup_sms_code/',
  registrationValidateSMSCode: 'accounts/validate_signup_sms_code/',
  checkEmail: 'users/check_email/',
  checkUsername: 'users/check_username/',
  usernameSuggestions: 'accounts/username_suggestions/',
  uploadPhoto: 'upload/photo/',
  uploadVideo: 'upload/video/',
  friendshipShow: 'friendships/show/<%= id %>/',
  friendshipShowMany: 'friendships/show_many/',
  friendshipPending: 'friendships/pending/',
  friendshipPendingApprove: 'friendships/approve/<%= id %>/',
  friendshipRemoveFollower: 'friendships/remove_follower/<%= id %>/',
  userInfo: 'users/<%= id %>/info/',
  userFeed: 'feed/user/<%= id %>/?<%= maxId ? ("max_id=" + maxId) : "" %>',
  timelineFeed: 'feed/timeline/',
  tagFeed: 'feed/tag/<%= encodeURI(tag) %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
  selfLikedFeed: 'feed/liked/<%= maxId ? ("?max_id=" + maxId) : "" %>',
  storyViewers: 'media/<%= mediaId %>/list_reel_media_viewer/<%= maxId ? ("?max_id=" + maxId) : "" %>',
  locationFeed: 'feed/location/<%= id %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
  followingFeed:
    'friendships/<%= id %>/following/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
  followersFeed: 'friendships/<%= id %>/followers/<%= maxId ? ("?max_id=" + maxId) : "" %>',
  savedFeed: 'feed/saved/<%= maxId ? ("?max_id=" + maxId) : "" %>',

  topSearch:
    'fbsearch/topsearch/?rank_token=<%= rankToken %>&query=<%= encodeURIComponent(query) %>&context=blended&timezone_offset=10800',
  accountsSearch: 'users/search/?is_typehead=true&q=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
  hashtagsSearch: 'tags/search/?count=50&q=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
  hashtagsInfo: 'tags/<%= encodeURI(tag) %>/info',
  hashtagsRelated:
    'tags/<%= encodeURI(tag) %>/related/?visited=<%= encodeURIComponent(visited) %>&related_types=<%= encodeURIComponent(related_types) %>',
  locationsSearch: 'fbsearch/places/?count=50&query=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
  changeProfilePicture: 'accounts/change_profile_picture/',
  mediaConfigure: 'media/configure/',
  mediaConfigureStory: 'media/configure_to_reel/',
  videoConfigure: 'media/configure/?video=1',
  mediaConfigureSidecar: 'media/configure_sidecar/',
  mediaInfo: 'media/<%= mediaId %>/info/',
  mediaLikes: 'media/<%= mediaId %>/likers/',
  mediaComments:
    'media/<%= mediaId %>/comments/?can_support_threading=true<%= minId ? ("&min_id=" + minId) : "" %><%= maxId ? ("&max_id=" + maxId) : "" %>',
  mediaDeletePhoto: 'media/<%= mediaId %>/delete/?media_type=PHOTO',
  mediaEdit: 'media/<%= mediaId %>/edit_media/',
  qeSync: 'qe/sync/',
  launcherSync: 'launcher/sync/',
  readMsisdnHeader: 'accounts/read_msisdn_header/',
  logAttribution: 'attribution/log_attribution/',
  zeroRatingToken:
    'zr/token/result/?custom_device_id=<%=cd_id%>&device_id=<%=d_id%>&fetch_reason=<%=fr%>&token_hash=<%=th%>',
  contactPointPrefill: 'accounts/contact_point_prefill/',
  discoverAyml: 'discover/ayml/',
  exploreFeed:
    'discover/explore/?is_prefetch=<%=is_prefetch%>&is_from_promote=false&timezone_offset=2&session_id=<%=session_id%>&supported_capabilities_new=<%=supported_capabilities_new%>&max_id=0&module=explore_popular',
  inbox: 'direct_v2/inbox/?persistentBadging=true&use_unified_inbox=true<%= cursor ? ("&cursor=" + cursor) : "" %>',
  inboxPending: 'direct_v2/pending_inbox/<%= maxId ? ("?max_id=" + maxId) : "" %>',
  threads: 'direct_v2/threads/?user_ids=<% JSON.stringify(threads) %>',
  threadsShow: 'direct_v2/threads/<%= threadId %>/<%= cursor ? ("?cursor=" + cursor) : "" %>',
  threadsSeen: 'direct_v2/threads/<%= threadId %>/items/<%= itemId %>/seen/',
  threadsApprove: 'direct_v2/threads/<%= threadId %>/approve/',
  threadsHide: 'direct_v2/threads/<%= threadId %>/hide/',
  threadsBrodcastText: 'direct_v2/threads/broadcast/text/',
  threadsBrodcastLink: 'direct_v2/threads/broadcast/link/',
  threadsBrodcastShare: 'direct_v2/threads/broadcast/media_share/?media_type=photo',
  threadsBrodcastProfile: 'direct_v2/threads/broadcast/profile/',
  threadsBrodcastHashtag: 'direct_v2/threads/broadcast/hashtag/',
  threadsBrodcastPhoto: 'direct_v2/threads/broadcast/configure_photo/',
  threadsApproveAll: 'direct_v2/threads/approve_all/',
  threadsRecentRecipients: 'direct_share/recent_recipients/',
  getRankedRecipients:
    'direct_v2/ranked_recipients/?mode=<%=mode%>&show_threads=<%=show_threads%>&use_unified_inbox=<%=use_unified_inbox%>',
  autocompleteUserList: 'friendships/autocomplete_user_list/?version=2&followinfo=True',
  getBootstrapUsers: 'scores/bootstrap/users/?surfaces=<%=surfaces%>',
  getPresences: 'direct_v2/get_presence/',
  getRecentActivityInbox: 'news/inbox/',
  getProfileNotice: 'users/profile_notice/',
  megaphoneLog: 'megaphone/log/',
  block: 'friendships/block/<%= id %>/',
  unblock: 'friendships/unblock/<%= id %>/',
  save: 'media/<%= id %>/save/',
  unsave: 'media/<%= id %>/unsave/',
  userStory: 'feed/reels_media/',
  storyTray: 'feed/reels_tray/',
};

export const WEB_ROUTES = {
  challengeReset: 'challenge/reset/',
  challenge: 'challenge/',
  userInfo: '<%= id %>/',
};

export const URLs = _.mapValues(ROUTES, val => _.template(val));
export const WEB_URLs = _.mapValues(WEB_ROUTES, val => _.template(val));

export function getUrl(key, data = {}) {
  if (_.isFunction(URLs[key])) return API_ENDPOINT + URLs[key](data);
  throw new Error(`Url with key "${key}" is not available`);
}

export function getWebUrl(key, data = {}) {
  if (_.isFunction(WEB_URLs[key])) return WEBHOST + WEB_URLs[key](data);
  throw new Error(`Web url with key "${key}" is not available`);
}
