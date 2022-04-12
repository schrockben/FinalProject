// src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"
// src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js"

var guessCount = 0;
const hint = document.getElementById("hint");
hint.addEventListener("click", addActorName);

function addActorName() {

    if (guessCount === 0) {
        document.getElementById("actor0").style.display ="block";
        document.getElementById("actor-name0").style.display = "none";
        document.getElementById("actor-name1").style.display = "block";
        }
    if (guessCount === 1) {
        document.getElementById("actor1").style.display ="block";
        document.getElementById("actor-name1").style.display = "none";
        document.getElementById("actor-name2").style.display = "block";
        }
    if (guessCount === 2) {
        document.getElementById("actor2").style.display ="block";
        document.getElementById("actor-name2").style.display = "none";
        document.getElementById("actor-name3").style.display = "block";
        hint.innerHTML= "I give up";
        }

    guessCount = guessCount + 1;
     if (guessCount === 4 ) {
        loserFunction();
    }
}

function loserFunction() {
    document.getElementById('box').style.display = "block";
    
}

function winnerFunction() {
    document.getElementById('box').style.display = "block";
    document.getElementById('score').innerHTML = '1';
}

function hideBox() {
    document.getElementById('box').style.display = "none";
}


