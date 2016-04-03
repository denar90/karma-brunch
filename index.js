'use strict';

/*eslint-env es6*/
const Server = require('karma').Server;
let server;

class KarmaPlugin {
  constructor(config) {
    config = config || config.plugins || config.plugins.karma;
    server = new Server(config);
  }

  onCompile() {
    //start karma
    server.start();
  }
}

KarmaPlugin.prototype.brunchPlugin = true;
KarmaPlugin.prototype.extension = 'js';

module.exports = KarmaPlugin;
