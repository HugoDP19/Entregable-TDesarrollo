const botonMenu = document.getElementById("btnToggle");

if (botonMenu) {
  botonMenu.addEventListener("click", () => {
    // toggle() devuelve true si la clase quedó puesta (menú colapsado)
    const colapsado = document.body.classList.toggle("colapsado");
    botonMenu.setAttribute("aria-expanded", String(!colapsado));
  });
}
