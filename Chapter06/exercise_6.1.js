"use strict";"use strict";

let print = (...param1) => console.log(...param1);

let num1 = 2,
    num2 = 5;

addNums(num1, num2);
addNums(5, 7);

function addNums(num1, num2) {
    print(num1 + num2);
}
