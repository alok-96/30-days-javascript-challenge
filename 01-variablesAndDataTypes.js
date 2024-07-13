// 👉 Activity 1 : Variable Declaration

// 🧑‍💻 Task 1 : Declare a variable using "var", assign it a number, and log the value to the console.
var num = 56;
console.log(num);

// 🧑‍💻 Task 2 : Declare a variable using "let", assign it a string, and log the value to the console.
let str = "Alok";
console.log(str);

// 👉 Activity 2 : Constant Declaration

// 🧑‍💻 Task 3 : Declare a variable using "const", assign it a boolean value, and log the value to the console.
const flag = true;
console.log(flag);


// 👉 Activity 3 : Data Types

// 🧑‍💻 Task 4 : Create variables of different data types (number, string, boolean, object, array) and 
// log each variable's type using the "typeof" operator.
console.log(num, typeof num);
console.log(str, typeof str);
console.log(flag, typeof flag);

let obj = {
    name: "Alok",
    age: 21
}
console.log(obj, typeof obj);

const arr = [4, 6, 3];
console.log(arr, typeof arr);

// 👉 Activity 4 : Reassigning Variables

// 🧑‍💻 Task 5 : Declare a variable using "let", assign it an initial value, reassign a new value and log both
// values to the console.
let score = 88;
console.log(score);
score = 96;
console.log(score);


// 👉 Activity 5 : Understanding Const

// 🧑‍💻 Task 6: Try reassigning a variable declared with "const" and observe the error.
const pi = 3.14;
// pi = 3.1416; // 🚫 assignment to constant variable
