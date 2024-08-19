const exec = require("cordova/exec");

module.exports = {
  getCordovaIntent: (successCallback, failureCallback) => {
    return exec(
      successCallback,
      failureCallback,
      "IntentPlugin",
      "getCordovaIntent",
      [],
    );
  },

  setNewIntentHandler: (method) => {
    exec(method, null, "IntentPlugin", "setNewIntentHandler", [method]);
  },

  getRealPathFromContentUrl: (uri, successCallback, failureCallback) => {
    exec(
      successCallback,
      failureCallback,
      "IntentPlugin",
      "getRealPathFromContentUrl",
      [uri],
    );
  },
};
