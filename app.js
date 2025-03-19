// Variables
let wordList = ["ant", "aunt", "there", "their", "they're",
    "brake", "break", "your", "you're", "beat",
    "beet", "sail", "sale", 'bare', "bear",
    "license", "distance", "yesterday", "clothes", "close"
]
let randomNumber
let selectedWord
let currentGuess
let lettersGuessed = []
let numberFailedGuesses = 0
let guessTracker = document.getElementById('guessTracker')

let background = document.getElementById('hangman')
const gameBoard = document.getElementById("gameBoard")
const wordContainer = document.getElementById("word-container")
const submit = document.getElementById('submit')


// Functions

function runGame() {
    rando()
    createLetters()  
}

// generate random number
function rando() {
    randomNumber = Math.floor(Math.random() * (wordList.length))
    selectedWord = wordList[randomNumber]
}



// create letters
function createLetters() {
    let i = 0
    selectedWord.split("").forEach(letter => {
    const newLetter = document.createElement('div')
    newLetter.classList.add('letter')
    newLetter.id = i
    i++
    wordContainer.appendChild(newLetter)
    })
}

// submit letter
function submitLetter() {
    // only works until the game is over    
   if(numberFailedGuesses <= 5) {
    // submit current guess
    currentGuess = document.getElementById("letter").value
    console.log(currentGuess)
    // add current guess to guesses array
    lettersGuessed.push(currentGuess)
    console.log(lettersGuessed)


    checkGuess()
    changeBackground()
    trackGuesses()
    youLose()
   }



}

//check to see if the letter the player guessed is in the selected word
function checkGuess() {
    let a = 0
    for(let i = 0; i < selectedWord.length; i++) {
        if(selectedWord[i] === currentGuess ) {
            const letter = document.getElementById(i)
            letter.innerHTML = currentGuess
            a++
        } 
    }

    if (a === 0) {
        numberFailedGuesses++
    }

}

//track and display the letters that have been guessed
function trackGuesses() {
    guessTracker.innerHTML = lettersGuessed
    console.log(lettersGuessed)
}

//change the hangman as the player makes incorrect guesses
function changeBackground() {
    if(numberFailedGuesses === 1) {
        background.src = "images/2.png"
    } else if(numberFailedGuesses === 2) {
        background.src = "images/3.png"
    } else if(numberFailedGuesses === 3) {
        background.src = "images/4.png"
    } else if(numberFailedGuesses === 4) {
        background.src = "images/5.png"
    } else if(numberFailedGuesses === 5) {
        background.src = "images/6.png"
    } else if(numberFailedGuesses === 6) {
        background.src = "images/7.png"
    }
     
        
}


//display a "you lose" message
function youLose() {
    if(numberFailedGuesses === 6) {
        wordContainer.remove()
        guessTracker.innerHTML = "You Lose.  Game Over"
    }
}
//start game
runGame()