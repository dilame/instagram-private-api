import { IgApiClient } from '../src';
import { get } from 'lodash';

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  // Initiate Instagram API client
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;

  let loggedInUser;
  try {
    // Perform usual login
    loggedInUser = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  } catch (e) {
    // If 2FA is enabled, IgLoginTwoFactorRequiredError will be thrown
    // Skip if another type of error is thrown
    if (e.name !== 'IgLoginTwoFactorRequiredError') {
      throw e;
    }
    // Check response contains identifier
    const twoFactorIdentifier = get(e, 'response.body.two_factor_info.two_factor_identifier');
    if (!twoFactorIdentifier) {
      throw new Error('Unable to login, no 2fa identifier found');
    }
    // At this point a code should have been received via SMS
    // Get SMS code from stdin
    const code = await getStdinData('Sms code-> ');
    // Use the code to finish the login process
    loggedInUser = await ig.account.twoFactorLogin({
      username: process.env.IG_USERNAME,
      verificationCode: code,
      twoFactorIdentifier,
      verificationMethod: '1', // '1' = SMS, can be omitted as '1' is used by default
      trustThisDevice: '1', // Can be omitted as '1' is used by default
    });
  }

  return loggedInUser;
})();

// Request for a value from stdin and return it
function getStdinData(message: string): Promise<string> {
  return new Promise(resolve => rl.question(message, resolve));
}
