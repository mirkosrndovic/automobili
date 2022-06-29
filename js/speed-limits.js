/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    let $speedLimitSignsWrapper = $('.js-speed-limit-signs-wrapper');
    let speedLimitSignsWrapperWidth = $speedLimitSignsWrapper.width();

    $(document).on('apiDataReady', function () {
        let speedLimits = AT.apiData.speed_limits,
            distance = AT.apiData.distance;

        for (let i = 0; i < speedLimits.length; i++) {
            let speedLimit = speedLimits[i].speed,
                signPositionKm = (speedLimitSignsWrapperWidth * speedLimits[i].position) / distance, // if sign position is in kilometers
                signPositionPercent = (speedLimitSignsWrapperWidth * speedLimits[i].position) / 100, // if sign position is in percents
                sign = `
                <div class="speed-limit-sign" style="left: ${signPositionKm}px;">
                    <div class="line"></div>
                    <div class="red-circle">
                        <div class="number">${speedLimit}</div>
                    </div>
                </div>`;
                
            $speedLimitSignsWrapper.append(sign);
        }
    });

}());