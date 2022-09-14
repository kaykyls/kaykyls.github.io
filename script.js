const hamburger = document.querySelector(".hamburger-menu")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-menu-ativo")
    navMenu.classList.toggle("nav-menu-ativo")
})

document.querySelectorAll(".nav-menu-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("hamburger-menu-ativo");
    navMenu.classList.remove("nav-menu-ativo");
}))