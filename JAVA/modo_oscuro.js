(function () {
  // Aplicar el tema guardado ANTES de pintar la página
  const temaGuardado = localStorage.getItem("tema") || "light";
  document.documentElement.setAttribute("data-bs-theme", temaGuardado);

  // Conectar el botón solo si existe
  document.addEventListener("DOMContentLoaded", () => {
    const btnTema = document.getElementById("btnTema");
    if (!btnTema) return; // páginas sin botón: no pasa nada, pero el tema sí se aplica

    btnTema.addEventListener("click", () => {
      const htmlEl = document.documentElement;
      const temaActual = htmlEl.getAttribute("data-bs-theme");
      const nuevoTema = temaActual === "light" ? "dark" : "light";
      htmlEl.setAttribute("data-bs-theme", nuevoTema);
      localStorage.setItem("tema", nuevoTema);
    });
  });
})();
