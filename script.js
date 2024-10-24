const questions = [
    {
      question: "O que é Dna?" ,
      answers: [
         { text: "A) Uma molécula responsável pela transmissão de impulsos nervosos." , correct: false },
         { text: "B) Um tipo de carboidrato encontrado nas células" , correct: false },
         { text: "C) O ácido que armazena a informação genética dos organismos vivos." , correct: true },
         { text: "D) Uma proteína que auxilia na digestão dos alimentos." , correct: false },
        ]
    },
    {
       question: "qual seu animal preferido?" ,
        answers: [
        { text: "girafa" , correct: true },
        { text: "gato" , correct: false },
        { text: "boi" , correct: false },
        { text: "cachorro" , correct: false },
     ]
   },
   {
         question: "qual sua cor preferida?" ,
          answers: [
          { text: "azul" , correct: false },
          { text: "amarelo" , correct: false },
          { text: "vermelho" , correct: false },
          { text: "rosa" , correct: true},
     ]
 },
 {
         question: "qual sua materia preferida?" ,
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
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
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