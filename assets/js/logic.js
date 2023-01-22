let startScreenDiv = document.querySelector("#start-screen");
let questionsDiv = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let questionTitleEl = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");
let answer;

start.addEventListener("click", function (event) {
    let questionObj;
    let choicesArray;
    let choiceBtn;
    let choiceLi;
    let option;
    let answer;

    startScreenDiv.className = "hide";
    questionsDiv.className = "";


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
        choicesArray = []
    }

});