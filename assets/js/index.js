const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')

function calcularIMC(evento) {
  evento.preventDefault();

    if (peso.value == '' || peso.value > 500 || peso.value < 3) {
        alert('Por favor, digite valores validos. (peso entre 3kg e 500kg)')
    } else if (altura.value == '' || altura.value < 0.15 || altura.value > 3) {
        alert('Por favor, digite valores validos. (Altura entre 0.15m e 2.99m)')
    } else {
        peso.value = peso.value.replace(',', '.')
        altura.value = altura.value.replace(',', '.')
        const imc = Number(peso.value) / (Number(altura.value) ** 2)

        if (imc < 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`

        } else if (imc >= 18.5 && imc < 24.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso Normal)`

        } else if (imc >= 25 && imc < 29.9) {
            resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`

        } else if (imc >= 30 && imc < 34.9) {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`

        } else if (imc >= 35 && imc < 39.9) {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`

        } else if (imc >= 40) {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`

        } else {
            alert('Por favor, digite valores validos.')
        }
    }
}

addEventListener('submit', calcularIMC)