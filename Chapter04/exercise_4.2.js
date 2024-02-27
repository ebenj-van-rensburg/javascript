"use strict";

let yourAge = prompt("Enter your age: ");

yourAge = parseInt(yourAge);

let message = "";

if (yourAge >= 21) {
    message = "Welcome! You have full access to the club";
} else if (yourAge >= 19) {
    message = "Welcome, no alcohol for you";
} else {
    message = "No Entry";
}
console.log(message);