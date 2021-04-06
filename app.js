"use strict";

// global variables:

// classes
const welcomeSlide = document.querySelector(".welcome-fade");
const firstQuestion = document.querySelector(".first-question");
const secondQuestion = document.querySelector(".second-question");
const thirdQuestion = document.querySelector(".third-question");

// global btns
const takeQuizBtn = document.querySelector(".take-quiz-btn");
const pageOneBtn = document.querySelector(".next-btn1");
const pageTwoBtn = document.querySelector(".next-btn2");
const yellowResultsBtn = document.querySelector(".next-btn3");
const redResultsBtn = document.querySelector(".next-btn3");
const blueResultsBtn = document.querySelector(".next-btn3");
const greenResultsBtn = document.querySelector(".next-btn3");
const purpleResultsBtn = document.querySelector(".next-btn3");
const blackResultsBtn = document.querySelector(".next-btn3");
const retakeQuizBtn = document.querySelector(".retake-btn");

// global radio ticks:

// yellow
const yellowSelection1 = document.querySelector(".yellow1");
const yellowSelection2 = document.querySelector(".yellow2");
const yellowSelection3 = document.querySelector(".yellow3");
// red
const redSelection1 = document.querySelector(".red1");
const redSelection2 = document.querySelector(".red2");
const redSelection3 = document.querySelector(".red3");
// blue
const blueSelection1 = document.querySelector(".blue1");
const blueSelection2 = document.querySelector(".blue2");
const blueSelection3 = document.querySelector(".blue3");
// green
const greenSelection1 = document.querySelector(".green1");
const greenSelection2 = document.querySelector(".green2");
const greenSelection3 = document.querySelector(".green3");
// purple
const purpleSelection1 = document.querySelector(".purple1");
const purpleSelection2 = document.querySelector(".purple2");
const purpleSelection3 = document.querySelector(".purple3");
// black
const blackSelection1 = document.querySelector(".black1");
const blackSelection2 = document.querySelector(".black2");
const blackSelection3 = document.querySelector(".black3");

// functions:

// initializing functions
function init(){
    selectedYellow();
    selectedRed();
    selectedBlue();
    selectedGreen();
    selectedPurple();
    selectedBlack();
}

// ----------------------------------------

// got yellow function
function selectedYellow(){
    if(

        yellowSelection1.checked === true && yellowSelection2.checked === true || yellowSelection3.checked === true || yellowSelection1.checked === true && yellowSelection3.checked === true || yellowSelection2.checked === true && yellowSelection3.checked === true
        
        )

        {
            document.querySelector(".yellow-result").style.display = "block";
            document.querySelector(".red-result").style.display = "none";
            document.querySelector(".blue-result").style.display = "none";
            document.querySelector(".green-result").style.display = "none";
            document.querySelector(".purple-result").style.display = "none";
            document.querySelector(".black-result").style.display = "none";
    } 
}

// --------------------------------------------

// got red function
function selectedRed(){
    if(

        redSelection1.checked === true && redSelection2.checked === true || redSelection3.checked === true || redSelection1.checked === true && redSelection3.checked === true || redSelection2.checked === true && redSelection3.checked === true
        
        )

        {
            document.querySelector(".red-result").style.display = "block";
            document.querySelector(".yellow-result").style.display = "none";
            document.querySelector(".blue-result").style.display = "none";
            document.querySelector(".green-result").style.display = "none";
            document.querySelector(".purple-result").style.display = "none";
            document.querySelector(".black-result").style.display = "none";
    } 
};

// -----------------------------------------------------

// got blue function
function selectedBlue(){
    if(

        blueSelection1.checked === true && blueSelection2.checked === true || blueSelection3.checked === true || blueSelection1.checked === true && blueSelection3.checked === true || blueSelection2.checked === true && blueSelection3.checked === true
        
        )

        {
            document.querySelector(".blue-result").style.display = "block";
            document.querySelector(".red-result").style.display = "none";
            document.querySelector(".yellow-result").style.display = "none";
            document.querySelector(".green-result").style.display = "none";
            document.querySelector(".purple-result").style.display = "none";
            document.querySelector(".black-result").style.display = "none";
    } 
};

// ------------------------------------------------------

// got green function
function selectedGreen(){
    if(

        greenSelection1.checked === true && greenSelection2.checked === true || greenSelection3.checked === true || greenSelection1.checked === true && greenSelection3.checked === true || greenSelection2.checked === true && greenSelection3.checked === true
        
        )

        {
            document.querySelector(".green-result").style.display = "block";
            document.querySelector(".blue-result").style.display = "none";
            document.querySelector(".red-result").style.display = "none";
            document.querySelector(".yellow-result").style.display = "none";
            document.querySelector(".purple-result").style.display = "none";
            document.querySelector(".black-result").style.display = "none";
    } 
};

// ------------------------------------------------------

// got purple function
function selectedPurple(){
    if(

        purpleSelection1.checked === true && purpleSelection2.checked === true || purpleSelection3.checked === true || purpleSelection1.checked === true && purpleSelection3.checked === true || purpleSelection2.checked === true && purpleSelection3.checked === true
        
        )

        {
            document.querySelector(".purple-result").style.display = "block";
            document.querySelector(".green-result").style.display = "none";
            document.querySelector(".blue-result").style.display = "none";
            document.querySelector(".red-result").style.display = "none";
            document.querySelector(".yellow-result").style.display = "none";
            document.querySelector(".black-result").style.display = "none";
    } 
};

// -----------------------------------------------------

// got black function
function selectedBlack(){
    if(

        blackSelection1.checked === true && blackSelection2.checked === true || blackSelection3.checked === true || blackSelection1.checked === true && blackSelection3.checked === true || blackSelection2.checked === true && blackSelection3.checked === true
        
        )

        {
            document.querySelector(".black-result").style.display = "block";
            document.querySelector(".purple-result").style.display = "none";
            document.querySelector(".green-result").style.display = "none";
            document.querySelector(".blue-result").style.display = "none";
            document.querySelector(".red-result").style.display = "none";
            document.querySelector(".yellow-result").style.display = "none";
    } 
};

// -----------------------------------------------------

// event listeners:

// take the quiz event listener
takeQuizBtn.addEventListener("click", function(){
    welcomeSlide.style.opacity = "0";
    welcomeSlide.style.display = "none";
    
    firstQuestion.style.display = "block";
    firstQuestion.style.opacity = "1";
});

// question 1 event listener
pageOneBtn.addEventListener("click", function(){
    firstQuestion.style.opacity = "0";
    firstQuestion.style.display = "none";
    
    secondQuestion.style.display = "block";
    secondQuestion.style.opacity = "1";
});

// question 2 event listener
pageTwoBtn.addEventListener("click", function(){
    secondQuestion.style.opacity = "0";
    secondQuestion.style.display = "none";
    
    thirdQuestion.style.display = "block";
    thirdQuestion.style.opacity = "1";
});


// yellow results event listener
yellowResultsBtn.addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    selectedYellow();
});

// red results event listener
redResultsBtn.addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    selectedRed();
});

// blue results event listener
blueResultsBtn.addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    selectedBlue();
});

// green results event listener
greenResultsBtn.addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    selectedGreen();
});

// purple results event listener
purpleResultsBtn.addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    selectedPurple();
});

// black results event listener
blackResultsBtn.addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    selectedBlack();
});

// retake quiz event listeners

// retake on yellow results
document.querySelector(".yellow-result__btns .retake-btn").addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    location.reload();
});

// retake on red results
document.querySelector(".red-result__btns .retake-btn").addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    location.reload();
});

// retake on blue results
document.querySelector(".blue-result__btns .retake-btn").addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    location.reload();
});

// retake on green results
document.querySelector(".green-result__btns .retake-btn").addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    location.reload();
});

// retake on purple results
document.querySelector(".purple-result__btns .retake-btn").addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    location.reload();
});

// retake on black results
document.querySelector(".black-result__btns .retake-btn").addEventListener("click", function(){
    thirdQuestion.style.display = "none";
    location.reload();
});