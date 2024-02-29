"use strict";

let print = (...param1) => console.log(...param1);

let start = 10;

function countDown(val) {
    print(val);
    if (val < 1) {
        return;
    }
    countDown(--val);
}
countDown(start);

function countDownAgain(val) {
    print(val);
    if (val > 0) {
        countDownAgain(--val);
    }
}
countDownAgain(start)