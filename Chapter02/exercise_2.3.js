"use strict";

let sideA = prompt("Enter side a's length: "),
    sideB = prompt("Enter side b's length"),
    hypo = ((sideA ** 2) + (sideB ** 2)) ** 0.5;

alert(`The hypotenuse of the triangle is: ${hypo}`);