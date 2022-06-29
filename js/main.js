/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    $(document).on('apiDataReady', function () {
        // console.log(AT.apiData);
    });


    $(document).on('trafficLightChanged', function (e, trafficLightParams) {
        // console.log(trafficLightParams);
    });

}());