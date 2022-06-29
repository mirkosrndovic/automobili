/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    $(document).on('dataShown', function () {
        var $seacrhInput = $('#searchInput'),
            $searchButton = $('#searchButton'),
            $box = $('.js-box');

        $seacrhInput.focus();

        $seacrhInput.on('keyup', function (e) {
            $this = $(this);

            
            if (e.which == 13) { // Enter key pressed
                $searchButton.trigger('click');
            } else if (e.which == 8) { // Backspace key pressed
                // Making sure that input value is ready after keyup
                setTimeout(function () { 
                    if ($this.val() === '') {
                        $searchButton.trigger('click');
                    } else {
                        $searchButton.trigger('click');
                    }
                }, 100);
            } else {
                setTimeout(function () {
                    $searchButton.trigger('click');
                }, 100);
            }            
        });        

        $searchButton.on('click', function (e) {
            e.preventDefault;

            var searchCriteria = $seacrhInput.val(),
                filter = searchCriteria.toUpperCase();

            for (var i = 0; i < $box.length; i++) {
                var name = $($box[i]).find('.js-name')[0].innerHTML.toUpperCase();
                
                if (name.indexOf(filter) > -1) {
                    $box[i].style.display = "";
                } else {
                    $box[i].style.display = "none";
                }
            }
        });
    });

}());