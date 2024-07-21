// 👉 Activity 1 : Object Cereation and Access

// 🧑‍💻 Task 1 : Create an object representing a book with properties like title, author and year,
// and log the object to the console.

let book = {
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  year: "1997",
};

console.log(book);

// 🧑‍💻 Task 2 : Access and log the title and autor properties of the book object.
console.log(book.title);
console.log(book.author);

// 👉 Activity 2 : Object Methods

// 🧑‍💻 Task 3: Add a method to the book object that returns a string with the book's title and author, and
// log the result of calling this method.

book.concateTitleAndAuthor = function () {
  return `${this.title} -> ${this.author}`;
};

console.log(book.concateTitleAndAuthor());

// 🧑‍💻 Task 4: Add a method to the book object that takes a parameter (year) and update the book's year
// property, then log the updated object.

book.updateYear = function (year) {
  this.year = year;
};

console.log(book.updateYear(2003));
console.log(book);

// 👉 Activity 3 : Nested Objects

// 🧑‍💻 Task 5: Create a nested object representing a library with properties like name and books
// (an array of book object), and log the library object to the console.

const library = {
  name: "SRM Library",
  books: [
    { title: "A", year: 2000 },
    { title: "B", year: 1900 },
    { title: "C", year: 1995 },
  ],
};

console.log(library);

// 🧑‍💻 Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
for (let i = 0; i < library.books.length; i++) {
  console.log(library.books[i].title);
}

// 👉 Activity 4 : The "this" keyword

// 🧑‍💻 Task 7: Add a method to the book object that uses the "this" keyword to return a string with the
// book's title and year, and log the result of calling this method.

book.concateTitleAndYear = function () {
  return `${this.title} (${this.year})`;
};

console.log(book.concateTitleAndYear());

// 👉 Activity 5 : Object Iteration

// 🧑‍💻 Task 8: Use a for...in loop to iterate over the propertirs of the book object and log each property
// and its value.

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// 🧑‍💻 Task 9: Use "Object.keys" and "Object.values" methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
