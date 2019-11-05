# Cordva Plugin Ezetap

A Cordova plugin to use Ezetap POS machine for card payment.

## Installation

```bash
cordova plugin add cordova-plugin-ezetap
```

On successful installation of this plugin, the plugin would be availble as "Ezetap" (as global variable). Mention below line in top of TS of JS file you are going access this plugin

```js
declare var Ezetap :any
```

## Steps:
1) Intialize the plugin by calling method "initialize". This method invocation helps in connecting with ezetap device and preparing the device for transaction
2) After successful initialization, you can start card transaction by calling method "cardTransaction" with payment related information.

## Initialization:
Sample request

```javascript
var request = {
    "demoAppKey": "aasdas",
    "prodAppKey": "dasas",
    "merchantName": "Ezetap",
    "userName":"1293123", #User name will be provided
    "currencyCode": "INR",
    "appMode": "DEMO",
    "captureSignature": "false",
    "prepareDevice" : "false"
    }

var successcallback = (result) => { 
    console.log(result);  
    # Do your thing 
};
var errorCallback = (err) => { 
    console.error(err); 
    # Do your thing
};
Ezetap.initialize(request, successcallback, errorCallback);
```

Response:
```js
     {
        "status": "success",
        "error": "",
        "result":{
            "message":"Initialize successful"
        }
    }
```

User Name, Demo App key and Production app key will provided by Ezetap Team. (Contact Ezetap integration team for those details)

## Card Transaction:

```javascript
    var request = {
        "amount": 00.00,
        "mode": "SALE", # Other possible values are "CASHBACK, CASH@POS"
        "options": {
            "amountCashback": 0.0,
            "amountTip": 0.0,
            "references": {
                    "reference1":"<unique Id>", #This should be unique for each transaction
                    "reference2":"",
                    "reference3":"",
                    "additionalReferences":["addlRef1","addlRef2"]
            },
            "customer": {"customer information"}
        },
    };

    var successcallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

    var errorCallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

Ezetap.cardTransaction(request, successcallback, errorCallback);
```

## Void Transaction:
Call this method incase you want to cancel the transaction (happened few moments before) or refund the transaction that has happened on the same day.

```javascript
    var txnId = "txn12321423423";

    var successcallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

    var errorCallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

Ezetap.voidTransaction(txnId, successcallback, errorCallback);
```

## Get Transaction:
You can get transaction details by calling this method
```javascript
    var etxnId = "2983d2p93d23";

    var successcallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

    var errorCallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

Ezetap.getTransaction(etxnId, successcallback, errorCallback);
```

## Close:
Close the interaction with ezetap device on app closure for better longitivity.
```javascript
    var successcallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

    var errorCallback = function(response){
        console.log(JSON.stringify(response));
        # Do your thing
    };

Ezetap.close(successcallback, errorCallback);
```

#### Reference:
https://sandbox.ezetap.com/static/docs-cordova.html <br>
https://github.com/ezetap/android-payments-sdk <br>
https://github.com/ezetap/client-sdk-android/tree/master/release
