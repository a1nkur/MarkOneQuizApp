var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Kaustubh",
    score: 3,
  },

  {
    name: "Mritunjay",
    score: 2,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Bengaluru"
}, {
  question: "My favorite programming language is? ",
  answer: "JavaScript"
},
{
  question: "In Bengaluru where do i live? ",
  answer: "Marathahalli"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW ANKUR?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("---------------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(" kudos! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it in scoreboard");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


