$(document).ready(function() {
    /* 
    Funções que serão executadas no ready da página. 
    */
    ajax_frase_do_dia();
})

function ajax_frase_do_dia(){
    /* 
    Busca a frase do dia.
    */
    $.ajax({
        url: "http://matheusmonego.pythonanywhere.com/frases_historicas/dia/",
        data: {},
        type: "GET",
        success: function(response) {
            $('.autor').text(response['autor']);
            $('.data').text(response['data']);
            $('.frase').html(response['texto']);
        },
    })
}