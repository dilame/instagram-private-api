import { Repository } from '../core/repository';

export class LauncherRepository extends Repository {
  public async preLoginSync() {
    return this.sync({
      id: this.client.state.uuid,
      configs:
        'ig_fbns_blocked,ig_android_felix_release_players,ig_user_mismatch_soft_error,ig_android_carrier_signals_killswitch,ig_android_killswitch_perm_direct_ssim,fizz_ig_android,ig_mi_block_expired_events,ig_android_os_version_blocking_config',
    });
  }
  public async postLoginSync() {
    const uid = this.client.state.cookieUserId;
    return this.sync({
      _csrftoken: this.client.state.cookieCsrfToken,
      id: uid,
      _uid: uid,
      _uuid: this.client.state.uuid,
      configs:
        'ig_android_insights_welcome_dialog_tooltip,ig_android_extra_native_debugging_info,ig_android_insights_top_account_dialog_tooltip,ig_android_explore_startup_prefetch_launcher,ig_android_newsfeed_recyclerview,ig_android_react_native_ota_kill_switch,ig_qe_value_consistency_checker,ig_android_qp_keep_promotion_during_cooldown,ig_launcher_ig_explore_post_chaining_hide_comments_android_v0,ig_android_video_playback,ig_launcher_ig_android_network_stack_queue_undefined_request_qe,ig_camera_android_attributed_effects_endpoint_api_query_config,ig_android_notification_setting_sync,ig_android_dogfooding,ig_launcher_ig_explore_post_chaining_pill_android_v0,ig_android_request_compression_launcher,ig_delink_lasso_accounts,ig_android_stories_send_preloaded_reels_with_reels_tray,ig_android_critical_path_manager,ig_android_shopping_django_product_search,ig_android_qp_surveys_v1,ig_android_feed_attach_report_logs,ig_android_uri_parser_cache_launcher,ig_android_global_scheduler_infra,ig_android_explore_grid_viewpoint,ig_android_global_scheduler_direct,ig_android_upload_heap_on_oom,ig_launcher_ig_android_network_stack_cap_api_request_qe,ig_android_async_view_model_launcher,ig_android_bug_report_screen_record,ig_canvas_ad_pixel,ig_android_bloks_demos,ig_launcher_force_switch_on_dialog,ig_story_insights_entry,ig_android_executor_limit_per_group_config,ig_android_bitmap_strong_ref_cache_layer_launcher,ig_android_cold_start_class_preloading,ig_direct_e2e_send_waterfall_sample_rate_config,ig_android_qp_waterfall_logging,ig_synchronous_account_switch,ig_launcher_ig_android_reactnative_realtime_ota,ig_contact_invites_netego_killswitch,ig_launcher_ig_explore_video_chaining_container_module_android,ig_launcher_ig_explore_remove_topic_channel_tooltip_experiment_android,ig_android_request_cap_tuning_with_bandwidth,ig_android_rageshake_redesign,ig_launcher_explore_navigation_redesign_android,ig_android_betamap_cold_start,ig_android_employee_options,ig_android_direct_gifs_killswitch,ig_android_gps_improvements_launcher,ig_launcher_ig_android_network_stack_cap_video_request_qe,ig_launcher_ig_android_network_request_cap_tuning_qe,ig_android_qp_xshare_to_fb,ig_android_feed_report_ranking_issue,ig_launcher_ig_explore_verified_badge_android,ig_android_bloks_data_release,ig_android_feed_camera_latency',
    });
  }
  public async sync(data: Object) {
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/launcher/sync/',
      form: this.client.request.sign(data),
    });
    return body;
  }
}
