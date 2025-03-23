function animarJanelas(janelaMostrar) {
    let win1 = document.querySelector(".window");  // Calculadora IMC
    let win2 = document.querySelector(".window2"); // Calculadora de Água
    let win3 = document.querySelector(".window3"); // Outra janela adicional
    let win4 = document.querySelector(".window4"); // Outra janela adicional

    if (!win1 || !win2 || !win3 || !win4) {
        console.error("As janelas não foram encontradas.");
        return;
    }

    // Remove animações anteriores
    win1.classList.remove("animate__animated", "animate__fadeInLeft", "animate__fadeOutLeft");
    win2.classList.remove("animate__animated", "animate__fadeInRight", "animate__fadeOutRight");

    // Garante que win3 e win4 sempre fiquem escondidas ao alternar janelas
    [win3, win4].forEach(win => {
        win.classList.add("hidden");
        win.style.visibility = "hidden";
        win.style.display = "none";
    });

    if (janelaMostrar === "imc") {
        // Se win2 está visível, anima saída
        if (!win2.classList.contains("hidden")) {
            win2.classList.add("animate__animated", "animate__fadeOutRight");
        }
        
        setTimeout(() => {
            // Esconde win2
            win2.classList.add("hidden");
            win2.style.visibility = "hidden";
            win2.style.display = "none";
            win2.style.pointerEvents = "none"; // 🔥 Desativa win2 quando oculto

            // Exibe win1
            win1.classList.remove("hidden");
            win1.style.visibility = "visible";
            win1.style.display = "block";
            win1.style.position = "relative"; // Garante alinhamento correto
            win1.style.pointerEvents = "auto"; // 🔥 Reativa os botões de win1
            win1.classList.add("animate__animated", "animate__fadeInLeft");
        }, 500);
    } 
    else if (janelaMostrar === "water") {
        // Se win1 está visível, anima saída
        if (!win1.classList.contains("hidden")) {
            win1.classList.add("animate__animated", "animate__fadeOutLeft");
        }
        
        setTimeout(() => {
            // Esconde win1
            win1.classList.add("hidden");
            win1.style.visibility = "hidden";
            win1.style.display = "none";
            win1.style.pointerEvents = "none"; // 🔥 Desativa win1 quando oculto

            // Exibe win2
            win2.classList.remove("hidden");
            win2.style.visibility = "visible";
            win2.style.display = "block";
            win2.style.position = "relative"; // Garante alinhamento correto
            win2.style.pointerEvents = "auto"; // 🔥 Reativa os botões de win2
            win2.classList.add("animate__animated", "animate__fadeInRight");
        }, 500);
    }
}
