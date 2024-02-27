"use strict";

let evaluateButton = document.getElementById("evaluateButton");
evaluateButton.onclick = numberCheck;

function numberCheck() {
    let playerValue = parseInt(document.getElementById("playerValue").value),
        randValue = Math.floor(Math.random() * 1000 + 1),
        checkAlert = document.getElementById("checkAlert");
    
    if (playerValue === randValue) {
        checkAlert.innerHTML = playerValue + " is equal to " + randValue;
    } else if (playerValue < randValue){
        checkAlert.innerHTML = playerValue + " is less than " + randValue;
    } else {
        checkAlert.innerHTML = playerValue + " is greater than " + randValue;
    }
}
