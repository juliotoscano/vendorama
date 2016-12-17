$('.novo-ciclo').bind('click', function(event) {
    $('.article').load("cadastrarCiclo.html");
});
$('form').bind('submit', function(event) {
    event.preventDefault();
    $('.article').load("ciclo.html");
    alert('Um novo registro foi realizado com sucesso');
});