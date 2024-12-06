document.getElementById('playButton').addEventListener('click', function() {
    window.location.href = 'gamedna.html'; 
document.getElementById('playButton').addEventListener('click', function() {
    this.classList.add('fade-out'); // Adiciona a classe de animação

    setTimeout(() => {
        window.location.href = 'sua_pagina_de_destino.html'; 
    }, 500); 
});