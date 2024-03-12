let counter = 0;

function counting(x) {
    return new Promise((resolve) => {
        counter++
        resolve(`x value ${x} counter:${counter}`)
    }, 1000);
}

async function count(x) {
    console.log(`ready ${x} counter:${counter}`);
    console.log(await counting(x));
}

for (let i = 0; i < 10; i++) {
    count(i);
}