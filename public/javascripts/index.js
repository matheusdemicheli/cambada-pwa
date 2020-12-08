$(document).ready(function() {
    /* 
    Funções que serão executadas no ready da página. 
    */
    closeSidebar();
    $('#trocar-frase').click(ajax_frase_aleatoria);   
    if($('.autor').text() == ""){
        ajax_frase_aleatoria();
    }
})

function ajax_frase_aleatoria(){
    /* 
    Busca uma frase aleatória do servidor 
    */
    $.ajax({
        url: "http://matheusmonego.pythonanywhere.com/frases_historicas/aleatoria/",
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