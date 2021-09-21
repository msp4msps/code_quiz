var questionText = document.querySelector(".question");
var answerText = document.querySelector(".answers1");
var startBTN = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var answerResponse = document.querySelector(".answerText");
var form = document.querySelector("form");
var allDone = document.querySelector(".allDone");
var highScoreBTN = document.querySelector(".highScore");
var highScorePage = document.querySelector(".viewHigh");
var body = document.querySelector("header");
var displayScores = document.querySelector(".highScores");
let num = 0;
var counter = 75;
initialList = [];
scores = [];
//Questions

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<javascript>",
      b: "<script>",
      c: "<js>",
    },
    correctAnswer: "c",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "The <body> section",
      b: "The <head> section",
      c: "Both the head and body section are correct",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called xxx.js?",
    answers: {
      a: " <script href=xxx.js>",
      b: " <script name=xxx.js>",
      c: " <script src=xxx.js>",
    },
    correctAnswer: "c",
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
  // highScore(score);
  newText.textContent = `All Done! Your score is ${counter}`;
  allDone.appendChild(newText);
  counter = "0";
  timer.style.visibility = "hidden";
}

// function highScore(score) {
//   localStorage.set;
// }

highScoreBTN.addEventListener("click", function (event) {
  event.preventDefault();
  var input = document.getElementById("fname");
  var initials = JSON.parse(localStorage.getItem("Initials"));
  if (initials !== null) {
    initialList = initials;
  }
  var newAdd = [
    {
      name: input.value,
      score: score,
    },
  ];

  initialList.push(newAdd);

  // var scoreList = JSON.parse(localStorage.getItem("score"));
  // if (scoreList !== null) {
  //   scores = scoreList;
  // }
  // initialList.push(input.value);
  // console.log(score);
  // scores.push(score);

  localStorage.setItem("Initials", JSON.stringify(initialList));
  // localStorage.setItem("score", JSON.stringify(scores));
  input.value = "";
  var success = document.createElement("h1");
  success.textContent = "Submitted!";
  success.className = "Submit";
  highScoreBTN.style.visibility = "hidden";
  form.appendChild(success);
  setTimeout(() => {
    success.textContent = "";
  }, 1000);
});

highScorePage.addEventListener("click", function (event) {
  event.preventDefault();
  init();
});

function init() {
  var storedInitials = JSON.parse(localStorage.getItem("Initials"));
  var storedScores = JSON.parse(localStorage.getItem("score"));

  for (var i = 0; i < storedInitials.length; i++) {
    var todo = JSON.stringify(storedInitials[i]);
    console.log = todo;
    var li = document.createElement("li");
    li.textContent = todo;
    answerText.textContent = "";
    answerResponse.textContent = "";
    questionText.textContent = "";
    startBTN.style.visibility = "hidden";
    displayScores.append(li);
  }
}
