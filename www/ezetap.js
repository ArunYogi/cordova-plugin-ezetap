
module.exports.startPayment = function (request, successCallback, failureCallback) {
    cordova.exec(successCallback, failureCallback, "EzeAPIPlugin", "initialize", [request]);
}
