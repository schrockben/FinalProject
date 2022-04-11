// src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"
// src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js"

var guessCount = 0;
var userAnswer = "placeholder";
const hint = document.getElementById("hint");
const movieGuess = document.getElementById("submit-guess");
hint.addEventListener("click", addActorName);
movieGuess.addEventListener("click", checkGuess);


function addActorName() {
    document.getElementById("actor-name").innerHTML = "test";
    if (guessCount === 0) {
        document.getElementById("actor0").style.display ="block";
        }
    if (guessCount === 1) {
        document.getElementById("actor1").style.display ="block";
        }
    if (guessCount === 2) {
        document.getElementById("actor2").style.display ="block";
        }
    if (guessCount === 3) {
        document.getElementById("actor3").style.display ="block";
        }
    if (guessCount === 4) {
        document.getElementById("actor4").style.display ="block";
        }
    guessCount = guessCount + 1;
    // if (guessCount => 5) {
       // return loserFunction();
    //}
}

//function checkGuess() {

// }

