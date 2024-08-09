// IMAGEN DE FONDO
// ¡¡LA IMAGEN DEBE CARGARSE FUERA DEL EVENT LISTENER SIEMPRE!!
document.getElementById('parallax').style.backgroundImage = "url('../img/alexander-psiuk-utfiDJBebHw-unsplash.jpg')"

// FUNCION PARA CONTROLAR LA VELOCIDAD DEL SCROLL
window.addEventListener('scroll', function(){
    let parallax = document.getElementById('parallax')
    let scrollPosition = this.window.scrollY
    // CAMBIAR POSICION DE LA IMG EN FUNCION DEL SCROLL, EL 0.7 CAMBIA LA VELOCIDAD
    parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px'
})