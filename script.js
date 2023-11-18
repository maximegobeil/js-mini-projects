// Memory game project
let generatedNumber = 0;

function randomNumber(level) {
  let minDigit = 1000 * Math.pow(10, level - 1);
  generatedNumber = Math.floor(minDigit + Math.random() * (9 * minDigit));
  return generatedNumber;
}

function startMemoryGame() {
  if (document.getElementById("display-number").innerHTML == "Select a level") {
    return;
  }
  document.getElementById("ready").style.display = "none";
  document.getElementById("user-input").style.display = "block";
}

function checkNumber() {
  const userInput = document.getElementById("user-number").value;
  if (userInput == generatedNumber) {
    document.getElementById("memory-result").innerHTML = "Correct";
  } else {
    document.getElementById("memory-result").innerHTML = "Incorrect";
  }
}

function resetMemoryGame() {
  document.getElementById("ready").style.display = "flex";
  document.getElementById("user-input").style.display = "none";
  document.getElementById("memory-result").innerHTML = "";
  document.getElementById("user-number").value = "";
  document.getElementById("display-number").innerHTML = "Select a level";
}

const memoryLvl = document.querySelectorAll('input[name="level"]');
memoryLvl.forEach((element) => {
  element.addEventListener("click", () => {
    document.getElementById("display-number").innerHTML = randomNumber(
      element.value
    );
  });
});

// Rock paper project

let playerScore = 0;
let computerScore = 0;

function setScore() {
  document.getElementById(
    "player-score"
  ).textContent = `Player: ${playerScore}`;
  document.getElementById(
    "computer-score"
  ).textContent = `CPU: ${computerScore}`;
}

function computerPlay() {
  const options = ["Rock", "Paper", "Scissor"];
  return options[Math.floor(Math.random() * 3)];
}

function comparePlay(playerSelection) {
  const computerSelection = computerPlay();
  let result = "";
  if (playerSelection === computerSelection) {
    result = "Draw";
  } else {
    switch (playerSelection) {
      case "Rock":
        result = computerSelection === "Paper" ? "Lose" : "Win";
        break;
      case "Paper":
        result = computerSelection === "Scissor" ? "Lose" : "Win";
        break;
      case "Scissor":
        result = computerSelection === "Rock" ? "Lose" : "Win";
        break;
    }
  }
  if (result === "Win") playerScore++;
  else if (result === "Lose") computerScore++;
  document.getElementById(
    "rock-result"
  ).innerHTML = `${result}, P: ${playerSelection}, C: ${computerSelection}`;
  setScore();
}

setScore();
document.getElementById("rock-img").addEventListener("click", () => {
  comparePlay("Rock");
});
document.getElementById("paper-img").addEventListener("click", () => {
  comparePlay("Paper");
});
document.getElementById("scissors-img").addEventListener("click", () => {
  comparePlay("Scissor");
});

// Quiz project

const questions = [
  {
    question: "What color is the sun?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "How many planets are in our solar system?",
    options: ["9", "6", "8"],
    correctAnswer: "8",
  },
];

let questionNumber = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionText = [
  document.getElementById("label1"),
  document.getElementById("label2"),
  document.getElementById("label3"),
];
const resultElement = document.getElementById("quiz-result");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
  if (questionNumber < questions.length) {
    questionText.textContent = questions[questionNumber].question;
    for (let i = 0; i < 3; i++) {
      optionText[i].textContent = questions[questionNumber].options[i];
    }
  } else {
    // Quiz is completed
    questionText.textContent = "Quiz Completed";
    resultElement.textContent = `Your Score is ${score} out of ${questions.length}`;
    document.getElementById("options-container").style.display = "none";
    nextButton.style.display = "none";
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const answer = selectedOption.labels[0].textContent;
    if (answer === questions[questionNumber].correctAnswer) {
      score++;
    }
    questionNumber++;
    displayQuestion();
    selectedOption.checked = false;
  }
}

nextButton.addEventListener("click", checkAnswer);

// Initial display
displayQuestion();

// Counter project

let counter = parseInt(localStorage.getItem("count")) || 0; // Checking for value in local storage

function updateCounter() {
  document.getElementById("result").textContent = counter;
  localStorage.setItem("count", counter);
}

function changeCounter(count) {
  counter += count;
  if (counter < 0) counter = 0;
  updateCounter();
}

document
  .getElementById("upButton")
  .addEventListener("click", () => changeCounter(1));
document
  .getElementById("downButton")
  .addEventListener("click", () => changeCounter(-1));
document
  .getElementById("resetButton")
  .addEventListener("click", () => changeCounter(-counter));

updateCounter();
