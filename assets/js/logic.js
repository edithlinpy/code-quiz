let startScreenDiv = document.querySelector("#start-screen");
let questionsDiv = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let questionTitleEl = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");
let timeEl = document.querySelector("#time");
let allDone = false;
let timerCount = 50;
let answer;

function setTimer() {
    // Sets timer
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

start.addEventListener("click", function (event) {
    let questionObj;
    let choicesArray;
    let choiceBtn;
    let choiceLi;
    let option;
    let answer;

    startScreenDiv.className = "hide";
    questionsDiv.className = "";

    setTimer(); // start the timer

    // add an order lis
    let orderList = document.createElement("ol");
    choicesDiv.appendChild(orderList);

    // get one question from quesArray in questions.js
    for (let i=0; i<quesArray.length; i++) {
        questionObj = quesArray[i];
        questionTitleEl.textContent = questionObj.question;
        console.log(questionObj.question);
        choicesArray = questionObj.options;
        while (orderList.firstChild) {
            orderList.removeChild(orderList.firstChild);
        }
        for (let j=0; j<choicesArray.length; j++) {
            choiceBtn = document.createElement("button");
            choiceBtn.id = "btn"+j;
            choiceLi = document.createElement("li");
            choiceLi.textContent = choicesArray[j];
            console.log(choicesArray[j]);
            choiceBtn.appendChild(choiceLi);
            orderList.appendChild(choiceBtn);
        }
    }

});