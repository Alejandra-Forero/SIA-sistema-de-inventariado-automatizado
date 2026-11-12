const inputPassword = document.getElementById("password");
const inputConfirmar = document.getElementById("confirmarPassword");

// Funcionalidad 1: mostrar/ocultar contraseña (sirve para cada campo)
function activarOjo(idInput, idBoton, idIcono) {
    const input = document.getElementById(idInput);
    const boton = document.getElementById(idBoton);
    const icono = document.getElementById(idIcono);
    if (!input || !boton || !icono) return;

    boton.addEventListener("click", () => {
        const esPassword = input.type === "password";
        input.type = esPassword ? "text" : "password";
        icono.classList.toggle("bi-eye");
        icono.classList.toggle("bi-eye-slash");
    });
}

activarOjo("password", "btnVerPassword", "iconoVerPassword");
activarOjo("confirmarPassword", "btnVerConfirmar", "iconoVerConfirmar");

// Funcionalidad 3: indicador de fortaleza
const barraFortaleza = document.getElementById("barraFortaleza");
const textoFortaleza = document.getElementById("textoFortaleza");

function calcularFortaleza(password) {
    let puntaje = 0;
    if (password.length >= 8) puntaje++;
    if (/[A-Z]/.test(password)) puntaje++;
    if (/[0-9]/.test(password)) puntaje++;
    if (/[^A-Za-z0-9]/.test(password)) puntaje++;
    return puntaje; // de 0 a 4
}

if (inputPassword && barraFortaleza && textoFortaleza) {
    inputPassword.addEventListener("input", () => {
        const puntaje = calcularFortaleza(inputPassword.value);
        const porcentaje = (puntaje / 4) * 100;

        const niveles = ["Muy débil", "Débil", "Media", "Fuerte", "Muy fuerte"];
        const colores = ["#dc3545", "#dc3545", "#ffc107", "#0dcaf0", "#198754"];

        barraFortaleza.style.width = `${porcentaje}%`;
        barraFortaleza.style.backgroundColor = colores[puntaje];
        textoFortaleza.textContent = inputPassword.value ? niveles[puntaje] : "";
    });
}

// Confirmación: que las dos contraseñas coincidan
const textoCoincide = document.getElementById("textoCoincide");

function revisarCoincidencia() {
    if (!inputConfirmar || !textoCoincide) return true;
    if (inputConfirmar.value === "") {
        textoCoincide.textContent = "";
        return false;
    }
    const coincide = inputPassword.value === inputConfirmar.value;
    textoCoincide.textContent = coincide ? "Las contraseñas coinciden" : "Las contraseñas no coinciden";
    textoCoincide.style.color = coincide ? "#198754" : "#dc3545";
    return coincide;
}

if (inputPassword && inputConfirmar) {
    inputPassword.addEventListener("input", revisarCoincidencia);
    inputConfirmar.addEventListener("input", revisarCoincidencia);

    inputConfirmar.closest("form").addEventListener("submit", (e) => {
        if (!revisarCoincidencia()) {
            e.preventDefault();
            inputConfirmar.focus();
        }
    });
}