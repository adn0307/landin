// Selecciona todos los botones del menú
const botones = document.querySelectorAll('.menu-btn');

// Cuando hago clic en alguno
botones.forEach(boton => {
    boton.addEventListener('click', () => {

        // Quitar el "active" de todos
        botones.forEach(b => b.classList.remove('active'));

        // Agregar "active" al botón que se clickeó
        boton.classList.add('active');
    });
});
