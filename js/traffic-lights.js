/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    let $speedLimitSignsWrapper = $('.js-speed-limit-signs-wrapper');
    let speedLimitSignsWrapperWidth = $speedLimitSignsWrapper.width();

    $(document).on('apiDataReady', function () {
        let trafficLights = AT.apiData.traffic_lights,
            distance = AT.apiData.distance,
            trafficLightParams = [];

        for (let i = 0; i < trafficLights.length; i++) {
            let trafficLightPosition = trafficLights[i].position,
                trafficLightDuration = trafficLights[i].duration,
                signPositionKm = (speedLimitSignsWrapperWidth * trafficLightPosition) / distance, // if sign position is in kilometers
                signPositionPercent = (speedLimitSignsWrapperWidth * trafficLightPosition) / 100, // if sign position is in percents                
                $sign = $(' \
                    <div class= "traffic-light-sign js-traffic-light-sign" style ="left: ' + signPositionKm + 'px;"> \
                        <div class="line"></div> \
                        <div class="traffic-lights-container"> \
                            <div class="red-traffic-light"></div> \
                            <div class="green-traffic-light"></div> \
                        </div> \
                    </div> \
                '),
                trafficLightParam = trafficLightParams[i];

            $speedLimitSignsWrapper.append($sign);

            trafficLightParam = {};
            trafficLightParam.trafficLightPosition = trafficLightPosition;

            // Changing lights
            setInterval(function () {
                $sign.toggleClass('active');

                if ($sign.hasClass('active')) {
                    trafficLightParam.light = "red";

                } else if (!$sign.hasClass('active')) {
                    trafficLightParam.light = "green";
                }

                $(document).trigger('trafficLightChanged', trafficLightParam);
            }, trafficLightDuration);
        }
    });

}());