const hamburger = document.querySelector(".hamburger-menu")
const navMenu = document.querySelector(".nav-menu")
const themeBtn = document.querySelector(".theme-btn")
const html = document.querySelector("html")
const themeButtons = document.querySelectorAll(".theme-btn span")

onload = () => {
    if (localStorage.getItem("theme")){
        html.classList.remove("light-mode")
        html.classList.remove("dark-mode")
        html.classList.add(localStorage.getItem("theme"))
    }
    
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-menu-ativo")
    navMenu.classList.toggle("nav-menu-ativo")
})

document.querySelectorAll(".nav-menu-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("hamburger-menu-ativo");
    navMenu.classList.remove("nav-menu-ativo");
}))

themeBtn.addEventListener("click", toggleTheme)

function toggleTheme() {
    html.classList.toggle("light-mode")
    html.classList.toggle("dark-mode")
    themeButtons.forEach((button) => {
        button.classList.toggle("hidden")
    })

    localStorage.removeItem("theme", "light-mode dark-mode")
    localStorage.removeItem("theme", html.className)
    const currentTheme = html.className
    localStorage.setItem("theme", currentTheme)
}