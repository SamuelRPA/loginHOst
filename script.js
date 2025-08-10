document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Credenciales hardcodeadas
    const userDB = "admin";
    const passDB = "1234";

    if (usuario === userDB && contrasena === passDB) {
        document.getElementById("mensaje").style.color = "green";
        document.getElementById("mensaje").textContent = "¡Inicio de sesión exitoso!";
        setTimeout(function() {
            window.location.href = "bienvenido.html";
        }, 1200); // Espera 1.2 segundos antes de redirigir
    } else {
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("mensaje").textContent = "Usuario o contraseña incorrectos";
    }
});
