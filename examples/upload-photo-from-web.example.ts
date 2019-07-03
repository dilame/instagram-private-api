/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import { get } from 'request-promise'; // request is already declared as an dependency of the library

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  console.log(JSON.stringify(auth));

  // getting random square image from internet
  const imageRequest = await get({
    url: 'https://picsum.photos/800/800', // random picture with 800x800 size
    encoding: null // this is required, we could convert body to buffer only with null encoding
  });
  
  // converting image body to buffer
  const imageBuffer = Buffer.from(imageRequest.body, 'binary');

  const publishResult = await ig.publish.photo({
    file: imageBuffer, // image buffer, you also can specify image from your disk using fs
    caption: 'Really nice photo from the internet! 💖' // nice caption (optional)
  });
  
  console.log(publishResult); // publishResult.status should be "ok"
})();
