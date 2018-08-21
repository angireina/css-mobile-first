function cerrar () {
    var menu = document.getElementById('nav');
    menu.className = 'menu-closed';
    console.log('cerrando');
}

function abrir() {
    var menu = document.getElementById('nav');
    menu.className = 'menu-opened';
    console.log('abriendo');
}
