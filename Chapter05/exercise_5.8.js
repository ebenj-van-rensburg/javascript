"use strict";

let myOutput = "",
    skipNum = 5;

for (let i = 0; i < 10; i++) {
    if (i === skipNum) {
        continue;
    }
    myOutput += i;
}

console.log(myOutput);

myOutput = "";

for (let i = 0; i < 10; i++) {
    if (i === skipNum) {
        break;
    }
    myOutput += i;
}

console.log(myOutput);