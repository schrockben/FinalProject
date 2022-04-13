src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"
 src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js"

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
    document.getElementById("scoreholder").innerHTML += "You didnt get the movie, try again tomorrow!"
    document.getElementById('box').style.display = "block";
    document.getElementById('one').style.color = "red";
    document.getElementById('two').style.color = "red";
    document.getElementById('three').style.color = "red";
    document.getElementById('four').style.color = "red";
    
}

function winnerFunction() {
    document.getElementById('box').style.display = "block";
    if (guessCount === 0) {
        document.getElementById("scoreholder").innerHTML += "Great Job!"
        document.getElementById('one').style.color = "green";
        }
    if (guessCount === 1) {
        document.getElementById("scoreholder").innerHTML += "Not too bad!"
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "green";
        }
    if (guessCount === 2) {
        document.getElementById("scoreholder").innerHTML += "You got it."
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "green";
        document.getElementById('three').style.color = "green";

        }
    if (guessCount === 3) {
        document.getElementById("scoreholder").innerHTML += "That was close!"
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "green";
        document.getElementById('three').style.color = "green";
        document.getElementById('four').style.color = "green";
        }
}

function hideBox() {
    document.getElementById('box').style.display = "none";
}
