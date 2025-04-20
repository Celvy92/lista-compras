let listaDeCompras = [];

const agregarProducto = () => {
  const productoInput = document.getElementById("productoInput");
  const producto = productoInput.value.trim();

  if (producto === "") {
    alert("Por favor, escribe un producto.");
    return;
  }

  // Evitar duplicados
  if (listaDeCompras.includes(producto.toLowerCase())) {
    alert("Este producto ya está en la lista.");
    return;
  }

  listaDeCompras.push(producto.toLowerCase());
  productoInput.value = "";
  mostrarLista();
};

const eliminarProducto = () => {
  const productoInput = document.getElementById("productoInput");
  const producto = productoInput.value.trim().toLowerCase();

  const index = listaDeCompras.indexOf(producto);
  if (index === -1) {
    alert("Producto no encontrado.");
    return;
  }

  listaDeCompras.splice(index, 1);
  productoInput.value = "";
  mostrarLista();
};

const mostrarLista = () => {
  const listaHTML = document.getElementById("lista");
  listaHTML.innerHTML = "";

  if (listaDeCompras.length === 0) {
    listaHTML.innerHTML = "<li>Tu lista está vacía.</li>";
    return;
  }

  listaDeCompras.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = producto;
    listaHTML.appendChild(li);
  });
};
