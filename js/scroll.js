const backToTop = document.querySelector(".back-to-top")
const header = document.querySelector("header")
let previousScroll = 0

export function handleScroll() {
    if(window.scrollY > 174 && window.scrollY > previousScroll) {
        previousScroll = window.scrollY
        header.style.top = "-200px"
        backToTop.style.bottom = "-200px"
    }
    
    else if (window.scrollY < previousScroll) {
        if(window.scrollY <= 100) {
            header.classList.remove("hasBackground")
            backToTop.style.bottom = "-200px"
        } else {
            header.classList.add("hasBackground")
            backToTop.style.bottom = "2rem"
        }

        previousScroll = window.scrollY
        
        header.style.top = "0px"
    }
}