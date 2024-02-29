"use strict";

function outerFunc(nr) {
    var reply = "this is :";
    console.log(reply, "outer function", nr + 2);
    innerFunc();
    function innerFunc() {
        console.log(reply, "inner function", nr + 7);
    }
}

outerFunc(2);