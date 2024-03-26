function argCheck() {
    let lastOne;
    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i];
    }
    return lastOne;
}

console.log(argCheck("this", "is", "the", "lastOne"))