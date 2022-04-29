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


// Question options