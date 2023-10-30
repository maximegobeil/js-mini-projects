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

updateCounter(); // Initial update
