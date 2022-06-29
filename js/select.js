/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    $(document).on('dataShown', function () {
        // Clicking anywhere on box item gets selected / unselected
        $('.js-box').on('click', function () {
            $(this).find('.js-select').trigger('click');
        });

        // Stopping checkbox to turn off itself and adding selected class on parent box
        $('.js-select').on('click', function (e) {
            e.stopPropagation();

            var $this = $(this),
                $thisBox = $this.closest('.js-box'),
                cars = AT.apiData.cars,
                $trackWrapper = $('.js-tracks'),
                id = $this.data('id'),
                speed = $this.data('speed'),
                imgSrc = null;            

            if ($this.prop('checked') === false) {
                $thisBox.removeClass('selected');

                $('.js-track[data-track-id="' + id + '"]').remove();

            } else if ($this.prop('checked') === true) {
                $thisBox.addClass('selected');

                for (var i = 0; i < cars.length; i++) {
                    if (parseInt(cars[i].id, 10) === parseInt(id, 10)) {
                        imgSrc = cars[i].image;
                    }
                }

                // Building HTML for tracks
                var $track = $('<div class="js-track track" data-track-id="' + id + '" data-speed="' + speed + '"></div>');
                var $trackImageWrapper = $('<div class="track-image-wrapper js-subject"></div>');
                var $image = $('<img class="track-img" src="' + imgSrc + '">');

                $trackImageWrapper.append($image);
                $track.append($trackImageWrapper);
                $trackWrapper.append($track);

                // Adding 10 "separators" to track
                var trackLength = $('.js-track')[0].offsetWidth,
                    trackFragmentLength = trackLength / 10;

                for (var n = 0; n < 10; n++) {
                    $track.append($('<i class="js-tf tf"></i>'));
                }               

                // Giving proper width to "separators"
                var $fragment = $('.js-tf');
                $fragment.css('width', trackFragmentLength);
            }
        });
    });

}());