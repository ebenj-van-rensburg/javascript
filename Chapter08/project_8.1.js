"use strict";

let print = (...param1) => console.log(...param1);

let myWord = "banana";

function wordScrambler(str) {
    let strLen = str.length,
        scrambledWord = "";
    let strArr = str.split("");
    for (let i = 0; i < strLen; i++) {
        let randChar = strArr[Math.floor(Math.random() * strArr.length)];
        scrambledWord += randChar;
        strArr.splice(strArr.indexOf(randChar), 1);
    }
    return scrambledWord;
}

print(wordScrambler(myWord));
