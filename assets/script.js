console.log("hello")

// Targeting the banner box
const bannerBox = document.getElementById("banner-box");

// Targeting the start quiz button
const startButton = document.getElementById("start-btn")

// Targeting the main section
const mainSection = document.getElementById("start-btn")

// Question options

// declaring the event handler for the quiz start button click
const quizStartButtonClick = () => {
    console.log("start button");
};

// even listner to quiz start button
startButton.addEventListener("click", quizStartButtonClick)