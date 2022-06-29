/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    $(document).on('dataShown', function () {
        var $start = $('.js-start');

        $start.on('click', function (e) {
            e.preventDefault;

            var speeds = [],
                $tracks = $('.js-track'),
                tracksWidth = $tracks.width(),
                subjectEndPosition = tracksWidth - 30 + "px",
                animationSpeedMultiplier = $('#animationSpeedInput').val(),
                $animationSubject = $tracks.find('.js-subject'),
                winnersArray = [],
                counter = 0;

            // Reset values for repeated click on START    
            $tracks.removeClass('finished');
            $('.js-track[class*="position-"]').removeClass(function (index, css) {
                return (css.match(/(^|\s)position-\S+/g) || []).join(' ');
            });
            $animationSubject.stop(true).css('left', '0');

            // Validation
            if (AT.valid === false) {
                alert('Brzina animacije je obavezno polje');
                $('.js-validate-input').addClass('error');
                return false;
            }

            if ($tracks.length === 0) {
                alert('Odaberite auto');
                return false;
            }

            // Get selected and move them to the right
            for (var i = 0; i < $tracks.length; i++) {
                var $track = $($tracks[i]),
                    id = $track.data('track-id'),
                    speed = $track.data('speed'),
                    $subject = $track.find('.js-subject');

                speeds.push(speed);
                
                var distance = AT.apiData.distance,
                    kms = speed / 3600,
                    animationSpeed = ((distance / kms) * 1000) / animationSpeedMultiplier;                

                $subject.css('left', '0px').animate({
                    'left': subjectEndPosition
                }, {
                    duration: animationSpeed,
                    easing: 'linear',
                    complete: function () {
                        var $winner = $('.js-subject[style="left: ' + subjectEndPosition + ';"]');
                        var $winnerTrack = $winner.closest('.js-track');

                        for (var i = 0; i < $winnerTrack.length; i++) {
                            if (!($($winnerTrack[i]).hasClass('finished'))) {
                                winnersArray.push($winnerTrack[i]);
                            }
                        }

                        $winnerTrack.addClass('finished');

                        $(winnersArray[counter]).addClass('position-' + counter);
                        counter++;
                    }
                });
            }
        });
    });

}());