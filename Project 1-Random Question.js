
function Question(questions, answers,correct,askQuestion,quiz){
    this.questions=questions;
    this.answers=answers;
    this.correct=correct;
this.askQuestion= function(){
var random =Math.floor(Math.random()*this.questions.length);
console.log(this.questions[random]+ "\n"+this.answers[random]);
  this.correct = this.correct[random]
  } 
this.quiz=function(){
var answerUser= parseInt(prompt("Please, select the correct answer"));
if(answerUser==this.correct){
   console.log("Correct answer!");   
    }else{ 
        console.log("Wrong answer! Try again!");  
}
}
}
  var Q1= new Question(["1. Is JavaScript the coolest programming language in the world?","2. What is the name of this course's teacher?","3. What does best describe coding?"], ["1: Yes \n2: No", "1: Mike \n2: Jhon \n3: Ozzy","1: Boring \n2: Hard \n3: Fun \n4: Tedious"], [1,3,3]);
Q1.askQuestion()
Q1.quiz()

