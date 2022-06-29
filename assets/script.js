// console.log("hello")

// Targeting the banner box
const bannerBox = document.getElementById("banner-box");

// Targeting the start quiz button
const startButton = document.getElementById("start-btn")

// Targeting the main section
const mainSection = document.getElementById("main")

const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");

// const targeting the time
const timerSpan = document.getElementById("time-span")

// const formSection = document.getElementById("form-box");

// question index
let questionIndex = 0;
let time = 60;
let feedbackResults ={};
let quizComplete = false;
let correctAnswers = 0;
let currentQuestion
const scoresLSKey = "highScores";
let gameOver = false;


const handleTimerButton = () => {
    console.log("start button clicked");
    const updateTimerValue = () => {
      // increase the  timer by 1
      time -= 1;
  
      // set text to new timer figures
      timerSpan.textContent = time;
      if (quizComplete) {
        clearInterval(timerId);
        document.getElementById("timer").remove();
      } else {
  
      // check if timer is 0
      if (time <= 0) {
        clearInterval(timerId);
      }
    }
};
  
    // start the timer
    const timerId = setInterval(updateTimerValue, 1000);
    console.log(timerId);
  };

  startButton.addEventListener("click", handleTimerButton);

  document.getElementById("time-span").addEventListener("click", () => {
    time -= 1;
  });



// // an element for results ls
// const highScore = {
//     score: score,
//   };

// using local storage for the highscores
const feedbackSoresLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };


const highscoresLS = () => {
    return feedbackSoresLS(scoresLSKey);
  };

const highScoresInLS = () => {
    localStorage.setItem(scoresLSKey, JSON.stringify([]));
  };


  const feedbackSoresToLS = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  }

  const feedbackHighscoresLS = (data) => {

    const highScores = highscoresLS();
    // push into an array
    highScores.push(data);
    //write the updated array into local storage
    writeToLS(scoresLSKey, highScores);
  };

  const HighscoresPage = () => {
    //   from local storage
    const feedbackHighscoresFromLS = highscoresLS ();

    // check if it exist
    if (!feedbackHighscoresFromLS) {
        highScoresInLS();
      }
  };

  





// question options
const questions = [
    {
        question: "Which of the following cities was the first to open a public library?",
        options: ["Seville, Spain", "Warsaw, Poland", "Naples, Italy", "Stuttgart, Germany"],
        answer: "Warsaw, Poland"
    },
    {
        question: "In 2013 which two airlines merged to become the world’s largest airline?",
        options: ["Air France and KLM", "American Airlines and US Airways", "British Airways and Iberia", "Lufthansa and Germanwings"],
        answer: "American Airlines and US Airways"
    },
    {
        question: "Which country has more lakes than the rest of the world combined?",
        options: ["China", "Finland", "Norway", "Canada"],
        answer: "Canada"
    },
    {
        question: "Which country has the world's highest waterfall?",
        options: ["Japan", "Venezuela", "Uganda", "America"],
        answer: "Venezuela"
    },
    {
        question: "Which country connects North and South America?",
        options: ["Panama", "Honduras", "Nicaragua", "lEl Salvador"],
        answer: "Panama"
    }
];

// event handler function
const handleOptionClick = (event) => {
    console.log('question section clicked');

    // get current target
    const currentTarget = event.currentTarget;

    // get target
    const target = event.target;

    // if statements for li
    if(target.tagName === "LI") {
        // any option which is clicked is generated
        const value = target.getAttribute("data-value");
        console.log(value);
        // answer option
        const question = questions[questionIndex].question
        console.log(question);

        const answer = {
            question,
            value,
        }

        // store answer in local storage
        // storeAnswerInLS(answer);
        
        // remove the question 
        removeQuestion();
        if(questionIndex < question.length - 1) {
            // go to next question if not last question
            questionIndex += 1;
            renderQuestionSection()
        }else{
            // score = timer;
            // quizComplete = true;
            // if last question render the users results and form go to highscore page
            renderResults();
            renderForm();
        } 

    }
};

// functions to render results
const renderResults = (currentQuestion, selectedAnswer) => {
    if (
        selectedAnswer.trim("") ===
          questions[currentQuestion].AnswerisCorrect.trim("")
        ) {
          return true;
        } else {
          return false;
        }
      };


// functions to render form
const renderForm = () => {
    console.log("render form");

    const section = document.createElement("section");
    section.setAttribute("class", "form-section");
    section.setAttribute("id", "form-box");
    section.setAttribute("name", "feedback-form");

    // h2
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title");
    h2.textContent = "All done 🎉";


    const p = document.createElement("p");
    p.setAttribute("class", "h2-title");
    p.setAttribute("id", "score");
    p.textContent = "Your final score is .";


    const form = document.createElement("form");

    const inputDiv = document.createElement("inputDiv");
    inputDiv.setAttribute("class", "form-control");

    const label = document.createElement("label");
    label.setAttribute("for", "name");
    label.textContent = "Enter your initials:";


    const input = document.createElement("input");
    input.setAttribute("id", "initials");
    input.setAttribute("type", "text");

    const buttonDiv = document.createElement("buttonDiv");
    buttonDiv.setAttribute("class", "form-control");

    const button = document.createElement("button");
    button.setAttribute("class", "btn");
    button.setAttribute("type", "submit");



    inputDiv.append(label,input);

    form.append(inputDiv,buttonDiv);

    buttonDiv.append(button);

    section.append(h2,p,form);

    mainSection.append(section);
};

const startTimer = () => {

    // time lenght for questions
    time = questions.length * 10;

    // setInterval of 1000ms (1s)
    intervalID = setInterval(countdown, 1000);
    console.log(timerId);

    // timer is shown on the page
    displayTimeSpan();

    const timerSpan = document.getElementById("timer-span");
    // declare function to execute every 1 sec
    const countdown = () => {
        time -= 1;
      // decrement timer value
      timerSpan.textContent = time
      // if quizComplete is true then stop timer
      if(endQuiz){
          clearInterval(timerId);
          document.getElementById("top-section").remove();
      }else{
          // check if timer reaches 0
          if(time <= 0){
              clearInterval(timerId)
              score= 0;
              document.getElementById("timer-box").remove();
          }
      }
    };
    // setInterval of 1000ms (1s)

    const timerId = setInterval(countdown, 1000);
    console.log(timerId);
  };

  const countdown = () => {
    time--;
    displayTimeSpan();
    if (time < 1) {
      endQuiz();
    }
  };

  // timer is shown on the page
  const ShowTime = document.getElementById("time-span");
  function displayTimeSpan ()  {
  ShowTime.textContent = time;
}

const renderQuestionSection = () => {
    console.log('render question')

    // get current question
    const currentQuestion = questions [questionIndex];

    // create section
    const section = document.createElement("section");
    section.setAttribute("class", "question-container");
    section.setAttribute("id", "question-box");

    // div section for question options
    const questionDiv = document.createElement("questionDiv");
    questionDiv.setAttribute("class", "question-options");

    // create h2 
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "first-question");
    h2.textContent = currentQuestion.question;

    // create ul and amend 4 ul
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list");

    // create and append li to ul
    const li1 = document.createElement("li");
    li1.setAttribute("class", "btn-list-item");
    li1.setAttribute("data-value", currentQuestion.options[0]);
    li1.textContent = currentQuestion.options[0];

    const li2 = document.createElement("li");
    li2.setAttribute("class", "btn-list-item");
    li2.setAttribute("data-value", currentQuestion.options[1]);
    li2.textContent = currentQuestion.options[1];

    const li3 = document.createElement("li");
    li3.setAttribute("class", "btn-list-item");
    li3.setAttribute("data-value", currentQuestion.options[2]);
    li3.textContent = currentQuestion.options[2];

    const li4 = document.createElement("li");
    li4.setAttribute("class", "btn-list-item");
    li4.setAttribute("data-value", currentQuestion.options[3]);
    li4.textContent = currentQuestion.options[3];

    ul.append(li1,li2,li3,li4);

    // append the divs, h2, h5 and ul to section

    section.append(questionDiv,h2,ul);

    // append the question section to the h2 and ul

    questionDiv.append(h2,ul)

    // append question section to main
    mainSection.append(section);

    // event listener on question section
    section.addEventListener("click", handleOptionClick)

};

// this part removes banner section 
    const removeBanner = () => {
    console.log('render banner')
    bannerBox.remove();
};


// this part questions banner section 
const removeQuestion = () => {
    console.log('render question')
    document.getElementById("question-box").remove();
};



const initialiseLocalStorage = () => {
    // get feedbackResults from LS
    const feedbackResultsFromLS = JSON.parse(localStorage.getItem("feedbackResults")
    );
  
    const allResultsFromLS = JSON.parse(localStorage.getItem("allResults"));
  
    if (!feedbackResultsFromLS) {
      // if not exist set LS to have feedbackResults as an empty array
      localStorage.setItem("feedbackResults", JSON.stringify([]));
    }
  
    if (!allResultsFromLS) {
      // if not exist set LS to have feedbackResults as an empty array
      localStorage.setItem("allResults", JSON.stringify([]));
    }
  };

  const storeAnswerInLS = (answer) => {
    //   get feedback results from local storage
    const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));
    //   add answer to an array
    feedbackResults.push(answer);
    // set score results in ls
    localStorage.setItem("feedbackResults", JSON.stringify(feedbackResults));
    //   store answer in local storage

  }

// declaring the event handler for the quiz start button click
const quizStartButtonClick = () => {
    console.log("start button");

//initialise local storage
// initialiseLocalStorage();

// this part removes banner section 
removeBanner();




// render questions
renderQuestionSection();

// render the timer box
// renderTimerSection();

};


// even listner to quiz start button
startButton.addEventListener("click", quizStartButtonClick)