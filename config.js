var config = {}

// http server listening port
config.port = 8540;

// local stats update time (itime over which stats will be averaged) in seconds
config.period = 5;

/* directory where debrief blockchain data is stored. Needs
   to be an absolute path, or a relative path from where the probe is run.
*/   
config.blockchainData = '/home/user/debrief/chains/testnet/';

module.exports = config;
