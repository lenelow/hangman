
Leah Enelow
Hangman
Deployed App: https://lenelow.github.io/hangman/index.html

DESCRIPTION
This project is a Hangman word game. The player generates an unknown word by clicking a button. The user is shown how many letters are in the word, and their objective is to deduce the word by inputting letters as guesses. With each letter they input, they are shown whether or not that letter is in the word. If so, they are shown how many times that letter is in the word and where it is placed in the word. If not, the letter is displayed below the word. If they guess 10 wrong letters before determing the entire word, the game is over. If not, the user wins the game. 

FEATURES
bronze:
    1) When the 'Play Hangman' button is clicked:
        a random word is generated from an array of words
        the word 'Ready?' and the 'Play Hangman' button disappear and are replaced with the random word with an underscore representing each letter 
    2) contains a form in which the user can input only one character
    5) user input is compared to the random word's letters and underscores are replaced with correctly guessed letters on screen 
    6) incorrectly guessed letters are displayed on screen
    7) player's guesses are counted
    8) 'GAME OVER' message appears when the player loses and 'YOU WIN' message appears when the player wins
    9) contains instructions on how to play the game
    10) contains an exit button that currently takes you nowhere, but would hypothetically exit the game

silver:
    1) input is restricted to numbers
    2) div that disappears when play button is clicked fades more slowly

gold:
    1) music plays when player wins/loses
    2) track wins/losses

MVP:
    1) use canvas to draw hangman as wrong letters are guessed

TECHNOLOGIES USED
    1) HTML5
    2) CSS3
    3) JavaScript
