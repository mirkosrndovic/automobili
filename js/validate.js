/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    $(document).on('dataShown', function () {
        var $inputs = $('.js-validate-input');
        
        AT.valid = false;

        for (var i = 0; i < $inputs.length; i++) {
            var $input = $($inputs[i]);
            var required = $input.attr('required');
            var isRequired = false;
            var inputId = "#" + $input.attr('id');

            // For some browsers, `attr` is undefined; for others,
            // `attr` is false.  Check for both.
            if (typeof required !== typeof undefined && required !== false) {
                isRequired = true;
            }

            $input.on('blur', function (e) {
                e.preventDefault;                
                
                if ($(inputId).val() === "" && isRequired === true) {
                    $input.addClass('error');
                    AT.valid = false;
                } else {
                    $input.removeClass('error');
                    AT.valid = true;
                }
            });
        }
    });

}());