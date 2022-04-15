src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"
 src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js"

initSite();
var guessCount = 0;
const hint = document.getElementById("hint");
hint.addEventListener("click", addActorName);


//Initialize site
function initSite() {
    const firstTime = window.localStorage.getItem("currentMovie");
    // If first visit
    if (!firstTime) {
        window.localStorage.setItem('userGames', 0);
        window.localStorage.setItem('userWins', 0)
        welcome();
    }
    const currentMovie = window.localStorage.getItem('currentMovie')
    if (!currentMovie) {
        window.localStorage.setItem('currentMovie', 'start')
    }
    if (window.localStorage.getItem('currentMovie') == 'completed') {
        let one = window.localStorage.getItem('one');
        let two = window.localStorage.getItem('two');
        let three = window.localStorage.getItem('three');
        let four = window.localStorage.getItem('four');
        let scoreholderText = window.localStorage.getItem('scoreholderText');
        document.getElementById('one').style.color = one;
        document.getElementById('two').style.color = two;
        document.getElementById('three').style.color = three;
        document.getElementById('four').style.color = four;
        document.getElementById('scoreholder').innerHTML = scoreholderText;
        openResultsModal();
    }    
}

function welcome() {
    document.getElementById('welcome').style.display = "block";
}


// add actor name if wrong answer or hint
function addActorName() {
    if (window.localStorage.getItem('currentMovie') != 'completed') {

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
}


//if user loses
function loserFunction() {
    document.getElementById("scoreholder").innerHTML += "You didnt get the movie, try again tomorrow!"
    document.getElementById('one').style.color = "red";
    document.getElementById('two').style.color = "red";
    document.getElementById('three').style.color = "red";
    document.getElementById('four').style.color = "red";
    openResultsModal();
    completeSession()
    setResults()
}

//open Results Modal
function openResultsModal() {
    var resultsModal = document.getElementById('box')
    resultsModal.style.display = "block";
}

//If user wins
function winnerFunction() {
    if (guessCount === 0) {
        document.getElementById("scoreholder").innerHTML += "Great Job!"
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "black";
        document.getElementById('three').style.color = "black";
        document.getElementById('four').style.color = "black";
        openResultsModal();
        completeSession()
        setResults()
        }
    if (guessCount === 1) {
        document.getElementById("scoreholder").innerHTML += "Not too bad!"
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "green";
        document.getElementById('three').style.color = "black";
        document.getElementById('four').style.color = "black";
        openResultsModal();
        completeSession()
        setResults()
        }
    if (guessCount === 2) {
        document.getElementById("scoreholder").innerHTML += "You got it."
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "green";
        document.getElementById('three').style.color = "green";
        document.getElementById('four').style.color = "black";
        openResultsModal();
        completeSession()
        setResults()
        }
    if (guessCount === 3) {
        document.getElementById("scoreholder").innerHTML += "That was close!"
        document.getElementById('one').style.color = "green";
        document.getElementById('two').style.color = "green";
        document.getElementById('three').style.color = "green";
        document.getElementById('four').style.color = "green";
        openResultsModal();
        completeSession()
        setResults()
        }
}

//Close Welcome 
function closeWelcome() {
    document.getElementById('welcome').style.display = "none";
}

//Close results box
function hideBox() {
    document.getElementById('box').style.display = "none";
}

function completeSession() {
    window.localStorage.setItem('currentMovie', 'completed');
}

function setResults() {
    let one = document.getElementById('one').style.color;
    let two = document.getElementById('two').style.color;
    let three = document.getElementById('three').style.color;
    let four = document.getElementById('four').style.color;
    let scoreholderText = document.getElementById('scoreholder').innerHTML;
    window.localStorage.setItem('one', one);
    window.localStorage.setItem('two', two);
    window.localStorage.setItem('three', three);
    window.localStorage.setItem('four', four);
    window.localStorage.setItem('scoreholderText', scoreholderText);
}