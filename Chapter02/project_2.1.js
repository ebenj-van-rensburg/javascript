"use strict";

let convertButton = document.getElementById("convert-ml-km");

convertButton.onclick = calcKilos;

function calcKilos() {
    let miles = Number(document.getElementById("miles").value),
        kilometer = document.getElementById("kilometers");

    let kilos = miles * 1.60934;

    kilometer.innerHTML = kilos;
}
