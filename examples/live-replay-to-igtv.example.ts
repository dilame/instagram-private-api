/* tslint:disable:no-console */
import {IgApiClient, LiveEntity} from '../src';
import Bluebird = require('bluebird');
const pngToJpeg = require('png-to-jpeg')
const sharp = require('sharp');
const axios = require('axios');

const ig = new IgApiClient();

async function login() {
    ig.state.generateDevice(process.env.IG_USERNAME);
    ig.state.proxyUrl = process.env.IG_PROXY;
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async () => {
    // basic login-procedure
    await login();

    const {broadcast_id, upload_url} = await ig.live.create({
        // create a stream in 720x1280 (9:16)
        previewWidth: 720,
        previewHeight: 1280,
        // this message is not necessary, because it doesn't show up in the notification
        message: 'My message',
    });
    // (optional) get the key and url for programs such as OBS
    const {stream_key, stream_url} = LiveEntity.getUrlAndKey({broadcast_id, upload_url});
    console.log(`Start your stream on ${stream_url}.\n
    Your key is: ${stream_key}`);

    /**
     * make sure you are streaming to the url
     * the next step will send a notification / start your stream for everyone to see
     */
    const startInfo = await ig.live.start(broadcast_id);
    // status should be 'ok'
    console.log(startInfo);

    /**
     * now, your stream is running
     * the next step is to get comments
     * note: comments can only be requested roughly every 2s
     */

        // initial comment-timestamp = 0, get all comments
    let lastCommentTs = await printComments(broadcast_id, 0);

    // enable the comments
    await ig.live.unmuteComment(broadcast_id);
    /**
     * wait 2 seconds until the next request.
     * in the real world you'd use something like setInterval() instead of Bluebird.delay() / just to simulate a delay
     */
    // wait 2s
    await Bluebird.delay(2000);
    // now, we print the next comments
    lastCommentTs = await printComments(broadcast_id, lastCommentTs);

    // now we're commenting on our stream
    await ig.live.comment(broadcast_id, 'A comment');

    /**
     * now, your stream is running, you entertain your followers, but you're tired and
     * we're going to stop the stream
     */
    await ig.live.endBroadcast(broadcast_id);

    // Get live thumbnails, required to post on IGTV
    let data = await ig.live.getPostLiveThumbnails(broadcast_id);

    // Use an HTTP client to download any thumb
    let {data: file} = await axios.get(data.thumbnails[0], {responseType: 'arraybuffer'});

    // (optional) Resize thumb to a vertical one and convert to jpg
    file = await sharp(file)
        .resize({width: 720, height: 1280})
        .jpeg({
            quality: 100,
        })
        .toBuffer();

    // Upload the thumbnail with a broadcast id for a replay and get uploadId
    let upload = await ig.upload.photo({file, broadcastId: broadcast_id});

    let igtv = await ig.media.configureToIgtv({
        upload_id: upload.upload_id,
        title: 'A title',
        caption: 'A description',
        igtv_share_preview_to_feed: '1',
    }, 2000)

    console.log(`Live posted to IGTV : ${igtv.upload_id}`));
    // now you're basically done
})();

async function printComments(broadcastId, lastCommentTs) {
    const {comments} = await ig.live.getComment({broadcastId, lastCommentTs});
    if (comments.length > 0) {
        comments.forEach(comment => console.log(`${comment.user.username}: ${comment.text}`));
        return comments[comments.length - 1].created_at;
    } else {
        return lastCommentTs;
    }
}
