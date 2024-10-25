
const questions = [
    {
      question: "O que é DNA?" ,
      answers: [
         { text: "A) Uma molécula responsável pela transmissão de impulsos nervosos." , correct: false },
         { text: "B) Um tipo de carboidrato encontrado nas células" , correct: false },
         { text: "C) O ácido que armazena a informação genética dos organismos vivos." , correct: true },
         { text: "D) Uma proteína que auxilia na digestão dos alimentos." , correct: false },
        ]
    },
    {
       question: "Qual é a diferença estrutural básica entre o DNA e o RNA?" ,
        answers: [
        { text: "A) O DNA é uma fita dupla, enquanto o RNA é uma fita simples." , correct: true },
        { text: "B) O DNA contém uracila, enquanto o RNA contém timina." , correct: false },
        { text: "C) O DNA é encontrado apenas no citoplasma, enquanto o RNA é encontrado apenas no núcleo." , correct: false },
        { text: "D) O DNA é composto por ribose, enquanto o RNA é composto por desoxirribose." , correct: false },
     ]
   },
   {
         question: "Como ocorre o processo de transcrição do DNA para o RNA?" ,
          answers: [
          { text: "A) A transcrição ocorre no citoplasma, onde o RNA se liga diretamente ao DNA para formar proteínas." , correct: false },
          { text: "B) A transcrição utiliza ribossomos para sintetizar RNA a partir de cadeias de DNA. " , correct: false },
          { text: "C) A transcrição é realizada por enzimas chamadas RNA polimerases, que ligam nucleotídeos para produzir uma cadeia de RNA (usando uma cadeia de DNA como modelo)." , correct: true },
          { text: "D) Durante a transcrição, o RNA é sintetizado a partir de RNA, utilizando DNA como molde.          " , correct: false},
     ]
 },
 {
         question: "Por que o RNA é importante para a síntese de proteínas nas células?" ,
          answers: [
          { text: "geografia" , correct: true },
          { text: "portugues" , correct: false },
          { text: "biologia" , correct: false },
          { text: "matematica" , correct: false },
      ]
   },
   {
    question: "Qual é a diferença entre a transcrição e a tradução??" ,
     answers: [
     { text: "geografia" , correct: true },
     { text: "portugues" , correct: false },
     { text: "biologia" , correct: false },
     { text: "matematica" , correct: false },
 ]
}
];
 
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
 
  let  currentQuestionIndex = 0;
 let score = 0;
 
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }
 
 function showQuestion(){
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + ". "  + currentQuestion. question;
 
     currentQuestion.answers.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if (answer.correct){
         button.dataset.correct = answer.correct;
     }
     button.addEventListener("click" , selectAnswer);
  });
 }
 
 
 function resetState(){
     nextButton.style.display = "block";
     while(answerButtons.firstChild){
         answerButtons.removeChild(answerButtons.firstChild);
     }
 }
 
 function selectAnswer(e){
   const selectedBtn = e.target ;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if (isCorrect){
      selectedBtn.classList.add("correct");
      score++;
   }else{
     selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
           button.classList.add("correct");
        }
         button.disabled = true;
     });
     nextButton.style.display = "block";
 }
 function showScore(){
   resetState();
   questionElement.innerHTML = `Você acertou  ${score} de ${questions.length} questões!`;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display = "block";
 }
 
 function  handleNextButton(){
     currentQuestionIndex++;
     if (currentQuestionIndex < questions.length){
         showQuestion();
     }else{
         showScore();
     }
 }
 
 nextButton.addEventListener("click", () =>{
   if (currentQuestionIndex < questions.length){
     handleNextButton();
   }else{
         startQuiz();
   }
 });
 
 
 startQuiz();
 document.getElementById('playButton').addEventListener('click', function() {
  this.classList.add('fade-out'); // Adiciona a classe de animação

  setTimeout(() => {
      window.location.href = 'sua_pagina_de_destino.html'; // Altere para a URL da página que você deseja redirecionar
  }, 500); // Espera a animação terminar antes de redirecionar
});
     