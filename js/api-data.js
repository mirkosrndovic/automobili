/**
 * Global namespace
 */
var AT = AT || {};

(function () {
    AT.apiData = {};

    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        success: function (data) {
            AT.apiData = data;
            $(document).trigger('apiDataReady');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

}());