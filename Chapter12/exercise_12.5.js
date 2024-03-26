function checkForNum(val) {
    try {
        if (isNaN(val)) {
            throw "Type Error, is not a number";
        } else {
            console.log("Got a number");
        }
    } catch (e) {
        console.error(e);
    } finally {
        console.log("the value of `val` is:", val);
    }
}

checkForNum("sdgh");
checkForNum(12);
