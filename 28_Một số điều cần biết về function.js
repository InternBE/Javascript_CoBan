//1. Khi function đặt trùng tên
function greet() {
    return "Hello, Alice!";
  }
  
  function greet() {
    return "Hello, Bob!";
  }
  
  console.log(greet()); // Output: "Hello, Bob!"

//2. Khai báo biến trong hàm
function example() {
    let message = "Hello from inside the function!";
    console.log(message); // Output: "Hello from inside the function!"
  }
  
  example();
  console.log(message); // Error: message is not defined

  //3. Định nghĩa hàm trong hàm
function outerFunction() {
    function innerFunction() {
      return "Hello from the inner function!";
    }
  
    return innerFunction();
  }
  
  console.log(outerFunction()); // Output: "Hello from the inner function!"
  console.log(innerFunction()); // Error: innerFunction is not defined
  