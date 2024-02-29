"use strict";

let print = (...param1) => console.log(...param1);

let func1 = function (param) {
    print(param);
}

function func2(param) {
    print(param);
}

func1("Alterra");
func2("Obraxis")
