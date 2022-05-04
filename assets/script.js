// console.log("hello")

// Targeting the banner box
const bannerBox = document.getElementById("banner-box");

// Targeting the start quiz button
const startButton = document.getElementById("start-btn")

// Targeting the main section
const mainSection = document.getElementById("main")

// const targeting the time
// const timerSpan = document.getElementById("time-span")

// question index
let questionIndex = 0;
// var timeSpan = 0;
let time = 60;
// var currentQuestion = -1;
// let timer;
// let timeLeft = 0;



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
            score = timer;
            quizComplete = true;
            // if last question render the users results and form go to highscore page
            renderForm();
            renderResults();
        } 

    }
};

// functions to render results
const renderResults = () => {
    console.log("render results");

    // targeting the form and time span
    const timerSpan = document.getElementById("time-span");
    timerSpan.innerText = time;
    const formSection = document.createElement("form-box");
    formSection.action = "./highscores.html";
    // rendering the form box
    formSection.innerHTML = 
    `<section id="form-box" class="form-section">
    <h2 class="title">All done 🎉</h2>
    <p class="h2-title">Your final score is ${time} <span id=score></span>.</p>
    <form>
            <div class="form-control">
              <label for="name">Enter your initials: </label>
              <input id="initials" type="text">
            </div>
            <div class="form-control">
              <button class="btn" type="submit">Submit</button>
            </div>
          </form>
   </section>`;

   mainSection.innerHTML = "";

    //    append form to main section
    mainSection.appendChild(formSection);

};
// functions to render form
const renderForm = () => {
    console.log("render form");
    
};

// const startTimer = () => {
//     const timerSpan = document.getElementById("timer-span");
//     // declare function to execute every 1 sec
//     const countdown = () => {
//         timer -= 1;
//       // decrement timer value
//       timerSpan.textContent = timer
//       // if quizComplete is true then stop timer
//       if(endQuiz){
//           clearInterval(timerId);
//           document.getElementById("top-section").remove();
//       }else{
//           // check if timer reaches 0
//           if(timer <= 0){
//               clearInterval(timerId)
//               score= 0;
//               document.getElementById("timer-box").remove();
//           }
//       }
//     };
//     // setInterval of 1000ms (1s)
//     const timerId = setInterval(countdown, 1000);
//     console.log(timerId);
//   };

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

// const renderTimerSection = () => {
//     console.log("render timer")
//     // use HTML as guide and build in JS

//     // create section
//     const TimerSpanSection = document.createElement("section");
//     TimerSpanSection.setAttribute("class", "timer-section");
//     TimerSpanSection.setAttribute("id", "timer-box");
    
//     // top section
//     const topSection = document.createElement("topSection");
//     topSection.setAttribute("class", "top-section");

//     // create h5 
//     const h5 = document.createElement("h5");
//     h5.setAttribute("class", "title");
//     h5.textContent = "Quiz Challenge";


//     // timer div section
//     const timeDiv = document.createElement("timeDiv");
//     timeDiv.setAttribute("class", "timer");

//     // timer text div
//     const timeText = document.createElement("timeText");
//     timeText.setAttribute("class", "time-text");
//     timeText.textContent = "Time Left :";

//     // timer sec div
//     const secondsDiv = document.createElement("secondsDiv");
//     secondsDiv.setAttribute("class", "timer-sec");
//     // secondsDiv.textContent = "100";
//     secondsDiv.textContent = ` ${timer} `;

//     // append the divs, h2, h5 and ul to section
//     TimerSpanSection.append(topSection,h5,timeDiv,timeText,secondsDiv);

//     // append top section h5 and timer div
//     topSection.append(h5,timeDiv,timeText,secondsDiv)

//     // append timer to tome-text and timer-sec
//     timeDiv.append(timeText,secondsDiv)

//     // append section to main
//     mainSection.append(TimerSpanSection);

//     startTimer();
//   };

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

//   const storeAnswerInLS = (answer) => {
//     //   get feedback results from local storage
//     const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));
//     //   add answer to an array
//     feedbackResults.push(answer);
//     // set score results in ls
//     localStorage.setItem("feedbackResults", JSON.stringify(feedbackResults));
//     //   store answer in local storage

//   }

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