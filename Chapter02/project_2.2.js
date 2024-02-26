"use strict";

let calculateButton = document.getElementById("calculate-bmi");

calculateButton.onclick = calculateBMI;

function calculateBMI() {
    let inches = Number(document.getElementById("inches").value),
        pounds = Number(document.getElementById("pounds").value),
        bmi = document.getElementById("bmi");

    let metres = (inches * 2.54) / 100,
        kilos = pounds / 2.2046;

    let yourBMI = Math.round(kilos / (metres * metres))

    bmi.innerHTML = yourBMI;
}
