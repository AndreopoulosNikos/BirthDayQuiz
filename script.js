"use strict";
// Map for questions
const questions = new Map();

const audio = new Audio();
// questions
questions.set("question1", {
  q: "Which animal is considered the most deadly?",
  a1: "Lion",
  a2: "Shark",
  a3: "Crow",
  a4: "Hippopotamus",
  correct: "Crow",
});

questions.set("question2", {
  q: "How much money does Olga owe to Nikos?",
  a1: "50\u20AC",
  a2: "10\u20AC",
  a3: "30\u20AC",
  a4: "5\u20AC",
  correct: "10\u20AC",
});

questions.set("question3", {
  q: "When is Olga's Birthday?",
  a1: "16 Jan",
  a2: "27 Oct",
  a3: "05 March",
  a4: "06 Apr",
  correct: "06 Apr",
});
//question counter
let questionNumber = 0;

const answerButtons = document.querySelectorAll(".answer_button");

//adding event listener
for (const button of answerButtons) {
  button.addEventListener("click", checkAnswer);
}

function checkAnswer(clickedButton) {
  const selectedAnswer =
    clickedButton.currentTarget.querySelector("p").textContent;
  if (selectedAnswer === questions.get("question" + questionNumber).correct) {
    document.querySelector("#pic h2").style.display = "none";
    document.querySelector("#pic p").style.display = "none";
    document.querySelector("#pic img").style.display = "block";
    if (questionNumber == 3) {
      happyBirthDay();
    } else {
      document.querySelector("#answers h2").textContent = "Correct Answer!!!";
      audio.play();
      setTimeout(setQuestion, 5000);
    }
  } else {
    document.querySelector("#answers h2").textContent = "Wrong Answer.. Wtf???";
  }
}
//function to set questions and reset
function setQuestion() {
  questionNumber++;
  audio.src = "Sounds/Audio" + questionNumber + ".mp3";
  document.querySelector("#pic img").src =
    "Images/Image" + questionNumber + ".png";
  document.querySelector("#pic h2").style.display = "block";
  document.querySelector("#pic p").style.display = "block";
  document.querySelector("#pic img").style.display = "none";
  document.querySelector("#qNumber").textContent = questionNumber;
  document.querySelector("#pic p").textContent = questions.get(
    "question" + questionNumber
  ).q;
  document.querySelector("#b1 p").textContent = questions.get(
    "question" + questionNumber
  ).a1;
  document.querySelector("#b2 p").textContent = questions.get(
    "question" + questionNumber
  ).a2;
  document.querySelector("#b3 p").textContent = questions.get(
    "question" + questionNumber
  ).a3;
  document.querySelector("#b4 p").textContent = questions.get(
    "question" + questionNumber
  ).a4;
  document.querySelector("#answers h2").textContent = "Choose an answer!!!";
}

function happyBirthDay() {
  document.querySelector("#b1 p").textContent = "Happy";
  document.querySelector("#b2 p").textContent = "Birthday";
  document.querySelector("#b3 p").textContent = "To";
  document.querySelector("#b4 p").textContent = "You!";
  document.querySelector("#answers h2").textContent = "🎊Happy Birthday🎂";
  document.querySelector("#pic img").src = "Images/Image3.png";

  audio.src = "Sounds/Audio3.mp3";
  audio.play();
}

setQuestion();
