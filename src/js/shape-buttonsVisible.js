// Função para animar a saída do shape-buttons (baixo)
function hideShapeButtons() {
    const shapeButtons = document.querySelector(".shape-buttons");

    if (!shapeButtons) {
        console.error("Elemento .shape-buttons não encontrado.");
        return;
    }

    // Remove classes de animação anteriores
    shapeButtons.classList.remove("animate__animated", "animate__fadeInUp");

    // Adiciona animação de saída para baixo
    shapeButtons.classList.add("animate__animated", "animate__fadeOutDown");

    // Após a animação, desativa o elemento
    shapeButtons.addEventListener("animationend", function handler() {
        shapeButtons.style.display = "none";
        shapeButtons.style.visibility = "hidden";
        shapeButtons.style.pointerEvents = "none";
        shapeButtons.classList.remove("animate__animated", "animate__fadeOutDown");
        shapeButtons.removeEventListener("animationend", handler);
    }, { once: true });
}

// Função para animar a entrada do shape-buttons (de baixo)
function showShapeButtons() {
    const shapeButtons = document.querySelector(".shape-buttons");

    if (!shapeButtons) {
        console.error("Elemento .shape-buttons não encontrado.");
        return;
    }

    // Torna visível antes da animação
    shapeButtons.style.display = "block";
    shapeButtons.style.visibility = "visible";
    shapeButtons.style.pointerEvents = "auto";

    // Remove classes de animação anteriores
    shapeButtons.classList.remove("animate__animated", "animate__fadeOutDown");

    // Adiciona animação de entrada de baixo
    shapeButtons.classList.add("animate__animated", "animate__fadeInUp");
}

// Adiciona eventos aos botões
document.addEventListener("DOMContentLoaded", () => {
    const imcButton = document.querySelector(".my-imc-button");
    const waterButton = document.querySelector(".my-water-button");
    const closeButton = document.querySelector(".fechar");

    if (!imcButton) {
        console.error("Botão .my-imc-button não encontrado.");
        return;
    }
    if (!waterButton) {
        console.error("Botão .my-water-button não encontrado.");
        return;
    }
    if (!closeButton) {
        console.error("Botão .fechar não encontrado.");
        return;
    }

    // O my-imc-button ativa a saída do shape-buttons
    imcButton.addEventListener("click", () => {
        hideShapeButtons();
    });

    // O my-water-button também ativa a saída do shape-buttons
    waterButton.addEventListener("click", () => {
        hideShapeButtons();
    });

    // O fechar ativa a entrada do shape-buttons
    closeButton.addEventListener("click", () => {
        showShapeButtons();
    });
});