console.log("hello")

// Targeting the banner box
const bannerBox = document.getElementById("banner-box");

// Targeting the start quiz button
const startButton = document.getElementById("start-btn")

// Targeting the main section
const mainSection = document.getElementById("start-btn")



// this part removes banner section 
const removeBanner = () => {
    console.log('render banner')
    bannerBox.remove();
};


// render questions
const renderQuestionSection = () => {
    console.log('render question')
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
]


