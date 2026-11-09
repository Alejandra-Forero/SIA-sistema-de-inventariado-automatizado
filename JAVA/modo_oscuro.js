
const btnTema = document.getElementById("btnTema");
const htmlEl = document.documentElement; // la etiqueta <html>
// Al cargar la página, aplicamos el tema guardado (si existe)
const temaGuardado = localStorage.getItem("tema") || "light";
htmlEl.setAttribute("data-bs-theme", temaGuardado);

btnTema.addEventListener("click", () => {
const temaActual = htmlEl.getAttribute("data-bs-theme");
const nuevoTema = temaActual === "light" ? "dark" : "light";
htmlEl.setAttribute("data-bs-theme", nuevoTema);
localStorage.setItem("tema", nuevoTema); // se recuerda para la próxima visita
});

