// 1. Sử dụng var, let và const
console.log("1. Ví dụ về var, let và const:");

// Sử dụng var
var x = 10;
console.log("Giá trị của x (var):", x); 

function testVar() {
  var y = 20;
  console.log("Giá trị của y trong hàm testVar (var):", y); 
  if (true) {
    var z = 30; // biến var có phạm vi trong toàn bộ hàm testVar
  }
  console.log("Giá trị của z (var) trong hàm testVar:", z); 
}
testVar();
// console.log(y); // Lỗi: y không được định nghĩa ngoài hàm testVar

// Sử dụng let
let b1 = 5;
if (true) {
  let b2 = 10; // biến b2 chỉ tồn tại trong block if
  console.log("Giá trị của b2 trong block if (let):", b2); 
}
console.log("Giá trị của b1 ngoài block if (let):", b1); 

// let không cho phép khai báo trùng tên trong cùng một phạm vi
// let b1 = 20; // Lỗi: biến b1 đã được khai báo

// Sử dụng const
const PI = 3.14;
console.log("Giá trị của hằng số PI (const):", PI); 

const person = { name: "John" };
person.name = "Jane"; // Được phép thay đổi thuộc tính của đối tượng
console.log("Tên của person sau khi thay đổi (const):", person.name); 


// 2. Template Literals
console.log("\n2. Ví dụ về Template Literals:");
const firstName = "Alice";
const lastName = "Johnson";
const age = 30;
console.log(`Xin chào, tôi tên là ${firstName} ${lastName} và tôi ${age} tuổi.`); 

// Template literals với biểu thức tính toán
const c1 = 5;
const c2 = 10;
console.log(`Tổng của ${c1} và ${c2} là ${c1 + c2}.`); 


// 3. Multi-line String
console.log("\n3. Ví dụ về Multi-line String:");
const message = `Dòng 1
Dòng 2
Dòng 3`;
console.log("Nội dung của message:\n", message);

// Multi-line với cấu trúc HTML
const htmlTemplate = `
  <div>
    <h1>Tiêu đề</h1>
    <p>Multi-line in ES6</p>
  </div>
`;
console.log("HTML Template:\n", htmlTemplate);


// 4. Arrow Functions
console.log("\n4. Ví dụ về Arrow Functions:");

// Hàm thông thường
function sayHello() {
  console.log("Hello, world!");
}

// Arrow function
const sayHelloArrow = () => {
  console.log("Hello, world! (arrow function)");
};

sayHello();       
sayHelloArrow();  

// Arrow function với tham số và giá trị trả về ngắn gọn
const add = (x, y) => x + y;
console.log("Tổng của 5 và 10 là:", add(5, 10)); 

// Arrow function không có tham số
const greet = () => "Xin chào!";
console.log(greet()); 

// Arrow function với một tham số (không cần dấu ngoặc đơn)
const square = n => n * n;
console.log("Bình phương của 5 là:", square(5)); 


// 5. Classes
console.log("\n5. Ví dụ về Classes:");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`);
  }

  // Phương thức tính số năm đến tuổi nghỉ hưu
  yearsUntilRetirement() {
    const retirementAge = 65;
    const yearsLeft = retirementAge - this.age;
    return yearsLeft > 0 ? yearsLeft : "Đã đủ tuổi nghỉ hưu!";
  }
}

const john = new Person("John", 25);
john.greet(); 
console.log("Số năm đến tuổi nghỉ hưu:", john.yearsUntilRetirement()); 

const Mary = new Person("Mary", 65);
Mary.greet(); 
console.log("Số năm đến tuổi nghỉ hưu:", Mary.yearsUntilRetirement()); 


// 6. Default Parameter Values
console.log("\n6. Ví dụ về Default Parameter Values:");

function greetUser(name = "khách") {
  console.log(`Xin chào, ${name}!`);
}

greetUser("Alice"); 
greetUser();        

// Hàm tính tổng với tham số mặc định
function calculateTotal(price, tax = 0.05, discount = 0) {
  return price + price * tax - discount;
}

console.log("Tổng chi phí:", calculateTotal(100)); 
console.log("Tổng chi phí với giảm giá 10:", calculateTotal(100, 0.1, 10)); 
