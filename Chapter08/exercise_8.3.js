"use strict";

let print = (...param1) => console.log(...param1);

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    mapNumArr = numArr.map(x => x * 2);

print(mapNumArr)