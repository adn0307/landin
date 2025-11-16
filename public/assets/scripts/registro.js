document.getElementById("formRegistro").addEventListener("submit", function (event) {

    event.preventDefault(); // Evita envío si hay errores

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    let errores = [];

    // Validación del nombre
    if (nombre.length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres.");
    }

    // Validación del correo
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        errores.push("Ingresa un correo válido.");
    }

    // Validación de la contraseña
    if (contrasena.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres.");
    }

    // Mostrar errores en el HTML
    let boxErrores = document.getElementById("errores");
    boxErrores.innerHTML = "";

    if (errores.length > 0) {
        errores.forEach(function(error) {
            let p = document.createElement("p");
            p.textContent = error;
            p.style.color = "red";
            p.style.margin = "5px 0";
            boxErrores.appendChild(p);
        });
        return; // Detiene el envío
    }

    // Si todo está validado
    alert("Registro exitoso");

    // Redirige al login después del alert
    window.location.href = "login.html";
});
