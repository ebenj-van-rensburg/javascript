const countPromise = new Promise((resolve) => {
    resolve("Start Counting")
})
    .then((val) => { console.log(val); return "One" })
    .then((val) => { console.log(val); return "Two" })
    .then((val) => { console.log(val); return "Three" })
    .then((val) => { console.log(val) })
    .catch((val) => { console.error(val) })

