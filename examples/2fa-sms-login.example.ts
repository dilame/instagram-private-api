import { IgApiClient, IgLoginTwoFactorRequiredError } from '../src';
import { get } from 'lodash';
import * as Bluebird from 'bluebird';
import inquirer = require('inquirer');

// Return logged in user object
(async () => {
  // Initiate Instagram API client
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;

  // Perform usual login
  // If 2FA is enabled, IgLoginTwoFactorRequiredError will be thrown
  return Bluebird.try(() => ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD)).catch(
    IgLoginTwoFactorRequiredError,
    async err => {
      const twoFactorIdentifier = get(err, 'response.body.two_factor_info.two_factor_identifier');
      if (!twoFactorIdentifier) {
        throw new Error('Unable to login, no 2fa identifier found');
      }
      // At this point a code should have been received via SMS
      // Get SMS code from stdin
      const { code } = await inquirer.prompt([
        {
          type: 'input',
          name: 'code',
          message: 'Enter code',
        },
      ]);
      // Use the code to finish the login process
      return ig.account.twoFactorLogin({
        username: process.env.IG_USERNAME,
        verificationCode: code,
        twoFactorIdentifier,
        verificationMethod: '1', // '1' = SMS (default), '0' = OTP
        trustThisDevice: '1', // Can be omitted as '1' is used by default
      });
    },
  );
})();
