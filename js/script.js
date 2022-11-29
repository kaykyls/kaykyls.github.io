import { toggleHamburger } from "./hamburger.js"
import { toggleTheme } from "./theme.js"
import { handleLoad } from "./load.js"
import { handleScroll } from "./scroll.js"

const hamburger = document.querySelector(".hamburger-menu")
const themeBtn = document.querySelector(".theme-btn")
const backToTop = document.querySelector(".back-to-top")

onload = handleLoad
onscroll = handleScroll

hamburger.onclick = () => {
    toggleHamburger(hamburger)
} 

themeBtn.onclick = () => {
    toggleTheme()
}

backToTop.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}