"use strict";

let maxValue = 5,
    randValue = Math.floor(Math.random() * 5 + 1),
    isGuessEqual = false;

while (!isGuessEqual) {
    let playerValue = prompt("Guess a number 1-5:");
        playerValue = parseInt(playerValue);
    
    if (playerValue === randValue) {
        alert("Correct Guess");
        isGuessEqual = true;
        break;
    } else if (playerValue < randValue) {
        alert("Guess too low");
    } else {
        alert("Guess too high");
    }
}
