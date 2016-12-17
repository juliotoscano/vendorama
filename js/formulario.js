$(function(){
    //renderizando formulario
    $('form').bind('submit', function(event) {
        event.preventDefault();
        $('.article').load("home.html");
        alert('Um novo registro foi realizado com sucesso');
    });
});

