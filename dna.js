/* BOTOES */
const btnAdenima = document.getElementById("btnAdenima");
const btnGuanina = document.getElementById("btnGuanina");
const btnCitosina = document.getElementById("btnCitosina");
const btnUracila = document.getElementById("btnUracila");

let caixaTexto = document.getElementById('caixa');

btnAdenima.addEventListener("mouseover", (e) => {
  caixaTexto.className = "adenina";
  caixaTexto.innerHTML = "<h1>Adenina</h1><p>A adenina é uma base purínica, assim como a guanina (G), e desempenha um papel crucial na formação do código genético, sendo parte das estruturas que compõem os nucleotídeos (adenosina) e, consequentemente, as cadeias de RNA, que são usadas para a síntese de proteínas. No contexto do RNA, a adenina (abreviada como A) é uma das bases que se emparelha com a uracila (U) durante o processo de transcrição.</p>";  
});

btnGuanina.addEventListener("mouseover", (e) => {
  caixaTexto.className = "guanina";
  caixaTexto.innerHTML = "<h1>Guanina</h1><p> Ela faz parte dos nucleotídeos que formam os ácidos nucleicos (como a desoxiadenosina ou guanosina). Além disso, a guanina está envolvida em processos celulares essenciais, como a transmissão de sinais e a regulação de várias funções celulares. No RNA, a guanina também se emparelha com a citosina (C), mas, como o RNA é uma molécula de fita simples, o emparelhamento ocorre apenas quando o RNA é transcrito do DNA ou durante a tradução de proteínas.<p>";
});

btnCitosina.addEventListener("mouseover", (e) => {
  caixaTexto.className = "citosina";
  caixaTexto.innerHTML = "<h1>Citosina</h1><p>A citosina é uma das quatro bases essenciais que formam os nucleotídeos do DNA e RNA, sendo responsável por codificar informações genéticas. Ela também tem um papel importante em algumas reações bioquímicas e é envolvida na regulação da expressão gênica, além de ser suscetível a modificações químicas que podem afetar a função do DNA. A citosina também se emparelha com a guanina (G).<p>"
});

btnUracila.addEventListener("mouseover", (e) => {
  caixaTexto.className = "timina";
  caixaTexto.innerHTML ="<h1>Timina</h1><p>A timina é a única base nitrogenada que só existe no DNA. No RNA, é substituída pela uracila. Essa pequena alteração previne mutações gênicas que podem ser fatais.<p>"
});