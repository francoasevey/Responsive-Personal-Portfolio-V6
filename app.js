const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav_item"),
header = document.getElementById("header");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu--open");
    changeIcon();
})

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if(navMenu.classList.contains("nav_menu--open")) {
            navMenu.classList.remove("nav_menu--open");
        }
        changeIcon();
    });
});

function changeIcon() {
    if(navMenu.classList.contains("nav_menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

const testimonialSlide = new Swiper(".testimonial_wrapper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
})