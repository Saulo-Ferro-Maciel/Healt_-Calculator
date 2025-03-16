// Função para alternar entre as janelas com animações
function animarJanelas(janelaMostrar) {
    let win1 = document.querySelector(".window");  // Calculadora IMC
    let win2 = document.querySelector(".window2"); // Calculadora de Água

    if (!win1 || !win2) {
        console.error("As janelas não foram encontradas.");
        return;
    }

    // Remove animações anteriores
    win1.classList.remove("animate__animated", "animate__fadeInLeft", "animate__fadeOutLeft");
    win2.classList.remove("animate__animated", "animate__fadeInRight", "animate__fadeOutRight");

    if (janelaMostrar === "imc") {
        // Se win2 está visível, anima saída
        if (!win2.classList.contains("hidden")) {
            win2.classList.add("animate__animated", "animate__fadeOutRight");
        }
        
        setTimeout(() => {
            win2.classList.add("hidden");
            win2.style.display="block";
            win1.classList.remove("hidden");
            win1.style.display = 'block';
            win1.classList.add("animate__animated", "animate__fadeInLeft");
        }, 500);
    } 
    else if (janelaMostrar === "water") {
        // Se win1 está visível, anima saída
        if (!win1.classList.contains("hidden")) {
            win1.classList.add("animate__animated", "animate__fadeOutLeft");
        }
        
        setTimeout(() => {
            win1.classList.add("hidden");
            win1.style.display="none";
            win2.classList.remove("hidden");
            win2.style.display = 'block';
            win2.classList.add("animate__animated", "animate__fadeInRight");
        }, 500);
    }
}

// Adiciona eventos aos botões
document.addEventListener("DOMContentLoaded", function () {
    let imcButton = document.querySelector(".imc-button");  // Botão do Header
    let waterButton = document.querySelector(".water-button"); // Botão do Header

    if (!imcButton || !waterButton) {
        console.error("Os botões de alternância não foram encontrados.");
        return;
    }

    imcButton.addEventListener("click", function () {
        console.log("Botão IMC clicado!");
        animarJanelas("imc");
    });

    waterButton.addEventListener("click", function () {
        console.log("Botão Água clicado!");
        animarJanelas("water");
    });
});
