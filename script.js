/**
 * Based on this rad Dribbble shot: https://dribbble.com/shots/6280755-DNA-in-Motion
 * Then remixed with the Jurassic park color scheme :D
*/
 
// If they're not supported, add them with JS
if (!CSS.supports('top: calc(sin(1) * 1px)')) {
    // Push the delays in
    const STRANDS = [...document.querySelectorAll('.strand')]
    for (let s = 0; s < STRANDS.length; s++) {
      // --delay: calc(sin((var(--index) / var(--total)) * 45deg) * var(--speed) * -1s);
      const DELAY = Math.sin(((Math.PI / 180) * 45) * ((s + 1) / STRANDS.length));
      STRANDS[s].style.setProperty('--delay', `calc((${DELAY} * var(--speed)) * -1s)`);
    }
  }
 
  // Set random colors
  const COLORS = ['hsl(44, 98%, 60%)', 'hsl(197, 50%, 44%)', 'hsl(300, 100%, 100%)', 'hsl(331, 76%, 50%)']
 
  const NODES = document.querySelectorAll('.strand__node')
  NODES.forEach(NODE => {
    NODE.style.setProperty('--bg', COLORS[Math.floor(Math.random() * COLORS.length)])
  })


/* BOTOES */
  const btnAdenima = document.getElementById("btnAdenima");
  let caixaTexto = document.getElementById('caixa');
   


  
  btnAdenima.addEventListener("click", (e) => {
    caixaTexto.className = "adenina";
    caixaTexto.innerHTML = "<h1>Adenina</h1><p>dasbdjasbdjasbdasd</p>";  
  });
  
  btnGuanina.addEventListener("click", (e) => {
    caixaTexto.className = "Guanina";
    caixaTexto.innerHTML = "<h1>Guanina</h1><p>skksksksks<p>";
  });

  btnCitosina.addEventListener("click", (e) => {
    caixaTexto.className = "Citosina";
    caixaTexto.innerHTML = "<h1>Citosina</h1><p>skksksksks<p>"
  });

  btnUracila.addEventListener("click", (e) => {
    caixaTexto.className = "Urasila";
    caixaTexto.innerHTML ="<h1>Uracila</h1><p>skksksksks<p>"
  });