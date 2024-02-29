"use strict";

let print = (...param1) => console.log(...param1);

function countUp(startNum) {
    print(startNum);
    if (startNum < 10) {
        countUp(++startNum);
    }
}

countUp(0);
