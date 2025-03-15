const pesoInput = document.querySelector('.peso');
const alturaInput = document.querySelector('.altura');

document.querySelector('.calcular').addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        console.log('Por favor, insira valores numéricos válidos para peso e altura.');
        return;
    }

    const imc = parseFloat((peso / (altura ** 2)).toFixed(2));

    if (imc < 18.5) {
        console.log('Você está muito magro, procure o nutricionista urgente!');
    } else if (imc >= 18.6 && imc <= 24.9) {
        console.log('Que ótimo, você está com o peso normal!');
    } else if (imc >= 25 && imc <= 29.9) {
        console.log('Você está com sobrepeso, procure mudar seus hábitos e fazer atividade física!');
    } else if (imc >= 30 && imc <= 34.9) {
        console.log('Alerta para Obesidade grau I, precisa de um acompanhamento com nutricionista urgentemente!');
    } else if (imc >= 35 && imc <= 39.9) {
        console.log('Você está com Obesidade grau II!');
    } else {
        console.log('Você está com Obesidade grau III, deve fazer um tratamento urgente se não pode agravar sua situação, causando até a morte');
    }
});
