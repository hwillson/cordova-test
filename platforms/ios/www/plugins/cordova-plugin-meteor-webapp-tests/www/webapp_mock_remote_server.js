cordova.define("cordova-plugin-meteor-webapp-tests.WebAppMockRemoteServer", function(require, exports, module) {
module.exports = {
  serveVersion: function(version, callback) {
    cordova.exec(
      callback,
      console.error,
      "WebAppMockRemoteServer",
      "serveVersion",
      [version]);
  },

  receivedRequests: function(callback) {
    cordova.exec(
      callback,
      console.error,
      "WebAppMockRemoteServer",
      "receivedRequests",
      []);
  }
};

});
