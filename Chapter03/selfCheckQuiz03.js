/* 1. Can you use const and update values within an array?
    yes, with an array you can update the values within */

/* 2. Which property in an array gives the number of items contained in the array?
    Length returns the number of elements in the array */

/* 3. What is the output in the console? */
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0)); // -1, as it cannot find 0 and returns -1
console.log(myArr1.indexOf(3)); // 1 as the index of three is myArr1[1]

/* 4. How do you replace the second element in an array myArr =
[1,3,5,6,8,9,15] with the value 4? */
myArr = [1,3,5,6,8,9,15];
myArr[1] = 4;
console.log(myArr);

/* 5. What is the output in the console? */
const myArr2 = [];
myArr2[10] = 'test';
console.log(myArr2); 
// the entire array will show, and it has 10 empty indexes [0-9] and 'test' at [10]
console.log(myArr2[2]); 
// displays undefined as indexes [0-9] are empty


/* 6. What is the output in the console? */
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]); 
// undefined as the array has been emptied on the previous line and has no values

