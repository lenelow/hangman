
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
var words = ["acumen", "demagogue", "flagrant", "communicate", "telephone", "idiosyncratic", "funny", "computer", "scarf", "javascript"]
var currentWord = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
var wrongAnswers = 0
var input 
var wrongGuesses =[]

// function randomly selects from "words" when "play" button clicked, creates array with _ in place of characters
button[0].addEventListener('click', drawBoard)


function isGameOver() {
    return currentWord === answerArray.join('') || wrongAnswers === 10
}

function playGame() {
    if (isGameOver() === false){
        if (currentWord !== answerArray.join('') || wrongAnswers !== 10) {
            // assign variable to button that submits letter guess
            let secondButton = document.getElementById('guess')
            var letters = document.getElementById('letter-field') 
            letters.addEventListener('change', function(evt){
                input = evt.target.value;
            })
            // create click even for second button 
            secondButton.addEventListener('click', updateGame)
        }
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

function drawBoard() {
    for (i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }  
    document.getElementById('wordInDiv').innerHTML = answerArray.join(' ') 
    playGame() 
}

// create function to update score 
// var input = document.getElementById('letter-field').value 
var output = document.getElementById('guesses');

function updateGame(evt) {
    var guesses = '';
    var correct = false;
    evt.preventDefault()
    for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === input) {
            answerArray[j] = input;
            playGame()
            document.getElementById('wordInDiv').innerHTML = answerArray.join(' ')
            correct = true
        }
    }  
    if (correct !== true) {
        wrongAnswers++;
        playGame()
        wrongGuesses.push(input)
        output.innerHTML = wrongGuesses.join(',')
    }
}

// use availableInput array to create ensure that if something other than a letter is inputed, alert('Please enter a letter.')

// var remainingLetters = currentWord.length;
// if (remainingLetters > 0) {
    
// } else if (remainingLetters = 0) {
//     alert('You win!') 
// }    

// add happy music when winning/wah wah when losing
// restrict input to letters
// make div fade when disappearing

// draw hangman

// HEAD
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext("2d")
// context.beginPath()
// context.arc(85, 85, 30, 0, 2*Math.PI);

// RIGHT ARM/LEG
// in html <canvas id="canvas" width="300" height="300"></canvas> (will need to resize
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext("2d")
// context.beginPath();
// context.moveTo(0, 100);
// context.lineTo(40, 150);
// context.stroke();

// LEFT ARM/LEG
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext("2d")
// context.beginPath();
// context.moveTo(300, 100);
// context.lineTo(150, 260);
// context.stroke();

// GALLOWS1
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext('2d')
// context.beginPath();
// context.moveTo(150, 100);
// context.lineTo(150, 300);
// context.stroke();

// BODY:
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext('2d')
// context.beginPath();
// context.moveTo(150, 100);
// context.lineTo(150, 230);
// context.stroke();

// GALLOWS2:
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext('2d')
// context.beginPath();
// context.moveTo(0, 230);
// context.lineTo(150, 230);
// context.stroke();

// GALLOWS3:
// var my_canvas = document.getElementById('canvas')
// var context = my_canvas.getContext('2d')
// context.beginPath();
// context.moveTo(120, 230);
// context.lineTo(120, 260);
// context.stroke();
