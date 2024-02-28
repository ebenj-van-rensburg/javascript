"use strict";

let myWork = [],
    check = true;

for (let i = 0; i < 10; i++) {
    i % 2 ? check = false : check = true;
    myWork[i] = {
        name: "Lesson " + (i + 1),
        status: check
    }
}

console.log(myWork)
