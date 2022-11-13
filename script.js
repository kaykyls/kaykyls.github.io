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

        
        themeButtons.forEach(button => {
            button.classList.add("hidden")
        })

        if(localStorage.getItem("button") === "moon"){
            themeButtons[0].classList.remove("hidden")
        } else {
            themeButtons[1].classList.remove("hidden")
        }
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
    if (localStorage.getItem("theme")) {
        localStorage.removeItem("theme", html.className)
    }

    html.classList.toggle("light-mode")
    html.classList.toggle("dark-mode")

    localStorage.setItem("theme", html.className)

    toggleButtons()
}

function toggleButtons() {
    themeButtons.forEach((button) => {
        button.classList.toggle("hidden")
    })
 
    if(html.className === "dark-mode"){
        localStorage.setItem("button", "sun")
    } else {
        localStorage.setItem("button", "moon")
    }
}