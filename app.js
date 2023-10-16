const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav_item"),
header = document.getElementById("header");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu-open");
})