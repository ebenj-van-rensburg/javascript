"use strict";

let myTable = [],
    myColumns = 10,
    myRows = 5,
    myCounter = 0;

for (let row = 0; row < myRows; row++) {
    let tempTable = [];
    for (let col = 0; col < myColumns; col++) {
        myCounter++;
        tempTable.push(myCounter);
    }
    myTable.push(tempTable)
}

console.table(myTable);


// let newArr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [],
//     []
// ]