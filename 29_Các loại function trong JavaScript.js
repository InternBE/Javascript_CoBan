//1. Declaration Function
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Alice")); // Output: "Hello, Alice!"
//Hoisting với Declaration Function
console.log(add(2, 3)); // Output: 5

function add(a, b) {
  return a + b;
}
//2. Expression Function
const multiply = function(a, b) {
    return a * b;
  };
  
  console.log(multiply(4, 5)); // Output: 20
//Không có Hoisting
console.log(subtract(10, 3)); // Error: subtract is not defined

const subtract = function(a, b) {
  return a - b;
};
//3. Arrow Function
const divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5
//Arrow Function với Nhiều Dòng Lệnh
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
  };
  
  console.log(calculateArea(5, 4)); // Output: 20
//Arrow Function và this
const person = {
    name: "Alice",
    sayName: function() {
      setTimeout(() => {
        console.log("Hello, " + this.name);
      }, 1000);
    }
  };
  
  person.sayName(); // Output: "Hello, Alice"
  