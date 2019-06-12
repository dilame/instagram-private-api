import 'dotenv/config';
import { IgApiClient } from '../src';
const shttps = require('socks5-https-client/lib/Agent'); // you should install SOCKS5 client via: npm i socks5-https-client

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.request.defaults.agentClass = shttps; // apply agent class to request library defaults
  ig.request.defaults.agentOptions = {
      socksHost: '127.0.0.1', // proxy hostname
      socksPort: 8000 // proxy port
  };
  // Now we can perform authorization using our SOCKS5 proxy.
  const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  // Do your things.
})();
