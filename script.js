var questionText = document.querySelector(".question");
var answerText = document.querySelector(".answers1");
var startBTN = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var answerResponse = document.querySelector(".answerText");
var form = document.querySelector("form");
var allDone = document.querySelector(".allDone");
let num = 0;
var counter = 75;
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

function startTime() {
  return countdown;
}

//Function to create body from question
function startQuiz() {
  const output = [];
  const answers = [];

  //SET THE INITIAL TIMER
  var countdown = setInterval(() => {
    if (counter === 0) {
      clearInterval(countdown);
      Done();
    }
    timer.textContent = counter;
    counter--;
    return countdown;
  }, 1000);
  //SET THE INITIAL QUESTION
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

  //SEE IF SELECTION IS CORRECT ANSWER
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
      //SUBTRACT TEN SECONDS FROM TIMER IF INCORRECT
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

//ADDING INITIALS WHEN ALL DONE

// Move on to next Question IN LIST
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
    // add this question and its answers to the output
    output.push(` ${current.question}`);

    // finally combine our output list into one string of HTML and put it on the page
    questionText.textContent = output;
  } else {
    Done();
  }
}

function Done() {
  answerText.textContent = "";
  answerResponse.textContent = "";
  questionText.textContent = "";
  var newText = document.createElement("h3");
  form.style.visibility = "visible";
  score = counter;
  highScore(score);
  newText.textContent = `All Done! Your score is ${counter}`;
  allDone.appendChild(newText);
  counter = "0";
  timer.style.visibility = "hidden";
}

function highScore(score) {
  localStorage.set;
}
