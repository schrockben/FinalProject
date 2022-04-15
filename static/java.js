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

        if (checkDate() == true) {
            let one = window.localStorage.getItem('one');
            let two = window.localStorage.getItem('two');
            let three = window.localStorage.getItem('three');
            let four = window.localStorage.getItem('four');
            let scoreholderText = window.localStorage.getItem('scoreholderText');
            document.getElementById('one').innerHTML = one;
            document.getElementById('two').innerHTML = two;
            document.getElementById('three').innerHTML = three;
            document.getElementById('four').innerHTML = four;
            document.getElementById('scoreholder').innerHTML = scoreholderText;
            openResultsModal();
        }
        else {
            window.localStorage.setItem('currentMovie', 'start');
        }
    }   
}

function checkDate() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let userday = Number(window.localStorage.getItem('day'));
    let usermonth = Number(window.localStorage.getItem('month'));
    let useryear = Number(window.localStorage.getItem('year'));
    if (year === useryear && day === userday && month === usermonth) {
        return true;
    }
    else {
        return false;
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
    document.getElementById('one').innerHTML = '😭'
    document.getElementById('two').innerHTML = '😭'
    document.getElementById('three').innerHTML = '😭'
    document.getElementById('four').innerHTML = '😭'
    openResultsModal();
    completeSession();
    setResults();
    addGame();
}

//open Results Modal
function openResultsModal() {
    var resultsModal = document.getElementById('box');
    resultsModal.style.display = "block";
}

//If user wins
function winnerFunction() {
    if (guessCount === 0) {
        document.getElementById("scoreholder").innerHTML += "Great Job!";
        document.getElementById('one').innerHTML = '🎞️'
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
    if (guessCount === 1) {
        document.getElementById("scoreholder").innerHTML += "Not too bad!";
        document.getElementById('one').innerHTML = '😭'
        document.getElementById('two').innerHTML = '🎞️'
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
    if (guessCount === 2) {
        document.getElementById("scoreholder").innerHTML += "You got it.";
        document.getElementById('one').innerHTML = '😭'
        document.getElementById('two').innerHTML = '😭'
        document.getElementById('three').innerHTML = '🎞️'
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
    if (guessCount === 3) {
        document.getElementById("scoreholder").innerHTML += "That was close!";
        document.getElementById('one').innerHTML = '😭'
        document.getElementById('two').innerHTML = '😭'
        document.getElementById('three').innerHTML = '😭'
        document.getElementById('four').innerHTML = '🎞️'
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
}

function stats() {
    wins = window.localStorage.getItem("userWins");
    games = window.localStorage.getItem("userGames");
    winperc = Math.round(Number(wins) / Number(games) * 100) ;
    document.getElementById('wins').innerHTML = "Wins: " + + wins;
    document.getElementById('games').innerHTML = "Games Played: " + games;
    document.getElementById('winperc').innerHTML = "Win Percentage: " + winperc + "%";
    document.getElementById('stats').style.display = "block";
}

function closeStats() {
    document.getElementById('stats').style.display = "none";
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
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    window.localStorage.setItem('day', day);
    window.localStorage.setItem('month', month);
    window.localStorage.setItem('year', year);
}

function setResults() {
    let one = document.getElementById('one').innerHTML
    let two = document.getElementById('two').innerHTML
    let three = document.getElementById('three').innerHTML
    let four = document.getElementById('four').innerHTML
    let scoreholderText = document.getElementById('scoreholder').innerHTML;
    window.localStorage.setItem('one', one);
    window.localStorage.setItem('two', two);
    window.localStorage.setItem('three', three);
    window.localStorage.setItem('four', four);
    window.localStorage.setItem('scoreholderText', scoreholderText);
}

function addGame() {
    let usergames = Number(window.localStorage.getItem('userGames'));
    if (!usergames) {
        window.localStorage.setItem('userGames', 1)
    }
    else {
        window.localStorage.setItem('userGames', usergames + 1)
    }
}

function addWin() {
    let userwins = Number(window.localStorage.getItem('userWins'));
    if (!userwins) {
        window.localStorage.setItem('userWins', 1)
    }
    else {
        window.localStorage.setItem('userWins', userwins + 1)
    }
}