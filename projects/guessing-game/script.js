let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

function mouseClick(event){
    event.preventDefault()
    let number = Number(document.querySelector(".try-input").value) //value pega o valor de um input
    if(number === randomNumber){
        document.querySelector(".screen-1").classList.add("hide")
        document.querySelector(".screen-2").classList.remove("hide")
        document.querySelector(".screen-2-container p").innerText = (`Acertou em ${attempts} tentativas!`)
    }else{
        document.querySelector(".main-texts p").innerText = "Errou! Tente novamente"
    }
    attempts++
}

const playAgainBtn = document.querySelector(".play-again-btn")

playAgainBtn.addEventListener("click", () => {
    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
    document.querySelector(".main-texts p").innerText = "Advinhe o número entre 0 e 10"
    document.querySelector(".try-input").value = ""
    document.querySelector(".screen-1").classList.remove("hide")
    document.querySelector(".screen-2").classList.add("hide")
})