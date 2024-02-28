let names = ["Arnold", "John", "Daryl", "Mary", "Elliot"];

for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith("M")) {
        names.splice(i, 1);
        i--;
        continue; //
    }
    names[i] = "Hello " + names[i];
}
console.log(names);