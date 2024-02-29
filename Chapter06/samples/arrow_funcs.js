"use strict";

(x, y) => x + y;

let addTwoNums = (x, y) => console.log(x + y);

(a) => a % 2 ? "odd" : "even";

let boom = function(x) {console.log(x, "goes boom")};
boom("tree");

let bigBoom = x => console.log(x, "BIG boom");

// recursive arrow function
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr1.forEach(x => console.log(x));

// spread operator ...arrToBeSpread
let spreadArr = ['be', 'fun'],
    arr2 = ['words', 'can', ...spreadArr, 'but', 'annoying'];

console.log(arr2)

let numArr = [5, 9];
addTwoNums(...spreadArr);

let multiFourNums = (a, b, c, d) => console.log(a * b * c * d);

let numArr1 = [2, 4],
    numArr2 = [4, 6];
multiFourNums(...numArr1, ...numArr2);

// rest parameters:
let print = (...param1) => console.log(param1.join(" "));
print("why", "when", "where", "what", "how");
console.log("why", "when", "where", "what", "how");
print("This" + "is" + "a" + "print" + "test");
console.log("This" + "is" + "a" + "console.log" + "test")
print(1 + 2); // needs work, might use a switch to check ...param1 for type
console.log(1 + 2);
print(1 + "2")
console.log(1 + "2")