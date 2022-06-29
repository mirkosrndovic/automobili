/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    $(document).on('apiDataReady', function () {
        var distance = AT.apiData.distance,
            distanceFragment = distance / 10,
            roundedDistanceFragment = Math.round(distanceFragment),
            $trackHeader = $('.js-track-header');
            trackLength = $trackHeader[0].offsetWidth,
            trackFragmentLength = trackLength / 10;

        // Set header with gauges
        for (var i = 1; i < 10; i++) {
            $trackHeader.append($('<i class="js-distance-meter tfm" data-distance="' + i + '">' + i * roundedDistanceFragment + '</i>'));
        }

        var $distanceMeter = $('.js-distance-meter');
        $distanceMeter.css('width', trackFragmentLength);
           
    });

}());