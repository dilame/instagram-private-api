/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
const axios = require('axios'); // axios is used for this example, but you can use any library that you want

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  console.log(JSON.stringify(auth));

  // getting random square image from internet
  const imageRequest = await axios.get('https://picsum.photos/800/800', {
    responseType: 'arraybuffer'
  });
  
  // converting image to buffer
  const imageBuffer = Buffer.from(imageRequest.data, 'binary');

  const publishResult = await ig.publish.photo({
    file: imageBuffer, // image buffer, you also can specify image from your disk using fs
    caption: 'Really nice photo from the internet! 🏖️' // nice caption (optional)
  });
  
  console.log(publishResult); // publishResult.status should be "ok"
})();
