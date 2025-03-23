// Função para abrir window4 e desativar window2
function abrirWindow4() {
    let win1 = document.querySelector(".window");
    let win2 = document.querySelector(".window2");
    let win4 = document.querySelector(".window4");
    let pesoInput = document.querySelector(".water-text-field1");
    let alturaInput = document.querySelector(".water-text-field2");
    let status = document.querySelector(".status-water");
    let img = document.querySelector(".image-water");
    let titleShape3 = document.querySelector(".title-shape4");

    if (!win2 || !win4 || !pesoInput || !alturaInput || !status || !img || !titleShape3) {
        console.error("Alguns elementos não foram encontrados.");
        return;
    }

    // Remove animações anteriores para reiniciar ao clicar novamente
    win2.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
    win4.classList.remove("animate__fadeInLeft", "animate__fadeOutLeft");

    // Força um reflow para resetar a animação
    void win2.offsetWidth;
    void win4.offsetWidth;

    // Esconde e desativa window2 com animação
    win2.classList.add("animate__animated", "animate__fadeOutRight");
    win2.style.pointerEvents = "none";

    setTimeout(() => {
        win2.classList.add("hidden");
        win2.style.visibility = "hidden";
        win2.style.display = "none";
        win2.classList.remove("animate__animated", "animate__fadeOutRight");
    }, 1000);

    // Exibe window4 pela esquerda
    win4.classList.remove("hidden");
    win4.style.visibility = "visible";
    win4.style.display = "block";
    win4.classList.add("animate__animated", "animate__fadeInLeft");

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
        altura = altura * 100;
    }

    const aguaMl = (peso * 35) + (altura * 2);
    const aguaLitros = (aguaMl / 1000).toFixed(2);
    let statusText = `Hidratação Diária<br>Água: ${aguaLitros} litros`;
    let advice = 'Essa é a quantidade estimada de água que você deve consumir por dia com base no seu peso e altura.';
    let imgSrc = './src/img/water.png';

    titleShape3.textContent = "Sua hidratação diária é:";
    status.innerHTML = `${statusText}<br><br>${advice}`;
    if (imgSrc) {
        img.src = imgSrc;
    }
}

// Função para fechar window4 e reativar apenas window2, ocultando window1
function fecharWindow4() {
    let win1 = document.querySelector(".window");
    let win2 = document.querySelector(".window2");
    let win4 = document.querySelector(".window4");

    if (!win2 || !win4) {
        console.error("As janelas não foram encontradas.");
        return;
    }

    // Remove animações anteriores para evitar conflitos
    win2.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
    win4.classList.remove("animate__fadeInLeft", "animate__fadeOutLeft");

    // Força um reflow para garantir que a animação será reiniciada
    void win2.offsetWidth;
    void win4.offsetWidth;

    // Anima a saída de window4 pela esquerda
    win4.classList.add("animate__animated", "animate__fadeOutLeft");

    setTimeout(() => {
        win4.classList.add("hidden");
        win4.style.visibility = "hidden";
        win4.style.display = "none";
        win4.classList.remove("animate__animated", "animate__fadeOutLeft");

        if (win1) {
            win1.classList.add("hidden");
            win1.style.visibility = "hidden";
            win1.style.display = "none";
            win1.style.opacity = "0";
            win1.classList.remove("animate__fadeInLeft", "animate__fadeOutLeft");
        }

        // Reativa e exibe apenas window2 pela direita
        win2.classList.remove("hidden");
        win2.style.visibility = "visible";
        win2.style.display = "block";
        win2.style.pointerEvents = "auto";
        win2.classList.add("animate__animated", "animate__fadeInRight");
    }, 500);
}

// Adiciona evento ao botão my-water-button
document.querySelector(".my-water-button").addEventListener("click", abrirWindow4);
document.querySelector(".fechar2").addEventListener("click", fecharWindow4);
