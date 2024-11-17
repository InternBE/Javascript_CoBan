//1. Giới thiệu về Object trong JavaScript
//Ví dụ cơ bản về Object:
const person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

//2. Cách tạo Object
//Cách 1: Object literal
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

//Cách 2: new Object()
const book = new Object();
book.title = "JavaScript Basics";
book.author = "John Doe";
book.year = 2021;

//3. Truy cập vào các giá trị trong Object
//Dot Notation - Dấu chấm
console.log(person.name); // "Alice"
console.log(car.model);   // "Camry"

//Bracket Notation - Dấu ngoặc vuông
const property = "age";
console.log(person[property]);  // 30
console.log(car["brand"]);      // "Toyota"

//4. Thêm, Sửa và Xóa thuộc tính của Object
//Thêm thuộc tính mới
person.job = "Engineer";
console.log(person.job); // "Engineer"

//Sửa thuộc tính
person.age = 31;
console.log(person.age); // 31

//Xóa thuộc tính
delete person.isEmployed;
console.log(person.isEmployed); // undefined

//5. Vòng lặp trong Object - for...in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 31
// job: Engineer

//6. Phương thức (Method) trong Object
const rectangle = {
    length: 10,
    width: 5,
    area: function() {
        return this.length * this.width;
    }
};
console.log(rectangle.area()); // 50

//7. Các Object có sẵn trong JavaScript
//Ví dụ với Math
console.log(Math.PI); // 3.14159...
console.log(Math.sqrt(16)); // 4

//Ví dụ với Date:
const today = new Date();
console.log(today.toDateString()); // Output: "Sat Nov 01 2024"

//8. Kỹ thuật Destructuring trong Object
const student = { name: "Bob", age: 22, grade: "A" };
const { name, age } = student;
console.log(name); // "Bob"
console.log(age);  // 22

//9. Object Shorthand trong JavaScript
const brand = "Ford";
const model = "Mustang";
const year = 2022;

const vehicle = { brand, model, year };
console.log(vehicle); 
// Output: { brand: "Ford", model: "Mustang", year: 2022 }

//10. Một số phương thức hữu ích của Object
//Object.keys()
console.log(Object.keys(person)); 
// Output: ["name", "age", "job"]

//Object.values()
console.log(Object.values(person)); 
// Output: ["Alice", 31, "Engineer"]

//Object.entries()
console.log(Object.entries(person)); 
// Output: [["name", "Alice"], ["age", 31], ["job", "Engineer"]]

//Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 4, c: 5 }

//11. Tính kế thừa trong Object
const animal = { type: "mammal" };
const dog = Object.create(animal);
dog.breed = "Labrador";

console.log(dog.breed); // "Labrador"
console.log(dog.type);  // "mammal" (được thừa kế từ animal)
