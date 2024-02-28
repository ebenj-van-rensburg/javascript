"use strict";

let startCounter = 0,
    step = 3;

do {
    console.log(startCounter += step);
} while (!(startCounter >= 100))
