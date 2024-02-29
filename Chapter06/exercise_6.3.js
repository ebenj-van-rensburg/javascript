"use strict";

let print = (...param1) => console.log(...param1);

basicCalculate(1, 2, "+");
basicCalculate(3, 3, "===");
basicCalculate(9, 3, "/");
basicCalculate(10, 3, "%");
basicCalculate(5, 5);

function basicCalculate(x, y, operator) {
    switch(operator) {
        case "+":
            console.log(x + y);
            break;
        case "-":
            console.log(x - y);
            break;
        case "*":
            console.log(x * y);
            break;
        case "/":
            console.log(x / y);
            break;
        case "%":
            console.log(x % y);
            break;
        case "==":
            console.log(x == y);
            break;
        case "===":
            console.log(x === y);
            break;
        case "!=":
            console.log(x != y);
            break;
        case "!==":
            console.log(x !== y);
            break;
        case ">":
            console.log(x > y);
            break;
        case ">=":
            console.log(x >= y);
            break;
        case "<":
            console.log(x < y);
            break;
        case "<=":
            console.log(x <= y);
            break;
        default:
            console.log(x + y);
            break;
    }
}
