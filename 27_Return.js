//1. Khái niệm về return
function add(a, b) {
    return a + b;
  }
  let sum = add(3, 4); // sum nhận giá trị trả về là 7
//2. Cách hoạt động của return
function sayHello() {
    console.log("Hello");
  }
  let result = sayHello(); // result là undefined vì không có return
//3. Một số ví dụ về return
//3.1 Trả về giá trị đơn giản
function square(x) {
    return x * x;
  }
  console.log(square(5)); // Output: 25
//3.2 Trả về chuỗi
function greet(name) {
    return "Hello, " + name + "!";
  }
  console.log(greet("Alice")); // Output: "Hello, Alice!"
//3.3 Trả về một đối tượng
function createPerson(name, age) {
    return { name: name, age: age };
  }
  console.log(createPerson("Bob", 25)); // Output: { name: "Bob", age: 25 }
//4. Các trường hợp sử dụng return
//4.1 Kết thúc sớm với return
function checkNumber(num) {
    if (num < 0) return "Negative";
    return "Positive or Zero";
  }
  console.log(checkNumber(-5)); // Output: "Negative"
  console.log(checkNumber(5)); // Output: "Positive or Zero"
//4.2 Trả về một hàm khác
function createMultiplier(multiplier) {
    return function (x) {
      return x * multiplier;
    };
  }
  let double = createMultiplier(2);
  console.log(double(5)); // Output: 10
  