$(document).ready(function() {
    //Barra de escolha das opções do breadcrumb
    $('.selected').parent().find('p').css('color', 'white').css('font-weight','bold');
    //Notificações na home
    $('.notification h4').css('text-align','center');

    $('.menu-option').bind('click', function(event) {
        $('.selected').parent().find('p').css('color', '#EEEEEE').css('font-weight','normal');
        $('#breadcrumb').find('.selected').removeClass('selected');
        $(this).find('div').addClass('selected');
        $('.selected').parent().find('p').css('color', 'white').css('font-weight','bold');
        var i = $('.selected').attr('id');
        if (i == 'option_2') {
            $('.article').load("ciclo.html");
        }else{
            if (i == 'option_1') {
               $('.article').load("home.html");
            }else{
                $('.article').load("clientes.html");
            }
        }
    });

    //Carregar formularios.
    var option_menu = $('.selected');
    var option_id = $(option_menu).attr('id');
    if (option_id == 'option_1') {
        $('.article').load("home.html");
        //$('.article').load("formulario.html");
    }else{};
});
