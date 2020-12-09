$(document).ready(function() {
    /*
    Funções executadas no ready da página.
    */
    side_bar_width = $('#mySidebar').width();
    closeSidebar();
    $(window).click(verifica_click);
})

function verifica_click(event){
    /*
    Verifica se o menu está aberto e houve um clique fora dele, nesse caso 
    fecha o menu.
    */
    var click_menu = event.target.classList.contains('menu');
    var click_item_menu = event.target.classList.contains('item-menu');
    var click_open_menu = Boolean(event.target.id == 'openMenu');

    if (!click_menu && !click_open_menu && !click_item_menu){
        closeSidebar();
    }
}

function checkSidebar() {
    /*
    Verifica se a barra lateral está exibida ou escondida, e inverte o seu
    estado.
    */
    var side_bar = $('#mySidebar');    
    if (side_bar.width() > 0){
        closeSidebar();
    }
    else {
        openSideBar();   
    }
}

function closeSidebar() {
    /*
    Fecha o menu.
    */
    var side_bar = $('#mySidebar');
    side_bar.animate({width: 0});
}

function openSideBar() {
    /*
    Abre o menu
    */
    var side_bar = $('#mySidebar');
    side_bar.show();
    side_bar.animate({width: side_bar_width});
}