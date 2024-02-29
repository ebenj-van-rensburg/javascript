"use strict";

function double(num) {
    return (num * 2);
}

function triple(num) {
    return (num * 3);
}

function isEvenOdd(num) {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    } else {
        null;
    }
}

function functionsCombined(aNum) {
    if (isEvenOdd(aNum)) {
        return double(aNum);
    } else if (!isEvenOdd(aNum)) {
        return triple(aNum);
    } else {
        null;
    }
}

function combinedFunction(theNum) {
    if (theNum % 2 === 0) {
        return (theNum * 2);
    } else if (theNum % 2 !== 0) {
        return (theNum * 3);
    } else {
        null;
    }
}

// difference between parameters and arguments
function tester(para1, para2) {
    return para1 + " " + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";
tester(arg1, arg2);