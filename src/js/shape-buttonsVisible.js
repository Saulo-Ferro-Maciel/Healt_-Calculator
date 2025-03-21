function isMobileDevice() {
    return window.matchMedia("only screen and (max-width: 678px)").matches;
}

function hideShapeButtons() {
    if (!isMobileDevice()) return; // Só executa se for um celular

    const shapeButtons = document.querySelector(".shape-buttons");
    if (!shapeButtons) {
        console.error("Elemento .shape-buttons não encontrado.");
        return;
    }

    shapeButtons.classList.remove("animate__animated", "animate__fadeInUp");
    shapeButtons.classList.add("animate__animated", "animate__fadeOutDown");

    shapeButtons.addEventListener("animationend", function handler() {
        shapeButtons.style.display = "none";
        shapeButtons.style.visibility = "hidden";
        shapeButtons.style.pointerEvents = "none";
        shapeButtons.classList.remove("animate__animated", "animate__fadeOutDown");
        shapeButtons.removeEventListener("animationend", handler);
    }, { once: true });
}

function showShapeButtons() {
    if (!isMobileDevice()) return; // Só executa se for um celular

    const shapeButtons = document.querySelector(".shape-buttons");
    if (!shapeButtons) {
        console.error("Elemento .shape-buttons não encontrado.");
        return;
    }

    shapeButtons.style.display = "block";
    shapeButtons.style.visibility = "visible";
    shapeButtons.style.pointerEvents = "auto";
    shapeButtons.classList.remove("animate__animated", "animate__fadeOutDown");
    shapeButtons.classList.add("animate__animated", "animate__fadeInUp");
}

document.addEventListener("DOMContentLoaded", () => {
    if (!isMobileDevice()) return; // Só adiciona eventos se for um celular

    const imcButton = document.querySelector(".my-imc-button");
    const waterButton = document.querySelector(".my-water-button");
    const closeButton = document.querySelector(".fechar");

    if (!imcButton || !waterButton || !closeButton) {
        console.error("Um ou mais botões não foram encontrados.");
        return;
    }

    imcButton.addEventListener("click", hideShapeButtons);
    waterButton.addEventListener("click", hideShapeButtons);
    closeButton.addEventListener("click", showShapeButtons);
});
