"use strict";

let print = (...param1) => console.log(...param1);

let descriptiveArr = ["enormous", "wavy", "wrinkly", "cantankerous", "righteous"];

describeName()

function describeName() {
    let you = prompt("Enter your name: "),
        descriptor = descriptiveArr[Math.floor(Math.random() * descriptiveArr.length)];

    print(descriptor, you);
}
