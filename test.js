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

describe('Plugin', () => {
  let plugin;

  before(() => {
    plugin = new Plugin(karmaConf);
  });

  it('should be an object', () => {
    expect(plugin).to.be.ok;
  });

  describe('Karma PhantomJS', () => {
    before(() => {
      karmaConf.browsers = [karmaBrowsers.PhantomJS];
      plugin = new Plugin(karmaConf);
      plugin.onCompile();
    });
    it('should run with PhantomJS', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma PhantomJS', () => {
    before(() => {
      karmaConf.browsers = [karmaBrowsers.PhantomJS];
      plugin = new Plugin(karmaConf);
      plugin.onCompile();
    });
    it('should run with PhantomJS', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma mocha', () => {
    before(() => {
      karmaConf.frameworks = [karmaFrameworks.mocha];
      plugin = new Plugin(karmaConf);
      plugin.onCompile();
    });
    it('should run with mocha', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma jasmine', () => {
    before(() => {
      karmaConf.frameworks = [karmaFrameworks.jasmine];
      plugin = new Plugin(karmaConf);
      plugin.onCompile();
    });
    it('should run with jasmine', () => {
      expect(plugin).to.be.ok;
    });
  })

  describe('Karma coverage', () => {
    before(() => {
      karmaConf.reporters = [karmaReporters.coverage];
      plugin = new Plugin(karmaConf);
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
      plugin = new Plugin(karmaConf);
      plugin.onCompile();
    });
    it('should run with coveralls', () => {
      expect(plugin).to.be.ok;
    });
  })
});