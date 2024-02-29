"use strict";

let print = (...param1) => console.log(...param1);

let one = () => print("one");
let two = () => print("two");
let threeAnd = () => {
    print("three");
    one();
    two();
}
let four = () => {
    print("four");
    setTimeout(one);
    threeAnd();
};

four();
