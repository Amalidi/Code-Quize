// global declarations for variables used in several functions
let selectedTheme = "";
let selectedQuestions = [];
let questionIndex = 0;
let timerValue;
let correctAnswers = 0;
let quizComplete = false;
let score = 0;
const scoresLSKey = "highScores";

//extracting themes from set of questions
let themes = [...new Set(questions.map((a) => a.theme))];

// utility functions
const getFromLS = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getScoresFromLS = () => {
  return getFromLS(scoresLSKey);
};

const createScoresInLS = () => {
  localStorage.setItem(scoresLSKey, JSON.stringify([]));
};

const writeToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const writeScoresToLS = (data) => {
  //get scores from Local storage
  const highScores = getScoresFromLS();
  // push new score object into array
  highScores.push(data);
  //write the updated array into local storage
  writeToLS(scoresLSKey, highScores);
};

//function to run on load of page
const onLoad = () => {
  // function to initialise local storage
  //get info from local storage
  const highScoresFromLS = getScoresFromLS();

  // check if highscores exists in LS
  //if it doesn't exist, set an empty array and stringify as we set it
  if (!highScoresFromLS) {
    createScoresInLS();
  }
};

//functions to render the different quiz pages
const renderQuizOver = () => {
  // create section
  const endSection = document.createElement("section");
  endSection.setAttribute("class", "end-section wrapper");
  endSection.setAttribute("id", "end-section");
  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Let's save your score!";
  // create paragraph
  const p1 = document.createElement("p");
  p1.setAttribute("class", "message-container");
  p1.innerHTML = "You ran out of time so you didn't score any points!";
  const p2 = document.createElement("p");
  p2.setAttribute("class", "message-container");
  p2.innerHTML = "Click Continue to try again or go see the High Scores table.";
  //create links
  const aHome = document.createElement("a");
  aHome.setAttribute("class", "btn retry-btn link");
  aHome.setAttribute("id", "retry-btn");
  aHome.setAttribute("href", "./index.html");
  aHome.textContent = "Retry";
  const aScores = document.createElement("a");
  aScores.setAttribute("class", "btn scores-btn link");
  aScores.setAttribute("id", "scores-btn");
  aScores.setAttribute("href", "./scores.html");
  aScores.textContent = "Go to High Scores";

  // append children to section
  endSection.append(h2, p1, p2, aHome, aScores);
  // append section to main
  main.append(endSection);
};

const renderQuizCompleteSection = () => {
  // create section
  const endSection = document.createElement("section");
  endSection.setAttribute("class", "end-section wrapper");
  endSection.setAttribute("id", "end-section");
  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Take the code quiz challenge again!";
  // create paragraph
  const p = document.createElement("p");
  p.setAttribute("class", "message-container");
  p.textContent = "Thanks for taking the quiz. Do you want to try again?";
  //create links
  const aHome = document.createElement("a");
  aHome.setAttribute("class", "btn retry-btn link");
  aHome.setAttribute("id", "retry-btn");
  aHome.setAttribute("href", "./index.html");
  aHome.textContent = "Retry";
  const aScores = document.createElement("a");
  aScores.setAttribute("class", "btn scores-btn link");
  aScores.setAttribute("id", "scores-btn");
  aScores.setAttribute("href", "./scores.html");
  aScores.textContent = "Go to High Scores";

  // append children to section
  endSection.append(h2, p, aHome, aScores);
  // append section to main
  main.append(endSection);
};

const handleFormSubmit = (event) => {
  event.stopPropagation();
  event.preventDefault();
  const currentTarget = event.currentTarget;
  // get value from input
  const fullName = document.getElementById("input-field").value;

  // check if empty then render error alert with message and status
  if (!fullName) {
    alert("Please enter your name to save your score");
  }
  // if not empty then create the score object
  else {
    if (score) {
      const newHighScore = {
        fullName,
        score,
      };

      writeScoresToLS(newHighScore);
    }
    // remove form section
    currentTarget.remove();
    // render quizComplete section
    renderQuizCompleteSection();
  }
};

const renderForm = () => {
  // create section
  const formSection = document.createElement("section");
  formSection.setAttribute("class", "form-section wrapper");
  formSection.setAttribute("id", "form-section");

  // create form
  const form = document.createElement("form");
  form.setAttribute("class", "form-container wrapper");
  form.setAttribute("id", "form-container");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Let's save your score!";

  const p = document.createElement("div");
  p.setAttribute("class", "message-container");
  p.textContent = "Your quiz summary:";
  // create small score table
  const table = document.createElement("table");
  table.setAttribute("class", "score-table");
  const row1 = document.createElement("tr");
  const row1Data1 = document.createElement("td");
  row1Data1.innerHTML = "Theme";
  const row1Data2 = document.createElement("td");
  row1Data2.innerHTML = selectedTheme;
  row1.append(row1Data1, row1Data2);

  const row2 = document.createElement("tr");
  const row2Data1 = document.createElement("td");
  row2Data1.innerHTML = "Total number of questions";
  const row2Data2 = document.createElement("td");
  row2Data2.innerHTML = selectedQuestions.length;
  row2.append(row2Data1, row2Data2);

  const row3 = document.createElement("tr");
  const row3Data1 = document.createElement("td");
  row3Data1.innerHTML = "Number of correct answers";
  const row3Data2 = document.createElement("td");
  row3Data2.innerHTML = correctAnswers;
  row3.append(row3Data1, row3Data2);

  const row4 = document.createElement("tr");
  const row4Data1 = document.createElement("td");
  row4Data1.innerHTML = "Your score";
  const row4Data2 = document.createElement("td");
  row4Data2.innerHTML = score;
  row4.append(row4Data1, row4Data2);

  //append rows to table
  table.append(row1, row2, row3, row4);

  //create div for input label and text field
  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "input-container box-row");
  inputDiv.setAttribute("id", "input-container");
  const label1 = document.createElement("label");
  label1.setAttribute("class", "input-label");
  label1.setAttribute("for", "input");
  label1.textContent = "Enter your full name";
  const input = document.createElement("input");
  input.setAttribute("class", "input-field");
  input.setAttribute("id", "input-field");
  input.setAttribute("type", "text");
  input.setAttribute("aria-label", "enter your initials");
  inputDiv.append(label1, input);

  // create div for submit button
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "submit-button-container box-row");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submit-btn btn");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.textContent = "Submit";
  buttonDiv.append(submitButton);

  //append all divs to form
  form.append(h2, p, table, inputDiv, buttonDiv);
  //append form to form section
  formSection.append(form);
  // append form section to main
  main.append(formSection);
  // add submit event handler to form section
  formSection.addEventListener("submit", handleFormSubmit);
};

const startTimer = () => {
  // declare variable for timer span
  const timerSpan = document.getElementById("timer-span");
  // declare function to execute every 1 sec
  const countdown = () => {
    // target timer span -> done outside of function
    //decrement timer value
    timerValue -= 1;
    //set text in timer span as new value
    timerSpan.textContent = timerValue;
    // check if quiz is complete
    if (quizComplete) {
      clearInterval(timerId);
      document.getElementById("timer-section").remove();
    } else {
      // check if timer reaches 0
      if (timerValue <= 0) {
        clearInterval(timerId);
        score = 0;
        document.getElementById("timer-section").remove();
        document.getElementById("question-section").remove();
        renderQuizOver();
      }
    }
  };

  // setInterval of 1000ms (1s)
  const timerId = setInterval(countdown, 1000);
};

const renderTimerSection = () => {
  // create section
  const timerSection = document.createElement("section");
  timerSection.setAttribute("class", "timer-section box-row");
  timerSection.setAttribute("id", "timer-section");

  // create div for theme name
  const timerDivTheme = document.createElement("div");
  const p1 = document.createElement("p");
  p1.setAttribute("class", "theme-display");
  p1.textContent = `Quiz - Theme : ${selectedTheme}`;
  timerDivTheme.append(p1);

  // create div for timer number
  const timerDivNum = document.createElement("div");
  timerDivNum.setAttribute("class", "timer-display box-row");
  const p2 = document.createElement("p");
  p2.setAttribute("class", "timer-item");
  p2.textContent = "Time remaining : ";
  const span = document.createElement("span");
  span.setAttribute("class", "timer-item");
  span.setAttribute("id", "timer-span");
  span.textContent = ` ${timerValue} `;

  // append divs to section
  timerDivNum.append(p2, span);
  timerSection.append(timerDivTheme, timerDivNum);
  // append section to main
  main.append(timerSection);

  //start the timer
  startTimer();
};

const handleQuestionClick = (event) => {
  const currentTarget = event.currentTarget;
  const target = event.target;

  // act only if click is on list item
  if (target.tagName === "LI") {
    //get the answer from the user
    const selectedAnswer = parseInt(target.getAttribute("data-index"));

    //compare data index to correct index
    if (selectedAnswer === selectedQuestions[questionIndex].correctIndex) {
      //add 1 to the count of correct answers
      correctAnswers += 1;
    } else {
      timerValue -= 5;
    }

    //remove the current section displayed
    currentTarget.remove();
    //check where we are in list of question - if we are not at the last one
    if (questionIndex < selectedQuestions.length - 1) {
      // increase question index by 1
      questionIndex += 1;
      // render the next question
      renderQuestion(selectedQuestions[questionIndex]);
    }
    // if we are at the last question
    else {
      // save the score
      score = timerValue;
      quizComplete = true;
      // render the form section
      renderForm();
    }
  }
};

const renderQuestion = (question) => {
  //render question section

  //create section
  const questionSection = document.createElement("section");
  questionSection.setAttribute("class", "question-section wrapper");
  questionSection.setAttribute("id", "question-section");
  //create div
  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question-container");
  questionDiv.setAttribute("id", "question-container");
  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = question.text;
  //create ul
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list");

  //for each theme create li and append to ul
  const renderListItems = (option, i) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item btn");
    li.setAttribute("data-index", i);
    li.textContent = option;
    ul.appendChild(li);
  };

  question.options.forEach(renderListItems);

  //append children to question div
  questionDiv.append(h2, ul);

  // create status div
  const statusDiv = document.createElement("div");
  statusDiv.setAttribute("class", "status-container");
  const progressBar = document.createElement("progress");
  progressBar.setAttribute("class", "progress-bar");
  progressBar.setAttribute("id", "progress-bar");
  progressBar.setAttribute("max", selectedQuestions.length);
  progressBar.setAttribute("value", questionIndex);
  const p = document.createElement("p");
  p.setAttribute("class", "correct-status");
  p.setAttribute("id", "correct-status");
  p.textContent = `Correct answers so far: ${correctAnswers}  -  Remaining questions : ${
    selectedQuestions.length - questionIndex
  } out of ${selectedQuestions.length}`;
  // append children to status div
  statusDiv.append(progressBar, p);

  //append both divs to question section
  questionSection.append(questionDiv, statusDiv);

  //append question section to main
  main.append(questionSection);

  //add event listener on question section
  questionSection.addEventListener("click", handleQuestionClick);
};

const handleThemeClick = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  // act only if click is on list item
  if (target.tagName === "LI") {
    // get the answer from the user
    selectedTheme = target.getAttribute("data-text");
    // create the array containing the questions matching the selected theme
    selectedQuestions = questions.filter(
      (question) => question.theme === selectedTheme
    );
    //set the time value according to the array length - 10s per question
    timerValue = 10 * selectedQuestions.length;

    // remove the current section displayed
    currentTarget.remove();
    // render the next relevant section
    renderTimerSection();
    renderQuestion(selectedQuestions[questionIndex]);
  }
};

const renderTheme = () => {
  //remove start section
  const startSection = document.getElementById("start-section");
  startSection.remove();

  //render theme section

  //create section
  const themeSelection = document.createElement("section");
  themeSelection.setAttribute("class", "theme-selection wrapper");
  themeSelection.setAttribute("id", "theme-selection");
  //create div
  const themeDiv = document.createElement("div");
  themeDiv.setAttribute("class", "theme-container");
  themeDiv.setAttribute("id", "theme-container");
  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Pick a theme for your quiz";
  //create ul
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list");
  //for each theme create li and append to ul
  const renderListItems = (theme) => {
    const li = document.createElement("li");
    li.setAttribute("class", "theme-item btn");
    li.setAttribute("data-text", theme);
    li.setAttribute("id", theme);
    li.textContent = theme;
    ul.appendChild(li);
  };
  themes.forEach(renderListItems);

  //append children to theme div
  themeDiv.append(h2, ul);
  //append div to section
  themeSelection.append(themeDiv);
  //append section to main
  main.append(themeSelection);

  // add event listener on theme section
  themeSelection.addEventListener("click", handleThemeClick);
};

//main function to take quiz - starts the process (and left comments in as summary notes for general logic)
const takeQuiz = () => {
  //render theme selection
  renderTheme();

  //choose theme --> from renderTheme goes to handleThemeClick

  //start questions --> from handleThemeClick goes to renderQuestion and renderTimer/startTimer

  //choose answer --> with event listener in renderQuestion goes to handleQuestionClick

  //validate answer --> in handleQuestionClick

  //continue quiz + continue validating answers
  // --> from handleQuestionClick goes to renderQuestion, and on click back to handleQuestionClick

  // move to quiz over page when timer runs out but quiz is not finished --> from startTimer, when reaches 0 goes to renderQuizOver

  //move to form on quiz completion (other than score = 0) --> from handleQuestionClick goes to renderForm

  //submit score --> with submit event listener in renderForm goes to handleFormSubmit

  //go to quiz complete page --> from handleFormSubmit goes to renderQuizCompleteSection

  //retry --> link to home page
};

//set page load
window.addEventListener("load", onLoad);
// add event listener to start button
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", takeQuiz);