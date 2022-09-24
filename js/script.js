document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger"),
          list = document.querySelector(".menu_list");

    hamburger.addEventListener("click", e => {
        hamburger.classList.toggle("hamburger_active");
        list.classList.toggle("menu_list-active");
    })
})