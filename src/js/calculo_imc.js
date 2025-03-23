// Função para abrir window3 e desativar window1 e window2
function abrirWindow3() {
    let win1 = document.querySelector(".window");
    let win2 = document.querySelector(".window2");
    let win3 = document.querySelector(".window3");
    let pesoInput = document.querySelector(".imc-text-field1");
    let alturaInput = document.querySelector(".imc-text-field2");
    let status = document.querySelector(".status-imc");
    let img = document.querySelector(".image-imc");
    let titleShape3 = document.querySelector(".title-shape3");

    if (!win1 || !win2 || !win3 || !pesoInput || !alturaInput || !status || !img || !titleShape3) {
        console.error("Alguns elementos não foram encontrados.");
        return;
    }

    // Remove animações anteriores
    win1.classList.remove("animate__fadeInLeft", "animate__fadeOutLeft");
    win3.classList.remove("animate__fadeInRight", "animate__fadeOutRight");

    // Esconde e desativa window1 e window2
    win1.classList.add("animate__animated", "animate__fadeOutLeft");
    win2.classList.add("hidden");
    win1.style.pointerEvents = "none";
    win2.style.pointerEvents = "none";

    setTimeout(() => {
        win1.classList.add("hidden");
        win1.style.visibility = "hidden";
        win1.style.display = "none";
        win1.classList.remove("animate__animated", "animate__fadeOutLeft"); // Limpa a animação após completar
    }, 500);

    // Exibe window3 pela direita
    win3.classList.remove("hidden");
    win3.style.visibility = "visible";
    win3.style.display = "block";
    win3.classList.add("animate__animated", "animate__fadeInRight");

    // Cálculo do IMC
    const peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        status.textContent = "Por favor, insira valores numéricos válidos para peso e altura.";
        return;
    }

    if (altura > 3) {
        altura = altura / 100;
    }

    const imc = parseFloat((peso / (altura ** 2)).toFixed(2));
    let statusText = '';
    let imgSrc = '';
    let advice = '';

    // Define o título como "Seu IMC é:" quando o cálculo é realizado
    titleShape3.textContent = "Seu IMC é:";

    if (imc < 18.5) {
        statusText = `Magreza<br>IMC: ${imc}`;
        imgSrc = './src/img/Magreza_IMC.png';
        advice = 'Você está abaixo do peso. É importante consultar o nutricionista para ajustar sua alimentação.';
    } else if (imc >= 18.5 && imc <= 24.9) {
        statusText = `Peso Normal<br>IMC: ${imc}`;
        imgSrc = './src/img/normal_IMC.png';
        advice = 'Seu peso está normal, parabéns. Mantenha uma alimentação equilibrada e continue se exercitando.';
    } else if (imc >= 25 && imc <= 29.9) {
        statusText = `Sobrepeso<br>IMC: ${imc}`;
        imgSrc = './src/img/sobrepeso_IMC.png';
        advice = 'Adote hábitos saudáveis, como alimentação equilibrada e prática regular de atividades físicas.';
    } else if (imc >= 30 && imc <= 34.9) {
        statusText = `Obesidade Grau I<br>IMC: ${imc}`;
        imgSrc = './src/img/obeso.png';
        advice = 'É importante procurar um médico ou nutricionista para acompanhamento e orientação adequada.';
    } else if (imc >= 35 && imc <= 39.9) {
        statusText = `Obesidade Grau II<br>IMC: ${imc}`;
        imgSrc = './src/img/obeso.png';
        advice = 'Procure ajuda médica para um plano de perda de peso e acompanhamento profissional.';
    } else {
        statusText = `Obesidade Grau III<br>IMC: ${imc}`;
        imgSrc = './src/img/obeso3.png';
        advice = 'Procure orientação médica urgente para evitar complicações de saúde.';
    }

    status.innerHTML = `${statusText}<br><br>${advice}`;
    if (imgSrc) {
        img.src = imgSrc;
    }
}

// Função para fechar window3 e reativar window1
function fecharWindow3() {
    let win1 = document.querySelector(".window");
    let win3 = document.querySelector(".window3");

    if (!win1 || !win3) {
        console.error("As janelas não foram encontradas.");
        return;
    }

    // Remove animações anteriores
    win1.classList.remove("animate__fadeInLeft", "animate__fadeOutLeft");
    win3.classList.remove("animate__fadeInRight", "animate__fadeOutRight");

    // Anima a saída de window3 pela direita
    win3.classList.add("animate__animated", "animate__fadeOutRight");

    setTimeout(() => {
        win3.classList.add("hidden");
        win3.style.visibility = "hidden";
        win3.style.display = "none";
        win3.classList.remove("animate__animated", "animate__fadeOutRight"); // Limpa a animação após completar
        
        // Reativa e exibe window1 pela esquerda
        win1.classList.remove("hidden");
        win1.style.visibility = "visible";
        win1.style.display = "block";
        win1.style.pointerEvents = "auto";
        win1.classList.add("animate__animated", "animate__fadeInLeft");
    }, 500);
}

// Adiciona evento ao botão my-imc-button
document.querySelector(".my-imc-button").addEventListener("click", abrirWindow3);
document.querySelector(".fechar").addEventListener("click", fecharWindow3);