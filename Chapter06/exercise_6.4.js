"use strict";

let print = (...param1) => console.log(...param1);

let calcArr = [];

for (let i = 0; i < 10 ;i++) {
    calcArr.push(basicCalculate(i * 5, i * i, "+"));
}

print(calcArr);

function basicCalculate(x, y, operator) {
    switch(operator) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "%":
            return x % y;
        case "==":
            return x == y;
        case "===":
            return x === y;
        case "!=":
            return x != y;
        case "!==":
            return x !== y;
        case ">":
            return x > y;
        case ">=":
            return x >= y;
        case "<":
            return x < y;
        case "<=":
            return x <= y;
        default:
            return x + y;
    }
}