// console.log("hello")

// Targeting the banner box
const bannerBox = document.getElementById("banner-box");

// Targeting the start quiz button
const startButton = document.getElementById("start-btn")

// Targeting the main section
const mainSection = document.getElementById("main")

// question index
let questionIndex = 0;
// let timerValue = 10 * questions.length;
// let quizComplete = false;

// const startQuiz = () => {
//     // remove start section
//     // start timer
//     // render timer section
//     // render question section
//   };
  

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
        
        // remove the question 
        removeQuestion();
        if(questionIndex < question.length - 1) {
            // go to next question if not last question
            questionIndex += 1;
            renderQuestionSection()
        }else{
            // if last question render the users results and form go to highscore page
            renderForm();
            renderResults();
        } 
    }
};

// functions to render results
const renderResults = () => {
    console.log("render results");

};
// functions to render form
const renderForm = () => {
    console.log("render form");
    
};




const renderQuestionSection = () => {
    console.log('render question')

    // get current question
    const currentQuestion = questions [questionIndex];

    // create section
    const section = document.createElement("section");
    section.setAttribute("class", "question-container");
    section.setAttribute("id", "question-box");


    // create a div-section
    const topSection = document.createElement("topSection");
    topSection.setAttribute("class", "top-section");


    // // title quiz challange
    const titleDiv = document.createElement("titleDiv");
    titleDiv.setAttribute("class", "title");
    titleDiv.textContent = "Quiz Challenge";


    // timer div section
    const timeDiv = document.createElement("timeDiv");
    timeDiv.setAttribute("class", "timer");


    // time left : div
    const timeText = document.createElement("timeText");
    timeText.setAttribute("class", "time-text");
    timeText.textContent = "Time Left :";


    // seconds div
    const secondsDiv = document.createElement("secondsDiv");
    secondsDiv.setAttribute("class", "timer-sec");
    secondsDiv.textContent = "100";

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

    section.append(topSection,titleDiv,timeDiv,timeText,secondsDiv,questionDiv,h2,ul);

    // append the topSectionto the divs

    topSection.append(titleDiv,timeDiv,timeText,secondsDiv)

    // append the timer div section to the divs

    timeDiv.append(timeText,secondsDiv)

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

// declaring the event handler for the quiz start button click
const quizStartButtonClick = () => {
    console.log("start button");

// this part removes banner section 
removeBanner();


// render questions
renderQuestionSection();
};

// even listner to quiz start button
startButton.addEventListener("click", quizStartButtonClick)
