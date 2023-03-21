const btn = document.querySelector('.btn');
const links = document.querySelector('.links');
const icono = document.querySelector('.icono');

btn.addEventListener('click', () => {
    links.classList.toggle('show-links');
    cambiarIcono();   
    
});


let estado = 0;
function cambiarIcono() {
    const cerrar = 'assets/images/icon-menu-close.svg';
    const abrir = 'assets/images/icon-menu.svg';
    if (estado === 1) {
        icono.src = abrir;
        estado = 0;
    } else {
        icono.src = cerrar;
        estado = 1;
    }
}