"use strict";

let playButton = document.getElementById("playButton");

playButton.onclick = rockPaperScissors;

function rockPaperScissors() {
    let playerRPS = document.getElementById("rpsOptions").value,
        rps = ["rock", "paper", "scissors"],
        compRPS = rps[Math.floor(Math.random() * rps.length)],
        rpsDisplay = document.getElementById("rpsDisplay");

    if (playerRPS === compRPS) {
        rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>It's a TIE!"
    } else if (playerRPS === "rock") {
        if (compRPS === "paper") {
            rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>Paper beats Rock! Computer WINS!";
        } else {
            rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>Rock beats Scissors! Player WINS!";
        }
    } else if (playerRPS === "paper") {
        if (compRPS === "scissors") {
            rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>Scissors beats Paper! Computer WINS!";
        } else {
            rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>Paper beats Rock! Player WINS!";
        }
    } else if (playerRPS === "scissors") {
        if (compRPS === "rock") {
            rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>Rock beats Scissors! Computer WINS!";
        } else {
            rpsDisplay.innerHTML = "Computer picked: " + compRPS + "<br>Scissors beats Paper! Player WINS!";
        }
    } else {
        rpsDisplay.innerHTML = "ERROR";
    }
}
