// Mudança do wallpapaer do body:
document.addEventListener("DOMContentLoaded", () => {
    // Lista de URLs diretas das imagens do Unsplash
    const imagesMobile = [
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
        "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        "https://images.unsplash.com/photo-1554980555-7afb7c8795fe"
    ];

    const imagesDesktop = [
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
        "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", 
        "https://images.unsplash.com/photo-1600679472233-eabc13b79f07",
        "https://images.unsplash.com/photo-1570310052400-89ff7a2adb20"
    ];

    const params = "?auto=format&fit=crop&w=1920&h=1080&q=80";
    
    // Escolher lista de imagens conforme o tamanho da tela
    const images = window.innerWidth <= 768 ? imagesMobile : imagesDesktop;

    // Pré-carregar todas as imagens
    images.forEach(url => {
        const img = new Image();
        img.src = url + params;
    });

    // Escolher uma imagem aleatória
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
