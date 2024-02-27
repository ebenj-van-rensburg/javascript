"use strict";

let people = {
    friends: []
},
    dawie = {
        firstName: "Dawie",
        lastName: "Koen",
        iD: 1234
    },
    donga = {
        firstName: "Donga",
        lastName: "Tshabalala",
        iD: 4321
    },
    sheryl = {
        firstName: "Sheryl",
        lastName: "Dreyer",
        iD: 7777
    };

people.friends.push(dawie, donga, sheryl);
console.log(people);
