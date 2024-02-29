"use strict";
// any function passed to executeFunctions gets run
function executeFunctions(executeFunction) {
    executeFunction();
    console.log("inside executeFunctions")
}

// setTimeout() will run your function once after a set millisecond timer
