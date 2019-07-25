> **[instagram-private-api](../README.md)**

[Globals](../README.md) / ["types/common.types"](_types_common_types_.md) /

# External module: "types/common.types"

## Index

### Type aliases

* [IgAppModule](_types_common_types_.md#igappmodule)
* [IgResponse](_types_common_types_.md#igresponse)

## Type aliases

###  IgAppModule

Ƭ **IgAppModule**: *"feed_timeline" | "newsfeed" | "profile" | "media_view_profile" | "video_view_profile" | "photo_view_profile" | "followers" | "following" | "self_followers" | "self_following" | "comment_likers" | "comment_owner" | "feed_contextual_post" | "feed_contextual_hashtag" | "feed_contextual_location" | "feed_contextual_newsfeed_multi_media_liked" | "likers_likers_media_view_profile" | "likers_likers_photo_view_profile" | "likers_likers_video_view_profile" | "self_likers_self_likers_media_view_profile" | "self_likers_self_likers_photo_view_profile" | "self_likers_self_likers_video_view_profile" | "story_camera_music_overlay_post_capture" | "story_camera_music_overlay_pre_capture" | string*

*Defined in [types/common.types.ts:3](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/types/common.types.ts#L3)*

___

###  IgResponse

Ƭ **IgResponse**: *`Pick<Response, Exclude<keyof Response, "body">>` & object*

*Defined in [types/common.types.ts:30](https://github.com/realinstadude/instagram-private-api/blob/4ae8fec/src/types/common.types.ts#L30)*