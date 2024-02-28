"use strict";

const gridArr = [];
const cellNums = 64;
let counter = 0,
    globalRow;

for (let c = 0; c < cellNums + 1; c++) {
    if (counter % 8 == 0) {
        if (globalRow != undefined) {
            gridArr.push(globalRow);
        }
        globalRow = [];
    }
    counter++;
    globalRow.push(counter);
}

console.table(gridArr);
