"use strict";

let print = console.log;

const input = document.querySelector(".input"),
    addBtn = document.querySelector(".add"),
    removeBtn = document.querySelector(".remove"),
    output = document.querySelector(".output"),
    list = document.querySelector(".outputList"),
    clearBtn = document.querySelector(".clear");

window.onload = getLocalStorage()

addBtn.addEventListener("click", () => {
    if (input.value.length > 0) {
        let addItem = `<li id="${input.value}">${input.value}</li>`;
        list.innerHTML += addItem
        updateLocalStorage();
    }
})

removeBtn.addEventListener("click", () => {
    if (input.value.length > 0) {
        let removeItem = document.querySelector(`#${input.value}`);
        list.removeChild(removeItem);
        updateLocalStorage();
    } else {

    }
})

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    getLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem("list", JSON.stringify(list.innerHTML))
    print(localStorage.getItem("list"))
}

function getLocalStorage() {
    list.innerHTML = JSON.parse(localStorage.getItem("list"));
}