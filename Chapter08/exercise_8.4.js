"use strict";

let print = (...param1) => console.log(...param1);

let mixStr = "fIx thIS sTriNg";

function fixStr(aStr) {
    aStr = aStr.toLowerCase();
    let capStrArr = [];
    let strArr = aStr.split(" ");
    strArr.forEach(e => {capStrArr.push(e.slice(0,1).toUpperCase() + e.slice(1))});
    return capStrArr.join(" ");
}

print(fixStr(mixStr));