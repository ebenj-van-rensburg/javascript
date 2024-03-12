// 1. Fix the error in the following code to use the callback function:
function addOne(val) {
    return val + 1;
}
function total(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}
console.log(total(4, 5, addOne));

// 2. Write down the result of the following code: "Ready"
function checker(val) {
    return new Promise((resolve, reject) => {
        if (val > 5) {
            resolve("Ready");
        } else {
            reject(new Error("Oh no"));
        }
    });
}
checker(5)
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err); })

/* 3. What line(s) of code need to be added to the preceding function so that there
is always a result after the function runs that ensures the word done is output
into the console? */
    .finally(() => {console.log("Always print")});

// 4. Update the below code to make the function return a Promise:
function myFun() {
    return new Promise((resolve) => {
        resolve("Hello World")
    });
}
myFun()
    .then((val) => console.log(val))
    .catch((val) => console.error(val));