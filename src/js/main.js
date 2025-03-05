
// Efeito dos botões de brilhar
const buttons = document.querySelectorAll('.button');
  
buttons.forEach(button => {
    button.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 150);
    });

    button.addEventListener('mouseover', function() {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 180);
    });
});