process.env.EASYPOST_KEY = 'cueqNZUb3ldeWTNX7MU3Mel8UXtaAMUi'; // test key from Easypost repo

Tinytest.add('npm module required', function (test) {
  test.assert(Npm.require('node-easypost')(process.env.EASYPOST_KEY));
});
