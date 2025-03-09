// Mudança do wallpapaer do body:
document.addEventListener("DOMContentLoaded", () => {
    // Lista de URLs diretas das imagens do Unsplash
    const images = [
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7",
        "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
        "https://images.unsplash.com/photo-1600679472233-eabc13b79f07",
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    ];

    const params = "?auto=format&fit=crop&w=1920&h=1080&q=80";

    // Pré-carregar todas as imagens
    images.forEach(url => {
        const img = new Image();
        img.src = url + params;
    });

    // Escolher uma imagem aleatória após pré-carregamento
    const randomImage = images[Math.floor(Math.random() * images.length)] + params;

    const backgroundImage = new Image();
    backgroundImage.src = randomImage;
    backgroundImage.onload = () => {
        document.body.style.backgroundImage = `url('${randomImage}')`;
    };
    backgroundImage.onerror = () => {
        console.error("Erro ao carregar a imagem de fundo.");
    };
});

// Efeito dos botões de brilhar
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 100);
    });

    button.addEventListener('mouseover', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 180);
    });
});

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
