'use strict';

/*eslint-env es6*/
const Server = require('karma').Server;

class KarmaPlugin {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.karma;
  }

  onCompile() {
    if (this.config && !this.server) {
      //start karma
      this.server = new Server(this.config);
      this.server.start();
    }
  }

}

KarmaPlugin.prototype.brunchPlugin = true;
KarmaPlugin.prototype.extension = 'js';

module.exports = KarmaPlugin;
