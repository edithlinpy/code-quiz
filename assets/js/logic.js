let startScreenDiv = document.querySelector("#start-screen");
let questionsDiv = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let questionTitleEl = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");
let timeEl = document.querySelector("#time");
let li1 = document.querySelector("#btn1");
let endScreenDiv = document.querySelector("#end-screen");
let finalScoreSpan = document.querySelector("#final-score");
let initialsEl = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");
let correctSound = document.querySelector("#correct");
let incorrectSound = document.querySelector("#incorrect");
let allDone = false;
let timerCount = 50;
let quesToShow = 0;
let finalScore = 0;
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
        showFinalScore();
      }
    }, 1000);
  }


// show one question from quesArray in questions.js
function showQues(quesToShow){

    // clear all previous contents
    while (choicesDiv.firstChild) {
        choicesDiv.removeChild(choicesDiv.firstChild);
    }

    // add an ordered list
    let orderedList = document.createElement("ol");
    choicesDiv.appendChild(orderedList);

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
        orderedList.appendChild(choiceBtn);
    }
    answer = questionObj.answer;
    // break;
}

// show the final score in end-screen section 
function showFinalScore() {
    questionsDiv.className = "hide"; // hide the question section
    endScreenDiv.className = ""; // show the end-screen section

    finalScoreSpan.textContent = finalScore; // show final score
}

// get high scores from localStorage
function getScores() {
    let storedScores = localStorage.getItem("highscores");
    if (storedScores === null) {
        return "";
    } else {
        return storedScores+",";
    }
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
    let userChoice;

    if (element.tagName !== "OL") { // do nothing if user clicks on the ordered list area
        if (element.tagName === "BUTTON") { // check if user is clicking the button or li element
            userChoice = element.firstChild.getAttribute("data-num");
        } else {
            userChoice = element.getAttribute("data-num");
        }

        if (answer === +userChoice) {
            correctSound.play();
            alert("Great! You've got the correct answer!");
            finalScore = finalScore + 10;
            console.log("finalScore:"+finalScore);
        } else {
            incorrectSound.play();
            alert("Sorry, you've got a wrong answer!");
            timerCount = timerCount-5; // deduct 5 seconds from the timer
        }
        quesToShow++;
        if (quesToShow < quesArray.length) {
            showQues(quesToShow);
        } else {
            console.log("allDone");
            allDone = true; 
        }
    }
});

// store user's initials and score to localStorage
submit.addEventListener("click", function (event) {
    userInitials = initialsEl.value.trim();
    console.log(userInitials);
    if (userInitials === "") {
        alert("Please enter your initials.")
    } else {
        localStorage.setItem("highscores", getScores() + userInitials+"-"+finalScore);
        alert("Your initials and score have been saved.");
    }
});

