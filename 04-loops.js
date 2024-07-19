// 👉 Activity 1 : For Loop

// 🧑‍💻 Task 1 : Write a program to print numbers from 1 to 10 using a for loop.
console.log("Numbers from 1 to 10 👉 ");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 🧑‍💻 Task 2 : Write a program to print multiplication table of 5 using a for loop.
console.log("Multiplication table of 5 👉 ");
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

// 👉 Activity 2 : While Loop

// 🧑‍💻 Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1,
  sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}

console.log(`Sum of numbers from 1 to 10 = ${sum}`);

// 🧑‍💻 Task 4 : Write a program to print numbers from 10 to 1 using a while loop.
console.log("Numbers from 10 to 1 👉 ");
i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// 👉 Activity 3 : Do...While Loop

// 🧑‍💻 Task 5 : Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("Numbers from 1 to 5 👉 ");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 🧑‍💻 Task 6 : Write a program to calculate the factorial of a numbers using a do...while loop.
let num = 5,
  factorial = 1;
i = 1;
do {
  factorial *= i;
  i++;
} while (i <= num);
console.log(`Factorial of ${num} = ${factorial}`);

// 👉 Activity 4 : Nested Loops

// 🧑‍💻 Task 7 : Write a program to print a pattern using nested for loops.
/*
 *
 **
 ***
 ****
 *****
 */

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");   // to print in console without new line 
  }
  process.stdout.write("\n");
}

// 👉 Activity 5 : Loop Control Statements

// 🧑‍💻 Task 8 : Write a program to print numbers from 1 to 10, but skip numnber 5 using the continue
// statement.

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// 🧑‍💻 Task 9 : Write a program to print numbers from 1 to 10, but stop the loop when number is 7 using
// the break statement.

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 7) break;
}
