
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

// put variables here
var words = ["computer", "coding", "html", "css", "terminal", "github", "repository", "development", "console", "javascript"]
var currentWord = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
var wrongAnswers = 0
var input 
var wrongGuesses = []

// hide start button and "ready?" h2 when "play hangman" button is clicked
// enlarge game div when "play hangman" button is clicked 

// assign button variable to button with class 'startButton'
let button = document.getElementsByClassName('startButton')

// add event listener to button 
button[0].addEventListener('click', hideDiv)

// create function to hide levels div to create more room for game&enlarge the div where game will be played
function hideDiv(evt) {
    evt.preventDefault();
    document.getElementById('levels').setAttribute('style', 'display: none')
    document.getElementById('word').setAttribute('style', 'padding-bottom: 5vh')
}

// function randomly selects from "words" when "play" button clicked, creates array with _ in place of characters
// function displays contents of this array on screen
button[0].addEventListener('click', drawBoard)
function drawBoard() {
    for (i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }  
    document.getElementById('wordInDiv').innerHTML = answerArray.join(' ') 
    playGame() 
}

// function determinds if game has ended
function isGameOver() {
    return currentWord === answerArray.join('') || wrongAnswers === 10
}

// function states that, if game isn't over...
function playGame() {
    if (isGameOver() === false){
        if (currentWord !== answerArray.join('') || wrongAnswers !== 10) {
            // assign variable to button that submits letter guess
            let secondButton = document.getElementById('guess')
            // create variable for input letters
            var letters = document.getElementById('letter-field')
            // create change event that inputs new letter value when value changes 
            letters.addEventListener('change', function(evt){
                input = evt.target.value;
            })
            // create click even for second button 
            secondButton.addEventListener('click', updateGame)
        }// create win and lose messages
    } else {
        if (currentWord === answerArray.join('')) {
            document.getElementById('message').innerHTML = "YOU WIN!"
            document.getElementById('message').style.color = 'blue'
 
        } else { 
            document.getElementById('message').innerHTML = "GAME OVER" 
            document.getElementById('message').style.color = 'red' 
        }  
    }
}

// create function to update score 

// create variable for incorrect guesses
var output = document.getElementById('guesses');

function updateGame(evt) {
    document.getElementById('form').reset()// form resets after entry
    var correct = false;
    evt.preventDefault()
    for (var j = 0; j < currentWord.length; j++) { 
        if (currentWord[j] === input) { // create loop that determines if input letter is in random word
            answerArray[j] = input; // if so, add it to array showing on screen (update)
            playGame()
            document.getElementById('wordInDiv').innerHTML = answerArray.join(' ') // puts array on screen
            correct = true // all of this means, letter is correct/ in random word
        }
    }  
    if (correct !== true) {// if letter is not correct
        wrongAnswers++;// increase wrong answers (starts at 0, can't be more than 10)
        playGame()
        wrongGuesses.push(input)// add the incorreect input to wrongGuesses array
        output.innerHTML = wrongGuesses.join(',')// display wrong guess array content on screen
    }
}   


// add "new game" button
// limit guesses to 10