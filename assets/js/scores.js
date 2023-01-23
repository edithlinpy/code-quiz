// This js files shows the high scores and allow user to clear all scores
let highscoresEl = document.querySelector("#highscores");
let clearBtn = document.querySelector("#clear");
let scores = []; 

// get scores from the localStorage in the initialization stage
function getScores() {
    let storedScores = localStorage.getItem("highscores");
    console.log("storedScores:"+storedScores);
    if (storedScores !== null) {
        scores = storedScores.split(",");   
    }    
}

// show an ordered list of scores
function showScores() {
    let scoreLi; 

    getScores();

    for (let i=0; i<scores.length; i++) {
        scoreLi = document.createElement("li");
        scoreLi.textContent = scores[i];
        highscoresEl.appendChild(scoreLi);
    }
}

showScores();

// clear all scores in the localStorage and on screen
clearBtn.addEventListener("click", function (event) {
    localStorage.clear();
    while (highscoresEl.firstChild) {
        highscoresEl.removeChild(highscoresEl.firstChild);
    }
});