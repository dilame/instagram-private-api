/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient, IgCheckpointError } from '../src';
import Bluebird = require('bluebird');
import inquirer = require('inquirer');

/**
 * This method won't catch all checkpoint errors
 * There's currently a new checkpoint used by instagram which requires 'web-support'
 */

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  Bluebird.try(async () => {
    const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    console.log(auth);
  }).catch(IgCheckpointError, async () => {
    console.log(ig.state.checkpoint); // Checkpoint info here
    await ig.challenge.auto(true); // Requesting sms-code or click "It was me" button
    console.log(ig.state.checkpoint); // Challenge info here
    const { code } = await inquirer.prompt([
      {
        type: 'input',
        name: 'code',
        message: 'Enter code',
      },
    ]);
    console.log(await ig.challenge.sendSecurityCode(code));
  }).catch(e => console.log('Could not resolve checkpoint:', e, e.stack));
})();
