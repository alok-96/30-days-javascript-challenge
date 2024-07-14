// 👉 Activity 1 : Arithmatic Operations

// 🧑‍💻 Task 1 : Write a program to add two numbers and log the result to the console.
let a = 56;
let b = 27;
console.log(`a + b = ${a + b}`);

// 🧑‍💻 Task 2 : Write a program to subtract two numbers and log the result to the console.
console.log(`a - b = ${a - b}`);

// 🧑‍💻 Task 3 : Write a program to multiply two numbers and log the result to the console.
console.log(`a * b = ${a * b}`);

// 🧑‍💻 Task 4 : Write a program to divide two numbers and log the result to the console.
console.log(`a / b = ${a / b}`);

// 🧑‍💻 Task 5 : Write a program to find the remainder when on number is divided by another and log the
// result to the console.
console.log(`a % b = ${a % b}`);


// 👉 Activity 2 : Assignment Operators

// 🧑‍💻 Task 6 : Use the "+=" operator to add a number to a variable and log the result to the console.
a += 6;
console.log(a);

// 🧑‍💻 Task 7 : Use the "-=" operator to add a number to a variable and log the result to the console.
a -= 6;
console.log(a);


// 👉 Activity 3 : Comparison Operators

// 🧑‍💻 Task 8 : Write a program to compare two numbers using ">" and "<" and log the result to the console.
let c = 12;
let d = 9;
console.log(c > d);
console.log(c < d);

// 🧑‍💻 Task 9 : Write a program to compare two numbers using ">=" and "<=" and log the result to the console.
console.log(c >= d);
console.log(c <= d);

// 🧑‍💻 Task 10 : Write a program to compare two numbers using "==" and "===" and log the result to the console.
let e = 12;
let f = "12";
console.log(e == f);
console.log(e === f); // checks the datatype too


// 👉 Activity 4 : Logical Operators

// 🧑‍💻 Task 11 : Write a program that uses the "&&" operator to combine two conditions and log the result
// to the console.

let age = 18;
let nationality = "Indian";
if (age >= 18 && nationality == "Indian") console.log("You can vote.");
else console.log("You can't vote.");

// 🧑‍💻 Task 12 : Write a program that uses the "||" operator to combine two conditions and log the result
// to the console.

let hasAadhar = true;
let hasPan = false;
if (hasAadhar || hasPan)
  console.log("You are eligible to open an account in SBI.");
else console.log("You are not eligible to open an account in SBI.");

// 🧑‍💻 Task 13 : Write a program that uses the "!" operator to negate a conditions and log the result
// to the console.

let hasLegInjury = true;
if (!hasLegInjury) console.log("You can partcipate in race competition.");
else console.log("You can't partcipate in race competition.");


// 👉 Activity 5 : Logical Operators

// 🧑‍💻 Task 14 : Write a program that uses the ternary operator to check if a number is positive or negative
// and log the result to the console.

let num = 25;
ans = num > 0 ? "positive" : "negative";
console.log(`${num} is a ${ans} number.`);
