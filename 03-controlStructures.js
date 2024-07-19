// 👉 Activity 1 : If-Else Statements

// 🧑‍💻 Task 1 : Write a program to check if a number is positive, negative or zero and log the result
// to the console.

let num = -9;
if (num > 0) {
  console.log(`${num} is a positive number.`);
} else if (num < 0) {
  console.log(`${num} is a negative number.`);
} else {
  console.log("This is zero.");
}

// 🧑‍💻 Task 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result
// to the console.

let age = 21;
if (age >= 21) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}


// 👉 Activity 2 : Nested If-Else Statements

// 🧑‍💻 Task 3 : Write a program to find the largest of three numbers using nested if-else statements.

let a = 26,
  b = 54,
  c = 35;

if (a > b && a > c) {
  console.log(`${a} is the largest of three.`);
} else {
  if (b > c) {
    console.log(`${b} is the largest of three.`);
  } else {
    console.log(`${c} is the largest of three.`);
  }
}


// 👉 Activity 3 : Switch Case

// 🧑‍💻 Task 4 : Write a program that uses a switch case to determine the day of the week based on a
// number (1-7) and log the day name to the console.

let day = 4;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input.");
    break;
}

// 🧑‍💻 Task 5 : Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based
// on a score and log the grade to the console.

let score = 74;
switch (true) {
  case score >= 81:
    console.log("A");
    break;
  case score >= 61:
    console.log("B");
    break;
  case score >= 41:
    console.log("C");
    break;
  case score >= 33:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}


// 👉 Activity 4 : Conditional (Ternary Operator)

// 🧑‍💻 Task 6 : Write a program that uses ternary operator to check if a number is even or odd and log
// the result to the console.

let number = 0;
number % 2 == 0
  ? console.log(`${number} is an even number.`)
  : console.log(`${number} is an odd number.`);


// 👉 Activity 5 : Combining Conditions

// 🧑‍💻 Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4,
//  but not 100, unless also divisible by 400) and log the result to the console.

let year = 1900;
if (year % 4 == 0) {
  if (year % 100 == 0 && year % 400 != 0) {
    console.log(`${year} is not a leap year.`);
  } else {
    console.log(`${year} is a leap year.`);
  }
} else {
  console.log(`${year} is not a leap year.`);
}
