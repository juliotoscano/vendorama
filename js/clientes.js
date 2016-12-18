//caso precise, colocar o javascript aqui.
$('.novo-cliente').bind('click', function(event) {
    $('.article').load("cadastrarCliente.html");
});
$('form').bind('submit', function(event) {
    event.preventDefault();
    $('.article').load("ciclo.html");
    alert('Um novo registro foi realizado com sucesso');
});