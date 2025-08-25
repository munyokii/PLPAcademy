let car = {
  model: "Nissan",
  make: "GTR",
  year: 2020,
  color: "black"
}

console.log(car);

let fruits = ["apple", "banana", "cherry"];

console.log(fruits);

// Operators
// 1. Arithmetic operators
let a = 89
let b = 56

// Addition
console.log("Addition:", a + b);

// Subtraction
console.log("Subtraction:", a - b);

// Multiplication
console.log("Multiplication:", a * b);

// Division
console.log("Division:", a / b);

// Modulus
console.log("Modulus:", a % b);

// Comparison Operators
console.log("Equal:", a == b);
console.log("Not Equal:", a != b);
console.log("Strict Equal:", a === b);
console.log("Strict Not Equal:", a !== b);
console.log("Greater Than:", a > b);
console.log("Less Than:", a < b);
console.log("Greater Than or Equal To:", a >= b);
console.log("Less Than or Equal To:", a <= b);

// Functions - named block of code that can be used
/*
function functionName(parameters) {
  code to be executed
}
*/

function greet() {
  // alert("Hello, welcome to JavaScript!");
}

greet();

/*
2. function expression
- store a function inside a variable

let variableName = function() {
  statements
}

*/

let hello = function() {
  console.log("Hi again, this is a message from a function expression");
}
hello();

/*
3. arrow function

const variableName = () => {
  statements
}
*/

const salutations = () => {
  // alert("Hi there, this is a message from an arrow function");
}

salutations();

// Parameter and Return Values
// parameters - input
// return - output

const greetUser = (name) => {
  // alert("Hello, " + name + "!");
}

greetUser("Munyoki");


// Square of a number
let squareNumber = function(num) {
  return num * num;
}



const circumference = (radius) => {
  return 2 * (22/7) * radius;
}

console.log(circumference(5));

/*
DOM - Document Object Model
Way to access and manipulate HTML elements
1. Selecting elements
getElementById()
*/

function manipulate() {
  // select items
  let body = document.getElementById("body");
  let intro = document.getElementById("intro");
  let description = document.getElementById("description");
  let btn = document.getElementById("btn");

  // begin manipulation
  body.style.backgroundColor = "lightblue";
  intro.textContent = 'This heading has been altered';
  intro.style.color = 'white';
  description.style.textDecoration = "underline";
  description.style.fontSize = "20px";
  let goodbye = document.createElement("p");
  goodbye.textContent = "Goodbye!";
  body.appendChild(goodbye);
  btn.remove();

}