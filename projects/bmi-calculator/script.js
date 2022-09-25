const form = document.querySelector("form")
const closeBtn = document.querySelector(".close-btn")
const popup = document.querySelector(".popup")

function toggleScreen() {
    popup.classList.toggle("hide")
}

function imc(weight, height) {
    return (Number(weight) / ((Number(height)/100) ** 2)).toFixed(2)
}

function showResult(imc) {
    const text = document.querySelector(".popup h1")
    let classification
    toggleScreen()
    if(imc < 18.5){
        classification = "Magreza"
    } else if (imc >= 18.5 && imc < 24.9){
        classification = "Normal"
    } else if (imc >= 25 && imc < 29.9){
        classification = "Sobrepeso"
    } else if (imc >= 30 && imc < 34.9){
        classification = "Obesidade moderada"
    } else if (imc >= 35 && imc < 39.9){
        classification = "Obesidade severa"
    } else if (imc >= 40){
        classification = "Obesidade muito severa"
    }
    text.innerText = `Seu IMC é de ${imc} (${classification})`
}

form.onsubmit = (event) => {
    event.preventDefault()
    const weight = document.querySelector("#weight").value
    const height = document.querySelector("#height").value
    if(height > 0 && weight > 0){
        showResult(imc(weight, height))
    }
}

closeBtn.addEventListener("click", () => {
    toggleScreen()
    weight.value = ""
    height.value = ""
})