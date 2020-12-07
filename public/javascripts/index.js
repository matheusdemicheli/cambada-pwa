$(document).ready(function() {
    $('#trocar-frase').click(ajax_frase_aleatoria);   
    if($('.autor').text() == ""){
        ajax_frase_aleatoria();
    }
})

function ajax_frase_aleatoria(){
    $.ajax({
        url: "http://matheusmonego.pythonanywhere.com/frases_historicas/aleatoria/",
        data: {},
        type: "GET",
        success: function(response) {
            $('.autor').text(response['autor']);
            $('.data').text(response['data']);
            $('.frase').text(response['texto']);
        },
    })
  }