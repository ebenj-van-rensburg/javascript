"use strict";

let print = (...param1) => console.log(...param1);

function factorialRecursion(val) {
    print(val);
    if (val < 0){
        return "value must be positive";
    }
    if (val == 0) {
        return 1;
    } else {
        return val * factorialRecursion(val - 1);
    }
}

print(factorialRecursion(7));
