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
  
  btnAdenima.addEventListener("mouseover", (e) => {
    caixaTexto.className = "adenina";
    caixaTexto.innerHTML = "<h1>Adenina</h1><p>A adenina é uma base purínica, assim como a guanina (G), e desempenha um papel crucial na formação do código genético, sendo parte das estruturas que compõem os nucleotídeos (adenosina) e, consequentemente, as cadeias de RNA, que são usadas para a síntese de proteínas. No contexto do RNA, a adenina (abreviada como A) é uma das bases que se emparelha com a uracila (U) durante o processo de transcrição.</p>";  
  });
  
  btnGuanina.addEventListener("mouseover", (e) => {
    caixaTexto.className = "Guanina";
    caixaTexto.innerHTML = "<h1>Guanina</h1><p> Ela faz parte dos nucleotídeos que formam os ácidos nucleicos (como a desoxiadenosina ou guanosina). Além disso, a guanina está envolvida em processos celulares essenciais, como a transmissão de sinais e a regulação de várias funções celulares. No RNA, a guanina também se emparelha com a citosina (C), mas, como o RNA é uma molécula de fita simples, o emparelhamento ocorre apenas quando o RNA é transcrito do DNA ou durante a tradução de proteínas.<p>";
  });

  btnCitosina.addEventListener("mouseover", (e) => {
    caixaTexto.className = "Citosina";
    caixaTexto.innerHTML = "<h1>Citosina</h1><p>A citosina é uma das quatro bases essenciais que formam os nucleotídeos do DNA e RNA, sendo responsável por codificar informações genéticas. Ela também tem um papel importante em algumas reações bioquímicas e é envolvida na regulação da expressão gênica, além de ser suscetível a modificações químicas que podem afetar a função do DNA. A citosina também se emparelha com a guanina (G).<p>"
  });

  btnUracila.addEventListener("mouseover", (e) => {
    caixaTexto.className = "Uracila";
    caixaTexto.innerHTML ="<h1>Uracila</h1><p>A uracila (ou uracina) é uma das bases nitrogenadas que compõem o RNA, sendo uma base pirimídica. A uracila é importante no processo de síntese de proteínas, pois é parte da cadeia de RNA mensageiro (mRNA) que leva as instruções genéticas do DNA para a maquinaria de síntese de proteínas nos ribossomos. Essas instruções, codificadas em sequências de nucleotídeos, são traduzidas para formar as proteínas que desempenham funções vitais na célula.<p>"
  });