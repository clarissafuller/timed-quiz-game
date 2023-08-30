//DOM ELEMENTS==========================================
var timerEl = document.querySelector("#timer");
var quizWindowEl = document.querySelector("#quiz-window");
var welcomeWindowEl = document.querySelector("#welcome-message");
//DATA===================================================

//FUNCTIONS===============================================
function settimer() {
  var secondsLeft = 60;
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function showElement() {
  var x = document.quizWindowEl("quiz-window");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//USER INTERACTIONS=======================================
//user clicks start game
var startButtonEl = document.querySelector("#start-button");

startButtonEl.addEventListener("click", function () {
  settimer();
  showElement();
  //   quizWindowEl.setAttribute("display", "contents");
  //   welcomeWindowEl.setAttribute("display", "none");
});
//timer starts
//first question appears
//user clicks their answer for the first question
//the second question appears
//user clicks their answer for the second question
//the third question appears
//user clicks their answer for the third question
//the forth question appears
//user clicks their answer for the fourth question
//the final score displays with the initial input
//user clicks submit to register their initals
//the high score registers on the high score list
//user clicks restart game
//the starting blcok reappears
//user clicks clear high scores
//the local sotrage clears the high scores
//user clicks view high scores
//the high score list appears

//INITIALIZATIONS==========================================
