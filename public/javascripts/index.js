$(document).ready(function() {
    /**
     * Funções que serão executadas no ready da página. 
     */
    ajax_frase_aleatoria();
    $('#trocar-frase').click(ajax_frase_aleatoria);
})

function ajax_frase_aleatoria(){
    /**
     * Busca uma frase aleatória do servidor 
     */
    exibir_loading();
    $.ajax({
        url: "https://matheusmonego.pythonanywhere.com/frases_historicas/aleatoria/",
        data: {},
        type: "GET",
        success: function(response) {
            $('.autor').text(response['autor']);
            $('.data').text(response['data']);
            $('.frase').html(response['texto']);
            exibir_conteudo();
        },
    })
}

function exibir_loading(){
    /**
     * Esconde conteúdo atual e exibe gif de loading.
     */
    var img_loading = $('#gif_load').clone();
   
    $('#conteudo div').hide();
    $('#conteudo .autor').after(img_loading);
    img_loading.show();
}

function exibir_conteudo(){
    /**
     * Esconde o gif de loading e exibe o conteúdo.
     */
    $('#conteudo img').remove();
    $('#conteudo div').show();
}