const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btn.addEventListener("click", mostrarOcultarFooter)

function mostrarOcultarFooter() {
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        btnFlotante.classList.remove("activo")
        btnFlotante.textContent = "Idioma y Moneda"
    } else {
        footer.classList.add("activo");
        btnFlotante.classList.add("activo")
        btnFlotante.textContent = "X Cerrar"
    }
}