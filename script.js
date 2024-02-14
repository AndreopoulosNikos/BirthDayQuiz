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
  q: "How many hours a day Olga works?",
  a1: "8 Hours",
  a2: "6 Hours",
  a3: "Do you mean the time between my smoking breaks?",
  a4: "Lol! What is work?",
  correct: "Do you mean the time between my smoking breaks?",
});

questions.set("question4", {
  q: "When Olga argues with a senior coworker, what does she do?",
  a1: "Nothing",
  a2: "Cry like a baby",
  a3: "Punch him/her in the face",
  a4: "Prays to our Lord and Savior Jesus",
  correct: "Cry like a baby",
});

questions.set("question5", {
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

answerButtons.forEach((button) => {
  button.addEventListener("touchend", function () {
    button.classList.remove("hover_button");
    console.log("touchend");
  });
});

answerButtons.forEach((button) => {
  button.addEventListener("touchstart", function () {
    button.classList.add("hover_button");
  });
});

// answerButtons.forEach((button) => {
//   button.addEventListener("mouseover", function () {
//     button.classList.add("hover_button");
//     console.log("mouseadd");
//   });
// });

// answerButtons.forEach((button) => {
//   button.addEventListener("mouseout", function () {
//     button.classList.remove("hover_button");
//     console.log("mouse");
//   });
// });

function checkAnswer(clickedButton) {
  const selectedAnswer =
    clickedButton.currentTarget.querySelector("p").textContent;
  if (selectedAnswer === questions.get("question" + questionNumber).correct) {
    clickedButton.currentTarget.classList.add("hover_button");
    questions.get("question" + questionNumber).correct = "Checked";
    document.querySelector("#pic h2").style.display = "none";
    document.querySelector("#pic p").style.display = "none";
    document.querySelector("#pic img").style.display = "block";
    if (questionNumber == questions.size) {
      winGame();
    } else {
      document.querySelector("#answers h2").textContent = "Correct Answer!!!";
      audio.play();
      setTimeout(setQuestion, 7000);
    }
  } else if (
    document.querySelector("#answers h2").textContent === "Choose an answer!!!"
  ) {
    document.querySelector("#answers h2").textContent = "Wrong Answer...";
  } else if (
    document.querySelector("#answers h2").textContent == "Correct Answer!!!"
  ) {
    document.querySelector("#answers h2").textContent =
      "Stop Clicking Asshole!";
  }
}

//function to set questions and reset
function setQuestion() {
  questionNumber++;
  answerButtons.forEach((button) => {
    button.classList.remove("hover_button");
  });
  audio.src = "Sounds/Audio" + questionNumber + ".mp3";
  document.querySelector("#pic img").src =
    "Images/Image" + questionNumber + ".jpg";
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

function winGame() {
  answerButtons.forEach((button) => {
    button.classList.remove("hover_button");
  });
  document.querySelector("#b1 p").textContent = "Happy";
  document.querySelector("#b2 p").textContent = "Birthday";
  document.querySelector("#b3 p").textContent = "To";
  document.querySelector("#b4 p").textContent = "You!";
  document.querySelector("#answers h2").textContent = "🎊Happy Birthday🎂";
  document.querySelector("#pic img").src = "Images/Image5.jpg";

  audio.src = "Sounds/Audio5.mp3";
  audio.play();

  setTimeout(() => {
    document.querySelector("#pic img").src = "Images/Image6.jpg";
  }, 3000);
  setTimeout(() => {
    document.querySelector("#pic img").src = "Images/Image7.jpg";
  }, 6000);
  setTimeout(() => {
    document.querySelector("#pic img").src = "Images/Image8.jpg";
  }, 9000);
}

setQuestion();
