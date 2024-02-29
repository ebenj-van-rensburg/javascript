"use strict";

let print = (...param1) => console.log(...param1);

let str1000 = "1000";

(function () {
    let str1000 = "one thousand";
    print(str1000);
})();

let result = (function () {
    let str1000 = "AHHHH";
    return str1000;
})();
print(result);

let changeStr1000 = function (str1) {
    let str1000 = str1;
    print("str1000 has been assigned a value of:", str1000);
};
changeStr1000("100000");

print(str1000);
