//caso precise, colocar o javascript aqui.
$('.novo-cliente').bind('click', function(event) {
    $('.article').load("cadastrarCliente.html");
});
$('form').bind('submit', function(event) {
    event.preventDefault();
    $('.article').load("clientes.html");
    alert('Um novo registro foi realizado com sucesso');
});
$(document).ready(function() {
     $('#telefoneCliente').mask('(00) 0000-0000');
});