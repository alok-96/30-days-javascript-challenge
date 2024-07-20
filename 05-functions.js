// 👉 Activity 1 : Function Declaration

// 🧑‍💻 Task 1 : Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(num) {
  return num % 2 == 0 ? "even" : "odd";
}

let res = checkEvenOrOdd(56);
console.log(`56 is an ${res} number.`);

// 🧑‍💻 Task 2 : Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
  return num * num;
}

res = calculateSquare(23);
console.log(`Square of 23 = ${res}.`);

// 👉 Activity 2 : Function Expression

// 🧑‍💻 Task 3 : Write a function expression to find the maximum of two numbers and log the result to the
// console.
const maximumOfTwo = function (a, b) {
  return a > b ? a : b;
};

res = maximumOfTwo(42, 12);
console.log(`${res} is the maximum of two.`);

// 🧑‍💻 Task 4 : Write a function expression to concatenate two strings and return the result.
const concatenationOfTwoString = function (a, b) {
  return a + b;
};

res = concatenationOfTwoString("Alok", "Dwivedi");
console.log(`Concatenation of above two string = ${res}`);

// 👉 Activity 3 : Arrow Functions

// 🧑‍💻 Task 5 : Write an arrow function to calculate the sum of two number and log the result to the console.
const sum = (a, b) => a + b;

res = sum(9, 24);
console.log(res);

// 🧑‍💻 Task 6 : Write an arrow function to check if a string contains a specific character and return a
// boolean value.

const checkForTheSpecificCharacter = (str, character) =>
  str.includes(character) ? true : false;

res = checkForTheSpecificCharacter("Alok", "o");
console.log(res);

// 👉 Activity 4 : Function Parameters and Default Values

// 🧑‍💻 Task 7 : Write a function that takes two parameters and returns their products. Provide a default
// value for the second parameter.
const product = (a, b = 1) => a * b;
console.log(product(23, 5));
console.log(product(23));

// 🧑‍💻 Task 8 : Write a function that takes a person's name and age and returns a greeting message.
// Provide a default value for the age.
const greetings = (name, age = 18) =>
  console.log(
    `Hi ${name}(${age} years), Welcome to the #30-days-javascript-challenge !`
  );

greetings("Alok", 21);
greetings("Alok");

// 👉 Activity 5 : Higher Order Functions
/* A higher-order function is a function that does at least one of the following:
1. Takes one or more functions as arguments.
2. Returns a function as its result.
*/

// 🧑‍💻 Task 9 : Write a higher order function that takes a function and a number, and calls the function
// that many times.

const greet = () => console.log("Hello World!");

const higherOrderFunction = function (fun, n) {
  return function () {
    for (let i = 0; i < n; i++) {
      greet();
    }
  };
};

const returnedFunction = higherOrderFunction(greet, 5);
returnedFunction();

// 🧑‍💻 Task 10 : Write a higher order function that takes two function and a value, applies the first
// function to the value, and then applies the second function to the result.

const calculateRadius = (d) => d / 2;
const calculateArea = (r) => 3.14 * r * r;

const calculate = function (firstFunction, secondFunction, diameter) {
  return secondFunction(firstFunction(diameter));
};

console.log(calculate(calculateRadius, calculateArea, 8));
