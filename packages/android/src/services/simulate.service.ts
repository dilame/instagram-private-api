import { shuffle } from 'lodash';
import { injectable } from 'tsyringe';
import Bluebird = require('bluebird');
import { AccountRepository } from '../repositories/account.repository';
import { ZrRepository } from '../repositories/zr.repository';
import { LauncherRepository } from '../repositories/launcher.repository';
import { QeRepository } from '../repositories/qe.repository';
import { AttributionRepository } from '../repositories/attribution.repository';
import { LoomRepository } from '../repositories/loom.repository';
import { LinkedAccountRepository } from '../repositories/linked-account.repository';
import { FbsearchRepository } from '../repositories/fbsearch.repository';
import { DirectRepository } from '../repositories/direct.repository';
import { MediaRepository } from '../repositories/media.repository';
import { QpRepository } from '../repositories/qp.repository';
import { UserRepository } from '../repositories/user.repository';
import { DiscoverRepository } from '../repositories/discover.repository';
import { StatusRepository } from '../repositories/status.repository';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';
import { FeedFactory } from '../core/feed.factory';

@injectable()
export class SimulateService {
  constructor(
    private http: AndroidHttp,
    private state: AndroidState,
    private account: AccountRepository,
    private zr: ZrRepository,
    private launcher: LauncherRepository,
    private qe: QeRepository,
    private attribution: AttributionRepository,
    private loom: LoomRepository,
    private linkedAccount: LinkedAccountRepository,
    private fbsearch: FbsearchRepository,
    private direct: DirectRepository,
    private media: MediaRepository,
    private qp: QpRepository,
    private user: UserRepository,
    private discover: DiscoverRepository,
    private status: StatusRepository,
    private feed: FeedFactory,
  ) {}
  private get preLoginFlowRequests(): Array<() => any> {
    return [
      () => this.account.readMsisdnHeader(),
      () => this.account.msisdnHeaderBootstrap('ig_select_app'),
      () => this.zr.tokenResult(),
      () => this.account.contactPointPrefill('prefill'),
      () => this.launcher.preLoginSync(),
      () => this.qe.syncLoginExperiments(),
      () => this.attribution.logAttribution(),
      () => this.account.getPrefillCandidates(),
    ];
  }

  private get postLoginFlowRequests(): Array<() => any> {
    return [
      () => this.zr.tokenResult(),
      () => this.launcher.postLoginSync(),
      () => this.qe.syncExperiments(),
      () => this.attribution.logAttribution(),
      () => this.attribution.logResurrectAttribution(),
      () => this.loom.fetchConfig(),
      () => this.linkedAccount.getLinkageStatus(),
      // () => this.creatives.writeSupportedCapabilities(),
      // () => this.account.processContactPointSignals(),
      () => this.feed.timeline().request({ recoveredFromCrash: '1', reason: 'cold_start_fetch' }),
      () => this.fbsearch.suggestedSearches('users'),
      () => this.fbsearch.suggestedSearches('blended'),
      () => this.fbsearch.recentSearches(),
      () => this.direct.rankedRecipients('reshare'),
      () => this.direct.rankedRecipients('raven'),
      () => this.direct.getPresence(),
      () => this.feed.directInbox().request(),
      () => this.media.blocked(),
      () => this.qp.batchFetch(),
      () => this.qp.getCooldowns(),
      () => this.user.arlinkDownloadInfo(),
      () => this.discover.topicalExplore(),
      () => this.discover.markSuSeen(),
      () => this.facebookOta(),
      () => this.status.getViewableStatuses(),
    ];
  }

  private static async executeRequestsFlow({
    requests,
    concurrency = 1,
    toShuffle = true,
  }: {
    requests: Array<() => any>;
    concurrency?: number;
    toShuffle?: boolean;
  }) {
    if (toShuffle) {
      requests = shuffle(requests);
    }
    await Bluebird.map(requests, request => request(), { concurrency });
  }

  public async preLoginFlow(concurrency?: number, toShuffle?: boolean) {
    return SimulateService.executeRequestsFlow({
      requests: this.preLoginFlowRequests,
      concurrency,
      toShuffle,
    });
  }

  public async postLoginFlow(concurrency?: number, toShuffle?: boolean) {
    return SimulateService.executeRequestsFlow({
      requests: this.postLoginFlowRequests,
      concurrency,
      toShuffle,
    });
  }

  private async facebookOta() {
    const uid = this.state.cookieUserId;
    const { body } = await this.http.send({
      url: '/api/v1/facebook_ota/',
      qs: {
        fields: this.state.fbOtaFields,
        custom_user_id: uid,
        signed_body: this.http.signature('') + '.',
        ig_sig_key_version: this.state.signatureVersion,
        version_code: this.state.appVersionCode,
        version_name: this.state.appVersion,
        custom_app_id: this.state.fbOrcaApplicationId,
        custom_device_id: this.state.uuid,
      },
    });
    return body;
  }
}
