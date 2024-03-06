"use strict";

let print = (...param1) => console.log(...param1);

let vowelStr = "I love JavaScript";
    vowelStr = vowelStr.toLowerCase();
let vowelArr = ["a", "e", "i", "o", "u"];

vowelArr.forEach((e, i) => vowelStr = vowelStr.replaceAll(e, i));

print(vowelStr);