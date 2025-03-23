// Cálculo da quantidade de água
const peso = parseFloat(pesoInput.value);
let altura = parseFloat(alturaInput.value);

if (isNaN(peso) || isNaN(altura)) {
    titleShape3.textContent = "Sua hidratação diária é:";
    status.textContent = "Por favor, insira valores numéricos válidos para peso e altura.";
    img.src = './src/img/water.png';
    return;
}

if (altura < 3) {
    altura = altura * 100; // Converte metros para centímetros, se necessário
}

// Cálculo ajustado: apenas 35 ml por kg de peso
const aguaMl = peso * 35;
const aguaLitros = (aguaMl / 1000).toFixed(2);
let statusText = `Hidratação Diária<br>Água: ${aguaLitros} litros`;
let advice = 'Essa é a quantidade estimada de água que você deve consumir por dia com base no seu peso.';
let imgSrc = './src/img/water.png';

titleShape3.textContent = "Sua hidratação diária é:";
status.innerHTML = `${statusText}<br><br>${advice}`;
if (imgSrc) {
    img.src = imgSrc;
}