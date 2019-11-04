
module.exports = {
    initialize: function (request, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "initialize", [request]);
    },
    prepareDevice: function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "prepareDevice", []);
    },
    cardTransaction: function (request, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "cardTransaction", [request]);
    },
    upiTransaction: function (request, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "upiTransaction", [request]);
    },
    qrCodeTransaction: function (request, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "qrCodeTransaction", [request]);
    },
    voidTransaction: function (txnId, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "voidTransaction", [txnId]);
    },
    getTransaction: function (etxnId, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "getTransaction", [etxnId]);
    },
    checkForIncompleteTransaction: function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "checkForIncompleteTransaction", []);
    },
    close: function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "close", []);
    }

}
