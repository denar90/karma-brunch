'use strict';

/*eslint-env es6*/
const Server = require('karma').Server;

class KarmaPlugin {
  constructor(config) {
    if (config == null) config = {};
    this.config = config.plugins && config.plugins.karma || config;
  }

  onCompile() {
    if (this.config) {
      //start karma
      new Server(this.config).start();
    }
  }
}

KarmaPlugin.prototype.brunchPlugin = true;
KarmaPlugin.prototype.extension = 'js';

module.exports = KarmaPlugin;
