var questionText = document.querySelector(".question");
var answerText = document.querySelector(".answers1");
var startBTN = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var answerResponse = document.querySelector(".answerText");
var body = document.querySelector("header");
let num = 0;
//Questions

var questions = [
  {
    question: "What it do?",
    answers: {
      a: "Nick Ross",
      b: "Nick Ross",
      c: "Nick Ross",
    },
    correctAnswer: "b",
  },
  {
    question: "What it be?",
    answers: {
      a: "Nick Ross",
      b: "Nicksss Ross",
      c: "Nick Rasdaoss",
    },
    correctAnswer: "b",
  },
  {
    question: "What it is?",
    answers: {
      a: "Nick Ross",
      b: "Nick Ross",
      c: "Nick Ross",
    },
    correctAnswer: "b",
  },
];

//Function to create body from question
function startQuiz() {
  const output = [];
  const answers = [];
  var counter = 75;
  setInterval(() => {
    timer.textContent = counter;
    counter--;
  }, 1000);
  var current = questions[num];
  answerText.textContent = "";
  startBTN.style.visibility = "hidden";
  for (letter in current.answers) {
    button = document.createElement("button");
    button.className = `${letter}`;
    button.textContent += `${letter} :
    ${current.answers[letter]}`;
    answerText.appendChild(button);
  }
  console.log(current.correctAnswer);
  answerText.addEventListener("click", function (event) {
    if (event.target.className === current.correctAnswer) {
      var div = document.createElement("div");
      div.textContent = "Correct";
      div.className = "answerChoice";
      answerResponse.appendChild(div);
      setTimeout(function () {
        nextQuestion();
      }, 1000);
    } else {
      var div = document.createElement("div");
      div.textContent = `Incorrect, correct answer ${current.correctAnswer}`;
      div.className = "answerChoice";
      answerResponse.appendChild(div);
      setTimeout(function () {
        counter = counter - 10;
        nextQuestion();
      }, 1000);
    }
  });
  // add this question and its answers to the output
  output.push(` ${current.question}`);

  // finally combine our output list into one string of HTML and put it on the page
  questionText.textContent = output;
}

//Start Button

startBTN.addEventListener("click", function () {
  var body = document.querySelector("header");
  startQuiz();
});

function nextQuestion() {
  num++;
  if (num < questions.length) {
    const output = [];
    var current = questions[num];
    answerText.textContent = "";
    answerResponse.textContent = "";
    startBTN.style.visibility = "hidden";
    for (letter in current.answers) {
      button = document.createElement("button");
      button.className = `${letter}`;
      button.textContent += `${letter} :
      ${current.answers[letter]}`;
      answerText.appendChild(button);
    }

    output.push(` ${current.question}`);

    // finally combine our output list into one string of HTML and put it on the page
    questionText.textContent = output;
  } else {
    console.log("We done");
  }
}
