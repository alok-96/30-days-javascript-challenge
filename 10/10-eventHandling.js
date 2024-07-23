// 👉 Activity 1 : Basic Event Handling

// 🧑‍💻 Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const p = document.getElementById("paragraph");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  p.textContent = "Hello World!";
});

// 🧑‍💻 Task 2: Add a double click event listener to an image that toggles its visibility.
const img = document.getElementById("js-image");

img.addEventListener("dblclick", () => {
  img.classList.toggle("hidden");
});

// 👉 Activity 2 : Mouse Events

// 🧑‍💻 Task 3: Add a mouseover event listener to an element that changes its background color.
const container = document.querySelector(".container");
container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "#5a83c7";
});

// 🧑‍💻 Task 4: Add a mouseout event listener to an element that resets its background color.
container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "#738096";
});

// 👉 Activity 3 : Keyboard Events

// 🧑‍💻 Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById("input-box");

input.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// 🧑‍💻 Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const input2 = document.getElementById("input-box2");

input2.addEventListener("keyup", (e) => {
  const p = document.getElementById("text-container");
  p.textContent = "Text present in input box is : " + input2.value;
});

// 👉 Activity 4 : Form Events

// 🧑‍💻 Task 7: Add a submit event listener to a form that prevent the default submission and logs the form
// data to the console.

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    console.log(`${key} : ${value}`);
  });

  e.target.reset(); // makes the input field empty.
});

// 🧑‍💻 Task 8: Add a change event listener to a select dropdown that displays the selected value in a
// paragraph.

const dropdownContainer = document.getElementById("dropdown-container");

dropdown.addEventListener("change", (e) => {
  console.log(e.target.value);
  const dropdown = document.getElementById("dropdown");
  dropdownContainer.textContent = "Selected Value is : " + e.target.value;
});

// 👉 Activity 5 : Events Delegation

// 🧑‍💻 Task 9: Add a click event listener to a list that logs the text content of the clicked list item
// using event delegation.
const list = document.getElementById("unordered-list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// 🧑‍💻 Task 10: Add an event listener to a parent element that listens for events from dynamically added
// child elements.

const parent = document.querySelector(".parent");
const addBtn = document.getElementById("addChild");
let count = 0;

addBtn.addEventListener("click", () => {
  const newChild = document.createElement("div");
  newChild.textContent = `Div ${count++}`;
  parent.appendChild(newChild);
});
