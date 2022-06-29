/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    var $carsWrapper = $('.js-cars-wrapper');

    $(document).on('apiDataReady', function () {
        var cars = AT.apiData.cars;
        var numberForLast = cars.length - (cars.length % 3);

        for (var i = 0; i < cars.length; i++) {
            var car = cars[i],
                $box = $('<div class="js-box box"></div>'),
                $imageWrapper = $('<div class="image-wrapper"></div>')
                $image = $('<img class="car-image" src="' + car.image + '" alt="' + car.name + '">'),
                $name = $('<h3 class="car-name js-name">' + car.name + '</h3>');
                $check = $('<input class="js-select select-car" type="checkbox" data-id="' + car.id + '" data-speed="' + car.speed + '">');

            if (i >= numberForLast) {
                $box.addClass('last-row');
            }

            $imageWrapper.append($image);
            $box.append($imageWrapper).append($name).append($check);
            $carsWrapper.append($box);
        }

        $(document).trigger('dataShown');
    });

}());