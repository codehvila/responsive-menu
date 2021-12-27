const navButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const iconFeedback = document.querySelector(".fa-bars");

navButton.addEventListener("click", toggleMenu);
function toggleMenu() {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navButton.setAttribute("aria-label", "Cerrar menú");
    iconFeedback.classList.replace("fa-bars", "fa-window-close");
  } else {
    navButton.setAttribute("aria-label", "Abrir menú");
    iconFeedback.classList.replace("fa-window-close", "fa-bars");
  }
}
