'use strict';

const expect = require('chai').expect;
const Plugin = require('./');

//karma settings
const karmaBrowsers = {
  PhantomJS: 'PhantomJS'
};
const karmaReporters = {
  coverage: 'coverage',
  coveralls: 'coveralls'
};
const karmaFrameworks = {
  mocha: 'mocha',
  chai: 'chai',
  jasmine: 'jasmine'
};
let karmaConf = {
  singleRun: true
};

const getConfig = function(karmaConf) {
  return {
    plugins: {
      karma: karmaConf
    }
  };
}

describe('Plugin', () => {
  let plugin;

  before(() => {
    plugin = new Plugin(getConfig(karmaConf));
  });

  beforeEach(() => {
    //set default config for each spec
    karmaConf = {
      singleRun: true
    };
  });

  it('should be an object', () => {
    expect(plugin).to.be.ok;
  });

  describe('Karma PhantomJS', () => {
    before(() => {
      karmaConf.browsers = [karmaBrowsers.PhantomJS];
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should run with PhantomJS', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma chai', () => {
    before(() => {
      karmaConf.karmaFrameworks = [karmaFrameworks.chai];
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should run with chai', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma mocha', () => {
    before(() => {
      karmaConf.frameworks = [karmaFrameworks.mocha];
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should run with mocha', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma jasmine', () => {
    before(() => {
      karmaConf.frameworks = [karmaFrameworks.jasmine];
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should run with jasmine', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma coverage', () => {
    before(() => {
      karmaConf.reporters = [karmaReporters.coverage];
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should run with coverage', () => {
      expect(plugin).to.be.ok;
    });
  })
  describe('Karma coveralls', () => {
    before(() => {
      karmaConf.reporters = [
        karmaReporters.coverage,
        karmaReporters.coveralls
      ];
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should run with coveralls', () => {
      expect(plugin).to.be.ok;
    });
  })
  describe('Karma server', () => {
    before(() => {
      plugin = new Plugin(getConfig(karmaConf));
      plugin.onCompile();
    });
    it('should not be recreated on each compile', () => {
      let server = plugin.server;

      plugin.onCompile();
      expect(plugin.server).to.equal(server);
    });
  })
});
