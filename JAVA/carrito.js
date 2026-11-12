let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function guardar() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrar();
}

function agregar(id, nombre, precio) {
    const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }
  guardar();
}

function quitar(id) {
    carrito = carrito.filter(p => p.id !== id);
    guardar();
}

function mostrar() {
    const lista = document.getElementById('listaCarrito');
    const total = document.getElementById('totalCarrito');
    const contador = document.getElementById('contadorCarrito');
    const vacio = document.getElementById('carritoVacio');
  if (!lista) return;

  lista.innerHTML = '';

  carrito.forEach(p => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${p.nombre} x${p.cantidad} — $${(p.precio * p.cantidad).toLocaleString('es-CO')}
        <button class="btn btn-sm btn-outline-danger" onclick="quitar('${p.id}')">X</button>
      </li>`;
  });

  const suma = carrito.reduce((a, p) => a + p.precio * p.cantidad, 0);
  total.textContent = '$' + suma.toLocaleString('es-CO');
  contador.textContent = carrito.reduce((a, p) => a + p.cantidad, 0);
  vacio.style.display = carrito.length === 0 ? 'block' : 'none';
}

mostrar();
