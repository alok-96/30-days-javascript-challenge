// 👉 Activity 1 : Template Literals

// 🧑‍💻 Task 1: Use template literals to create a string that includes variables for a person's name and
// age, and log the string to the console.

const name = "Alok";
const age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);

// 🧑‍💻 Task 2: Create a multi-line string using template literals and log it to the console.

const introduction = `Hi, I am ${name} from Uttar Pradesh. 
Since I born in 2003 and currently it is 2024.
Hence I am ${age} years old now.`;

console.log(introduction);

// 👉 Activity 2 : Destructuring

// 🧑‍💻 Task 3: Use array destructuring to extract the first and second elements from an array of numbers
// log them to the console.

const arr = [1, 2, 3, 4, 5];
const [firstElement, secondElement] = arr;
console.log(firstElement, secondElement);

// 🧑‍💻 Task 4: Use object destructuring to extract the title and author from a book object and log them
// to the console.

const book = {
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  year: "1997",
};

const { title, author } = book;
console.log(title, author);

// 👉 Activity 3 : Spread and Rest Operators

// 🧑‍💻 Task 5: Use the spread operator to create a new array that include all elements of an existing array
// plus additional elements and log the new array to the console.

const updatedArray = [...arr, 6, 7, 8];
console.log(updatedArray);

// 🧑‍💻 Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them
// and return the result.

function add(n1, n2, ...num) {
  let sum = 0;
  sum += n1;
  sum += n2;
  for (let i in num) sum += num[i];

  return sum;
}

console.log(add(1, 2, 3, 4, 5));

// 👉 Activity 4 : Default Parameters

// 🧑‍💻 Task 7: Write a function that takes two parameters and returns their product, with the second
// parameter having a default value of 1. Log the result of calling this function with and without the
// second parameter.

function multiplication(a, b = 1) {
  return a * b;
}

console.log(multiplication(34, 23));
console.log(multiplication(21));

// 👉 Activity 5 : Inhanced Object Literals

// 🧑‍💻 Task 8: Use enhanced object literals to create an object with methods and properties and log the
// object to the console.
const property1 = "name";
const property2 = "age";
const method1 = "greet";

const person = {
  [property1]: "Alok",
  [property2]: 21,
  [method1]() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

console.log(person);

// 🧑‍💻 Task 9: Create an object with computed property names based on variables and log the object to the
// console.
const productName = "Earbuds";
const brand = "realme";
const yearsOfWarranty = 2;

const gadget = {productName, brand, yearsOfWarranty};
console.log(gadget)