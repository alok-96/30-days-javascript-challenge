// 👉 Activity 1 : Selecting and Manipulating Elements

// 🧑‍💻 Task 1: Select an HTML element by its ID and change its text content.
const p = document.getElementById("paragraph");
p.textContent = "The content inside this element is updated.";

// 🧑‍💻 Task 2: Select an HTML element by its class and change its background color.
const element = document.querySelector(".container");
element.style.backgroundColor = "skyblue";

// 👉 Activity 2 : Creating and Appending Elements

// 🧑‍💻 Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.className = "newDiv";
newDiv.textContent =
  "Quos nemo dolores eos voluptatibus at, numquam incidunt velit excepturi nostrum a sequi totam laborum est id voluptates officiis officia quisquam,";
document.body.appendChild(newDiv);

// 🧑‍💻 Task 4: Create a new li element and append it to an existing ul list.
const newLi = document.createElement("li");
newLi.textContent = "E";

const ul = document.querySelector("ul");

ul.appendChild(newLi);

// 👉 Activity 3 : Removing Elements

// 🧑‍💻 Task 5: Select an HTML element and remove it from the DOM.
const ele = document.querySelector(".newDiv");

document.body.removeChild(ele);

// 🧑‍💻 Task 6: Remove the last child of a specific HtML element.

ul.removeChild(ul.lastChild);

// 👉 Activity 4 : Modifying Attributes and Classes

// 🧑‍💻 Task 7: Select an HTML element and change one of its attributes(e.g., src of an img tag)
const img = document.getElementById("js-image");
img.src = "JavaScript-Blog-Cover.png";

// 🧑‍💻 Task 8: Add and remove a CSS class to/from an HTML element.
element.classList.add("newDiv");
element.classList.remove("newDiv");

// 👉 Activity 5 : Event Handling

// 🧑‍💻 Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  p.textContent = "Hello World!";
});

// 🧑‍💻 Task 10: Add a mouseover event listener to an element that changes its border color.

element.addEventListener("mouseover", () => {
  element.style.borderColor = "black";
});

element.addEventListener("mouseout", () => {
  element.style.borderColor = "grey";
});
