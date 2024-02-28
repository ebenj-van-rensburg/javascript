"use strict";

let number,
    tries = 0;

do {
    number = prompt("enter a number: ");
    tries++;
} while ((!(number >= 0 && number > 100)) && (tries < 5));