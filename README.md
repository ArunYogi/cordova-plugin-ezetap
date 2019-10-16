# Cordva Plugin Ezetap

A Cordova plugin to use Ezetap POS machine for card payment.

## Installation

```bash
cordova plugin add https://github.com/ArunYogi/cordova-plugin-ezetap.git
```

On successful installation of this plugin, it would be availble as "Ezetap" (as global variable). Mention below line in top of TS of JS file you are going access this plugin

```js
declare var Ezetap :any
```

sample request

```js
{
"demoAppKey": "",
"prodAppKey": "",
"merchantName": "",
"userName":"",
"currencyCode": "INR",
"appMode": "DEMO",
"captureSignature": "false",
"prepareDevice" : "false"
}
```

then you can start the payment capture by calling 'startPayment' method.

```js
var successcallback = (result) => { console.log(result)};
var errorCallback = (err) => {console.error(err)};
Ezetap.startpayment(request, successcallback, errorCallback);
```

Demo App key and Production app key will provided by Ezetap Team. (Contact Ezetap integration team for those details)
