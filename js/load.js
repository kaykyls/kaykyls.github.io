const html = document.querySelector("html")
const themeButtons = document.querySelectorAll(".theme-btn div")

export function handleLoad() {
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