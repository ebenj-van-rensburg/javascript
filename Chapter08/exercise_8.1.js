"use strict";

let print = (...param1) => console.log(...param1);

let decodeStr = "How's%20it%20going%3F",
    encodeStr = "How's it going?";
let decodedStr = decodeURIComponent(decodeStr),
    encodedStr = encodeURIComponent(encodeStr);

print(decodedStr);
print(encodedStr);

let uri = "http://www.basescripts.com?=Hello World",
    encoded = encodeURI(uri);

print(encoded);