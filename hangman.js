
// turn exit button grey when hovered
document.getElementById('exit').onmouseover = function() {
    mouseOver()
}
document.getElementById('exit').onmouseout = function() {
    mouseOut()
}

function mouseOver(evt) {
    //evt.preventDefault();
    document.getElementById('exit').style.color = 'grey';
}

function mouseOut(evt) {
    //evt.preventDefault();
    document.getElementById('exit').style.color = 'black';
}

// hide start button and "ready?" h2 when "play hangman" button is clicked/enlarge game div

// assign button variable to button with class 'startButton'
let button = document.getElementsByClassName('startButton')

// add event listener to button 
button[0].addEventListener('click', hideDiv)

// create function to hide levels div to create more room for game&enlarge the div where game will be played
function hideDiv(evt) {
    evt.preventDefault();
    document.getElementById('levels').setAttribute('style', 'display: none')
    document.getElementById('word').setAttribute('style', 'padding-bottom: 20vh')
}

// put variables here
var words = ["acumen", "demagogue", "flagrant", "communicate", "telephone", "idiosyncratic", "funny", "computer", "scarf", "JavaScript"]
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
var input = document.getElementById('letter-field').value 

// function randomly selects from "words" when "play" button clicked, creates array with _ in place of characters
button[0].addEventListener('click', pickWord)

function pickWord(evt) {
    evt.preventDefault();
    for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
}


// assign variable to button that submits letter guess
let secondButton = document.getElementById('guess')

// create click even for second button 
secondButton.addEventListener('click', updateGame)

// create function to update score 
var input = document.getElementById('letter-field').value 

function updateGame(evt) {
    evt.preventDefault()
    for (var j = 0; j < word.length; j++) {
    if (word[j] === input) {
        answerArray[j] = input;
        remainingLetters--;
    }
    }   
}

var remainingLetters = word.length;
if (remainingLetters > 0) {
    document.getElementById('wordInDiv').innerHTML = answerArray.join(' ')
} else if (remainingLetters = 0) {
    alert('You win!') 
}    

// add happy music when winning/wah wah when losing
// restrict input to letters
// make div fade when disappearing


