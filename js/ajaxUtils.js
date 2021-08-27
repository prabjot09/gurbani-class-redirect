(function (global) {

    var ajaxUtils = {};

    function createReqObject() {
        if (global.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else {
            console.log("AJAX Request Object Not Supported");
            return null;
        }
    }

    function responseHandler (request, responseFunc, isJSONString) {
        if ((request.readyState == 4) && (request.status == 200)) {
            if (isJSONString == undefined || isJSONString == true) {
                responseFunc(JSON.parse(request.responseText));
            }
            else {
                responseFunc(request.responseText);
            }
        }
    }

    ajaxUtils.sendGetRequest = function (requestURL, responseFunc, isJSONString) {
        var request = createReqObject();
        request.onreadystatechange = function () {
            responseHandler(request, responseFunc, isJSONString);
        };
        request.open("GET", requestURL, true);
        request.send(null);
    }

    global.$ajaxUtils = ajaxUtils;

}) (window);