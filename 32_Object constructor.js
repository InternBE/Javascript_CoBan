// Giới thiệu về Object trong JavaScript
//Ví dụ 1: Object Literal
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
      console.log("Car started!");
    }
  };
  
  console.log(car.make); // Output: Toyota
  car.start(); // Output: Car started!

//Cách tạo Object Constructor
//Ví dụ 2: Tạo Object Constructor cho một đối tượng (ví dụ: Person)
function Person(name, age) {
    this.name = name; // thuộc tính name
    this.age = age;   // thuộc tính age
    
    // Phương thức greet
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Tạo một đối tượng mới từ Object Constructor
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  // Sử dụng phương thức greet
  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.

//Phân tích và mở rộng ví dụ về Object Constructor
//Thêm phương thức mới vào Object Constructor Person:
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  
    // Phương thức updateAge
    this.updateAge = function(newAge) {
      this.age = newAge;
      console.log(`${this.name} is now ${this.age} years old.`);
    };
  
    // Phương thức isAdult
    this.isAdult = function() {
      return this.age >= 18;
    };
  }
  
  // Tạo các đối tượng từ Object Constructor
  const person3 = new Person("Alice", 25);
  const person4 = new Person("Bob", 17);
  
  // Sử dụng các phương thức
  person3.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person3.updateAge(26); // Output: Alice is now 26 years old.
  console.log(person4.isAdult()); // Output: false

  //Tạo đối tượng con từ Object Constructor:
  function Student(name, age, major) {
    Person.call(this, name, age); // Kế thừa từ Person
    this.major = major; // thuộc tính mới
    
    // Phương thức hiển thị thông tin sinh viên
    this.displayInfo = function() {
      console.log(`${this.name} is majoring in ${this.major}.`);
    };
  }
  
  // Tạo đối tượng Student
  const student1 = new Student("Charlie", 21, "Computer Science");
  student1.greet(); // Output: Hello, my name is Charlie and I am 21 years old.
  student1.displayInfo(); // Output: Charlie is majoring in Computer Science.
  
