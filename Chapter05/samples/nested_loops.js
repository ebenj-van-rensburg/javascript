let arrOfArrs = [];

for (let i = 0; i < 5; i++) {
    arrOfArrs.push([]);
    for (let j = 0; j < 5; j++) {
        arrOfArrs[i].push([]);
        for (let n = 0; n < 5 ; n++) {
            arrOfArrs[i][j].push([]);
            for (let num = 1; num <= 10; num++) {
                arrOfArrs[i][j][n].push(num);
            }
        }
    }
}

console.log(arrOfArrs)

// loop naming allows you to break/continue/etc... at a specific scope of nested loops

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];

outer: // loop naming
for (let i = 0; i < groups.length; i++) {
    let matches = 0;
    inner: // loop naming
    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("M")) {
            matches++;
        } else {
            continue inner;
        }
        if (matches === 2) {
            console.log("Found a group with two names starting with an M: " + groups[i].join(", "));
            break outer; // will now break out of the loop named outer
        }
    }
}

outer: // loop naming
for (let group of groups) {
    let matches = 0;
    inner: // loop naming
    for (let member of group) {
        if (member.startsWith("M")) {
            matches++;
        } else {
            continue inner;
        }
        if (matches === 2) {
            console.log("Found a group with two names starting with an M: " + group.join(", "));
            break outer; // will now break out of the loop named outer
        }
    }
}

outerOf:
for (let group of groups) {
    innerOf:
    for (let member of group) {
        if (member.startsWith("M")) {
            console.log("found one starting with M:", member);
            break outerOf; // will stop once it finds 1 mamber with a name starting with M
        }
    }
}