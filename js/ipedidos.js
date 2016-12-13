$(document).ready(function() {

    $('.menu-option').bind('click', function(event) {
    $('#breadcrumb').find('.selected').removeClass('selected');
    $(this).find('div').addClass('selected');
    });

});
