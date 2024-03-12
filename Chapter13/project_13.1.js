"use strict";

let print = console.log;

const passwordArr = ["password", "1234", "myDog123", "secure_password"];

function login(password) {
    return new Promise((resolve, reject) => {
        if (passwordArr.includes(password)) {
            resolve(true);
        } else {
            reject(false)
        }
    })
}

function passwordCheck(password) {
    login(password)
        .then((password) => {print(`Approved: ${password}`)})
        .catch((password) => {print(`Rejected: ${password}`)})
}

passwordCheck("password"); // true
passwordCheck("passed"); // false
passwordCheck("myDog123"); // true
passwordCheck("myCat321"); // false
passwordCheck(1234); // false
passwordCheck("1234"); // true
