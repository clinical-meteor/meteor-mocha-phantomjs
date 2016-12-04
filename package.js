Package.describe({
  name: "clinical:mocha-phantomjs",
  summary: "Run package or app tests with Mocha+PhantomJS and report all results in the server console",
  git: "https://github.com/clinical-meteor/meteor-mocha-phantomjs.git",
  version: '0.1.9',
  testOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'practicalmeteor:mocha-core@1.0.0',
    'ecmascript'
  ]);

  api.use([
    'clinical:phantomjs-tests@0.1.0'
  ], 'server');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
