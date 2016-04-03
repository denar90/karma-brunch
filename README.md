## karma-brunch
Adds karma support to
[brunch](http://brunch.io).

## Usage
Install the plugin via npm with `npm install --save karma-brunch`.

Or, do manual install:

* Add `"karma-brunch": "~x.y.z"` to `package.json` of your brunch app.
* If you want to use git version of plugin, use the GitHub URI
`"karma-brunch": "denar90/karma-brunch"`.

###Config example with karma
```javascript

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app|test)/,
        'app.js': /^app/,
        'test.js': /^test/
      }
    },
    stylesheets: {joinTo: 'app.css'},
  },
  modules: {
    autoRequire: {
      'test.js': ['test/specs']
    }
  },
  plugins: {
    babel: {presets: ['es2015']},
    karma: {
      singleRun: true,
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai'],
      files: [
        "public/test.js"
      ]
    }
  }
};
```

## Supported karma frameworks

- [karma-mocha](https://github.com/karma-runner/karma-mocha)
- [karma-chai-plugins](https://github.com/princed/karma-chai-plugins)
- [karma-jasmine](https://github.com/karma-runner/karma-jasmine)
- [karma-coverage](https://github.com/karma-runner/karma-coverage)
- [karma-coveralls](https://github.com/caitp/karma-coveralls)
- [karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher)

## License

The MIT License (MIT)