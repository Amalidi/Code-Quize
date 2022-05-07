// declare time in a variable
let time = 60;
let gameOver = false;
let correctAnswers = 0;
// declare message in a variable
let message = "";
let timerInterval;
let scoreDetails = {};
let whatQuestionAreWeOn = 0;

// targeting start button element
const quizStartBnt = document.getElementById("quizStartBtn");

// declaring question title, answers and correct answer as objects in an array
const questions = [
  //question 1
  {
    questionTitle: "What does HTML stand for in coding?",
    answers: [
      "Healthcare Technology management Layout",
      "Hey That’s My Lunch",
      "Hypertext Markup language",
      "How To Marinate Lemons",
    ],
    correctAnswer: "Hypertext Markup language",
  },
  //question 2
  {
    questionTitle: "What is the correct CSS syntax",
    answers: [
      "Header background: {black;}",
      "Header {background: black;}",
      "{header background: black};",
      "Header (background: black;)",
    ],
    correctAnswer: "Header {background: black;}",
  },
  //question 3
  {
    questionTitle: "How do you insert a comment in CSS?",
    answers: [
      "//  This way //",
      "“ This way”",
      "// This way ",
      "*/ This way */ ",
    ],
    correctAnswer: "*/ This way */ ",
  },
  //question 4
  {
    questionTitle:
      "In an HTML file where is the correct place to insert JavaScript tag?",
    answers: [
      "In the header section",
      "At the start of the body section",
      "At the bottom of the body section",
      "In the footer section",
    ],
    correctAnswer: "At the bottom of the body section",
  },
  //question 5
  {
    questionTitle:
      "Which of the following is a type of way to target HTML elements in CSS?",
    answers: [
      "Using a class selector",
      "Using a variable name",
      "Using a method",
      "Using a list",
    ],
    correctAnswer: "Using a class selector",
  },
  //question 6
  {
    questionTitle: "How do write variable names in JavaScript",
    answers: [
      "All letters in capitals without spacing between words",
      "All letters in lowercase with spacing between words",
      "First letter in uppercase, with spaces and first letter of subsequent words uppercase",
      "First letter in lowercase, no spaces and first letter of subsequent words uppercase",
    ],
    correctAnswer:
      "First letter in lowercase, no spaces and first letter of subsequent words uppercase",
  },
  //question 7
  {
    questionTitle: "Which operator is used to assign a value to an operator?",
    answers: ["+", "=", "*", "$"],
    correctAnswer: "=",
  },
];

const appendForm = () => {
  //target timer span
  const timerSpan = document.getElementById("timer-span");
  //update timer span for each second
  timerSpan.innerText = time;
  //target main section
  const mainSection = document.getElementById("main-tag");
  //creating a section for form
  const formSection = document.createElement("form");
  formSection.action = "./highscore.html";
  // using HTML as guide to build form section in JS
  formSection.innerHTML = `<section id="form-section" class="form">
  <div id="score">
    <p> Your score is ${time}</p>
  </div>
  <div>
    <div id="user-name" class="user-name">
      <label for="name">Full Name </label>
      <input class="name-input" type="text" placeholder="Enter full name.." />
    </div>
    <div id="submsitBtn">
      <button>Submit</button>
    </div>
    <div>validate user input alert here</div>
  </div>
 </section>`;
  //clear section
  mainSection.innerHTML = "";

  // append form section into main page
  mainSection.appendChild(formSection);

  let form = document.querySelector("form");
  let userInput = document.querySelector(".user-name input");
  form.addEventListener("submit", (event) => {
    scoreDetails.name = userInput.value;
    scoreDetails.score = time;
    localStorage.setItem("allScores", JSON.stringify(scoreDetails));
  });
};

const valiateAnswers = (currentQuestionIndex, userAnswer) => {
  if (
    userAnswer.trim("") ===
    questions[currentQuestionIndex].correctAnswer.trim("")
  ) {
    return true;
  } else {
    return false;
  }
};

const renderQuestionSection = () => {
  let getQuestions = "";
  // make a loop and that keep adding the the HTML onto the getQuestions and then add to the html (with a template literal)

  questions[whatQuestionAreWeOn].answers.forEach((answer) => {
    getQuestions += `<li class="answer-list">${answer}</li>`;
  });
  // targeting the main section
  const mainSection = document.getElementById("main-tag");
  //create question section in the main section
  const questionSection = document.createElement("section");
  // append section to main section
  questionSection.innerHTML = `<section id="question-section">
  <h1 class="question-title">${questions[whatQuestionAreWeOn].questionTitle}</h1>
  <ul class="answers">${getQuestions}</ul>
  <div id="render-alert" class="render-alert">${message}
  </div>
</section> `;
  //append question section on to main section
  mainSection.appendChild(questionSection);
  // add click event listener on #question-section
  let answers = document.querySelectorAll(".answer-list");
  answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
      //call the valiate answer function when user clicks on a list item
      if (valiateAnswers(whatQuestionAreWeOn, event.target.innerText)) {
        message = "<span style='color:green'>Correct answer!</span>";
        correctAnswers++;
      } else {
        message = "<span style='color:red'>Incorrect answer!</span>";
        if (time - 10 >= 0) {
          time = time - 10;
        } else {
          gameOver = true;
        }
      }

      // clear the main section of previous section
      mainSection.innerHTML = "";
      // append next question index on to the main section
      whatQuestionAreWeOn++;
      // call the render question function
      renderQuestionSection(whatQuestionAreWeOn);
    });
  });

  // resetting render alert message
  setTimeout(() => {
    const renderAlert = document.querySelector("#render-alert");
    if (renderAlert) {
      renderAlert.innerText = "";
    }
  }, 2000);

  //if get questions is equals to 7 append form
  if (whatQuestionAreWeOn === 6) {
    gameOver = true;
    //calling get append form function
    appendForm();
  }
};

const startTimer = () => {
  //target the timer container
  const timerContainer = document.querySelector(".timer-contianer");
  //create the inner HTML for timer
  timerContainer.innerHTML = `<div class="timer-div">
  <div id="timerStartBtn">
    Time Remaining: <span id="timer-span">${time}</span> seconds
  </div>
</div>`;
  // set interval for timer
  timerInterval = setInterval(() => {
    if (time == 0 || (gameOver && whatQuestionAreWeOn < 6)) {
      clearInterval(timerInterval);
      appendForm();
    } else if (!gameOver) {
      //target timer span
      const timerSpan = document.getElementById("timer-span");
      //update timer span for each second
      timerSpan.innerText = time;
      //set interval to minus one second from 60 seconds
      time--;
    }
  }, 1000);
};

const startQuiz = () => {
  //remove the start section
  const removeStartSection = () => {
    //targets the main tag element
    const startSection = document.getElementById("start-quiz-section");
    //removes the start section
    startSection.remove();
  };
  // call the remove start section function
  removeStartSection();
  //call render question function
  renderQuestionSection();
  //call the start timer function
  startTimer();
};

// add start button click event listener
quizStartBnt.addEventListener("click", startQuiz);