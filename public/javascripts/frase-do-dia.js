$(document).ready(function() {
    /* 
    Funções que serão executadas no ready da página. 
    */
    closeSidebar();
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

function checkSidebar() {
    /*
    Verifica se a barra lateral está exibida ou escondida, e inverte o seu estado.
    */
    side_bar = $('#mySidebar');
    
    if (side_bar.css('display') == 'block'){
        side_bar.hide();
    }
    else {
        side_bar.show();
    }
}

function closeSidebar() {
    $('#mySidebar').hide();
}