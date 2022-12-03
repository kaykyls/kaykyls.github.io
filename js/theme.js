const html = document.querySelector("html")
const themeButtons = document.querySelectorAll(".theme-btn div")

export function toggleTheme() {
    if (localStorage.getItem("theme")) {
        localStorage.removeItem("theme", html.className)
    }

    html.classList.toggle("light-mode")
    html.classList.toggle("dark-mode")

    localStorage.setItem("theme", html.className)

    toggleButtons()
}

export function toggleButtons() {
    themeButtons.forEach((button) => {
        button.classList.toggle("hidden")
    })
 
    if(html.className === "dark-mode"){
        localStorage.setItem("button", "sun")
    } else {
        localStorage.setItem("button", "moon")
    }
}