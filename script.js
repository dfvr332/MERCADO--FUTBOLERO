document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-primary");
  const carritoContador = document.getElementById("carrito-contador");
  const carritoLista = document.getElementById("carrito-lista");
  const carritoDropdown = document.getElementById("carrito-dropdown");

  let carrito = [];

  function actualizarCarrito() {
    carritoContador.textContent = `🛒 (${carrito.length})`;
    carritoLista.innerHTML = "";

    carrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-1");

      li.innerHTML = `
        <span>${producto}</span>
        <button class="btn btn-sm btn-outline-danger">❌</button>
      `;

      li.querySelector("button").addEventListener("click", () => {
        carrito.splice(index, 1);
        actualizarCarrito();
      });

      carritoLista.appendChild(li);
    });
  }

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const producto = boton.closest(".card").querySelector(".card-title").innerText;
      carrito.push(producto);
      alert(`"${producto}" ha sido agregado al carrito.`);
      actualizarCarrito();
    });
  });

  carritoContador.addEventListener("click", () => {
    carritoDropdown.style.display = carritoDropdown.style.display === "none" ? "block" : "none";
  });
});