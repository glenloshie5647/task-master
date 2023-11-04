/* 
 * Filename: sophisticated_program.js
 * Content: A sophisticated program demonstrating advanced JavaScript concepts.
 */

// Class definitions
class Shape {
  constructor() {
    this.color = "black";
  }
  
  setColor(color) {
    this.color = color;
  }
  
  draw() {
    console.log("Drawing a shape in " + this.color + " color");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  
  draw() {
    console.log(`
      Drawing a circle:
      - Radius: ${this.radius}
      - Color: ${this.color}`
    );
  }
}

// Function definitions
function calculateSum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function debounce(func, delay) {
  let timeoutId;
  
  return function() {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// Variables
const PI = 3.14159;
let count = 0;

// Higher-order function
function repeatAction(action, times) {
  for (let i = 0; i < times; i++) {
    action();
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded");
});

window.addEventListener("resize", debounce(function() {
  console.log("Window resized");
}, 200));

// Sample usage
const square = new Shape();
square.setColor("red");
square.draw();

const circle = new Circle(5);
circle.draw();
console.log("Circle area:", circle.calculateArea());

const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(numbers));

repeatAction(function() {
  console.log("Executing an action");
}, 3);

console.log(count);

setTimeout(() => {
  count += 5;
  console.log(count);
}, 1000);