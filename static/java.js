src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"
 src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js"

initSite();
const hint = document.getElementById("hint");
hint.addEventListener("click", addActorName);
let statcount = 0;

//Initialize site
function initSite() {
    const firstTime = window.localStorage.getItem("currentMovie");
    // If first visit
    if (!firstTime) {

        window.localStorage.setItem('userGames', 0);
        window.localStorage.setItem('userWins', 0);
        window.localStorage.setItem('currentMovie', 'start')
        welcome();
        window.localStorage.setItem('guessCount', 0);
    }


    if (checkDate() == true && window.localStorage.getItem('currentMovie') == 'completed') {
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
    if (checkDate() == false) {
        window.localStorage.setItem('currentMovie', 'start');
        window.localStorage.setItem('guessCount', 0);
    }
    let guessCount = Number(window.localStorage.getItem('guessCount'));
    if (guessCount > 0) {
        if (guessCount === 1) {
            document.getElementById("actor0").style.display ="block";
            document.getElementById("actor-name0").style.display ="none";
            document.getElementById("actor-name1").style.display = "block";
            }
        if (guessCount === 2) {
            document.getElementById("actor0").style.display ="block";
            document.getElementById("actor1").style.display ="block";
            document.getElementById("actor-name0").style.display ="none";
            document.getElementById("actor-name1").style.display ="none";
            document.getElementById("actor-name2").style.display = "block";
            }
        if (guessCount === 3) {
                document.getElementById("actor0").style.display ="block";
                document.getElementById("actor1").style.display ="block";
                document.getElementById("actor2").style.display ="block";
                document.getElementById("actor-name0").style.display ="none";
                document.getElementById("actor-name1").style.display ="none";
                document.getElementById("actor-name2").style.display = "none";
                document.getElementById("actor-name3").style.display = "block";
                document.getElementById('hint').innerHTML= "I give up";
            }
    }
       
}

function checkDate() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let userday = Number(window.localStorage.getItem('day'));
    if (!userday) {
        window.localStorage.setItem('day', day);
    }
    let usermonth = Number(window.localStorage.getItem('month'));
    if (!usermonth) {
        window.localStorage.setItem('month', month);
    }
    let useryear = Number(window.localStorage.getItem('year'));
    if (!useryear) {
        window.localStorage.setItem('year', year);
    }
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
        let oldGuessCount = Number(window.localStorage.getItem('guessCount'));

        if (oldGuessCount === 0) {
            document.getElementById("actor0").style.display ="block";
            document.getElementById("actor-name0").style.display = "none";
            document.getElementById("actor-name1").style.display = "block";
            }
        if (oldGuessCount === 1) {
            document.getElementById("actor1").style.display ="block";
            document.getElementById("actor-name1").style.display = "none";
            document.getElementById("actor-name2").style.display = "block";
            }
        if (oldGuessCount === 2) {
            document.getElementById("actor2").style.display ="block";
            document.getElementById("actor-name2").style.display = "none";
            document.getElementById("actor-name3").style.display = "block";
            document.getElementById('hint').innerHTML= "I give up";
            }

        if (oldGuessCount === 3 ) {
            loserFunction();
        }
        let newGuessCount = oldGuessCount + 1;
        window.localStorage.setItem('guessCount', newGuessCount)
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
    let shareButton = document.getElementById('shareButton');

    shareButton.addEventListener("click", async () => {
    try {
    let one = document.getElementById('one').innerHTML;
    let two = document.getElementById('two').innerHTML;
    let three = document.getElementById('three').innerHTML;
    let four = document.getElementById('four').innerHTML;
      await navigator.share({ text: "www.cinemle.com/" + one + two + three + four });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  });
}

//If user wins
function winnerFunction() {
    let guessCount = Number(window.localStorage.getItem('guessCount'))
    if (guessCount === 0) {
        document.getElementById("scoreholder").innerHTML += "Great Job!";
        document.getElementById('one').innerHTML = '🎞️';
        document.getElementById('two').innerHTML = '◻️';
        document.getElementById('three').innerHTML = '◻️';
        document.getElementById('four').innerHTML = '◻️';
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
    if (guessCount === 1) {
        document.getElementById("scoreholder").innerHTML += "Not too bad!";
        document.getElementById('one').innerHTML = '😭';
        document.getElementById('two').innerHTML = '🎞️';
        document.getElementById('three').innerHTML = '◻️';
        document.getElementById('four').innerHTML = '◻️';
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
    if (guessCount === 2) {
        document.getElementById("scoreholder").innerHTML += "You got it.";
        document.getElementById('one').innerHTML = '😭';
        document.getElementById('two').innerHTML = '😭';
        document.getElementById('three').innerHTML = '🎞️';
        document.getElementById('four').innerHTML = '◻️';
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
    if (guessCount === 3) {
        document.getElementById("scoreholder").innerHTML += "That was close!";
        document.getElementById('one').innerHTML = '😭';
        document.getElementById('two').innerHTML = '😭';
        document.getElementById('three').innerHTML = '😭';
        document.getElementById('four').innerHTML = '🎞️';
        openResultsModal();
        completeSession();
        setResults();
        addWin();
        addGame();
        }
}

function stats() {
    let userwins = window.localStorage.getItem("userWins");
    let usergames = window.localStorage.getItem("userGames");
    let userwinperc = Math.round(Number(userwins) / Number(usergames) * 100);
    let cinemle = document.getElementById('cinemle');
    let games = document.getElementById('games');
    let wins = document.getElementById('wins');
    let winperc = document.getElementById('winperc');
    if (statcount == 0) {
        console.log('test');
        cinemle.style.display = "none";
        wins.innerHTML = "Wins: " + userwins;
        wins.style.display = 'block';
        statcount = 1;
        return statcount;
        }

    if (statcount == 1) {
        wins.style.display = 'none';
        games.innerHTML = "Games Played: " + usergames;
        games.style.display = 'block';
        statcount = 2;
        return statcount;
        }   

    if (statcount == 2) {
        games.style.display = 'none';
        winperc.innerHTML = "Win Percentage: " + userwinperc + "%";
        winperc.style.display = 'block';
        statcount = 3;
        return statcount;
        }
    
    if (statcount == 3) {
        winperc.style.display = 'none';
        cinemle.style.display = 'block';
        statcount = 0;
        return statcount;
        }
    
}

function closeStats() {
    document.getElementById('stats').style.display = "none";
}

//Close Welcome 
function closeWelcome() {
    document.getElementById('welcome').style.display = "none";
}

//This would make the modal exitable by clicking outside the box
//document.addEventListener('mouseup', function(e) {
//    var container = document.getElementById('box');
//    if (!container.contains(e.target)) {
//        container.style.display = 'none';
//    }
//});

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
    let one = document.getElementById('one').innerHTML;
    let two = document.getElementById('two').innerHTML;
    let three = document.getElementById('three').innerHTML;
    let four = document.getElementById('four').innerHTML;
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

