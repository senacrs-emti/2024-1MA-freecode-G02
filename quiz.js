document.getElementById('playButton').addEventListener('click', function() {
    window.location.href = 'gamedna.html'; // Altere para a URL da página que você deseja redirecionar
});
document.getElementById('playButton').addEventListener('click', function() {
    this.classList.add('fade-out'); // Adiciona a classe de animação

    setTimeout(() => {
        window.location.href = 'sua_pagina_de_destino.html'; // Altere para a URL da página que você deseja redirecionar
    }, 500); // Espera a animação terminar antes de redirecionar
});