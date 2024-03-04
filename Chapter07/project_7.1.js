"use strict";

let print = (...param1) => console.log(...param1);

class EmployeeTracker {
    #firstname
    #lastName
    #idNum
    constructor(firstName, lastName, idNum, yearsWorked) {
        this.#firstname = firstName;
        this.#lastName = lastName;
        this.#idNum = idNum;
        this.yearsWorked = yearsWorked
    }

    get firstName() {
        return this.#firstname;
    }
    set firstName(firstName) {
        this.#firstname = firstName;
    }

    get lastName() {
        return this.#lastName;
    }
    set lastName(lastName) {
        this.#lastName = lastName;
    }

    get idNum() {
        return this.#idNum;
    }
    set idNum(idNum) {
        this.#idNum = idNum;
    }
}

let employee1 = new EmployeeTracker("John", "Smith", 1324, 3),
    employee2 = new EmployeeTracker("Jane", "Doe", 3261, 5);

let employeeArr = [employee1, employee2];

EmployeeTracker.prototype.getDetails = function () {
    print(this.firstName, this.lastName, "has worked here for", this.yearsWorked, "years.");
}

employeeArr.forEach(i => i.getDetails());
