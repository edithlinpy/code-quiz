let startScreenDiv = document.querySelector("#start-screen");
let questionsDiv = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let questionTitleEl = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");
let timeEl = document.querySelector("#time");
let li1 = document.querySelector("#btn1");
let allDone = false;
let timerCount = 50;
let quesToShow = 0;
let answer;

// Start the timer
function setTimer() {
    timer = setInterval(function() {
     timerCount--;
     timeEl.textContent = timerCount;
      // Tests if time has run out or user has done all questions
      if (timerCount === 0 || allDone) {
        // Clears interval
        clearInterval(timer);
        // showScores();
      }
    }, 1000);
  }


// show one question from quesArray in questions.js
function showQues(quesToShow){

    // clear all previous contents
    while (choicesDiv.firstChild) {
        choicesDiv.removeChild(choicesDiv.firstChild);
    }

    // add an order list
    let orderList = document.createElement("ol");
    choicesDiv.appendChild(orderList);

    // show options for user to choose
    questionObj = quesArray[quesToShow];
    questionTitleEl.textContent = questionObj.question;
    // console.log(questionObj.question);
    choicesArray = questionObj.options;
    for (let j=0; j<choicesArray.length; j++) {
        choiceBtn = document.createElement("button");
        choiceLi = document.createElement("li");
        choiceLi.textContent = choicesArray[j];
        choiceLi.setAttribute("data-num", j);
        // console.log("choicesArray");
        choiceBtn.appendChild(choiceLi);
        orderList.appendChild(choiceBtn);
    }
    answer = questionObj.answer;
    // break;
}

// check if user clicks the start button
// set the timer and show the first question
start.addEventListener("click", function (event) {
    let questionObj;
    let choicesArray;
    let choiceBtn;
    let choiceLi;

    startScreenDiv.className = "hide"; // hide the introduction section
    questionsDiv.className = ""; // show the question section

    setTimer(); // start the timer
    showQues(quesToShow); // show the first question

});

// check user's answer and show the corresponding message 
// show next questions afterwards
choicesDiv.addEventListener("click", function (event) {
    let element = event.target;
    let userChoice = element.getAttribute("data-num");

    if (answer === +userChoice) {
        alert("Great! You've got a correct answer!");
    } else {
        alert("Sorry, you've got a wrong answer!");
    }
    quesToShow++;
    if (quesToShow < quesArray.length) {
        showQues(quesToShow);
    } else {
        console.log("allDone");
        allDone = true; 
    }
});

