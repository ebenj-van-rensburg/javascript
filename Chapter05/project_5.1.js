"use strict";

let buildButton = document.getElementById("buildButton");

buildButton.onclick = buildTable;

function buildTable() {
    const multiTable = [];
    let cells = (parseInt(document.getElementById("cellAmount").value) + 1),
        tableDisplay = document.getElementById("tableDisplay");
        tableDisplay.innerHTML = "";

    for (let a = 0; a < cells; a++) {
        const tempRow = [];
        for (let b = 0; b < cells; b++) {
            tempRow.push(a * b);
            if (tempRow % cells == 0) {
                multiTable.push(tempRow);
            }
        }
    }
    for (let rows of multiTable) {
        let tempDisplay = "<tr>";
        for (let cell of rows) {
            tempDisplay += "<td>" + cell + "</td>";
        }
        tempDisplay += "</tr>";
        tableDisplay.innerHTML += tempDisplay;
    }
}
