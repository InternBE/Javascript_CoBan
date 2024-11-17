//1.Định nghĩa
//kiểu number:
function square(number) {
    return number * number;
}
console.log(square(5)); // Output: 25
//kiểu string
function greet(name) {
    console.log("Hello, " + name);
}
greet("Alice"); // Output: Hello, Alice
//kiểu object
function displayPerson(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
}
displayPerson({ name: "John", age: 30 });
// Output:
// Name: John
// Age: 30


//1.2. Kiểu dữ liệu của Tham số
//kiểu number:
function multiplyByTwo(value) {
    console.log(value * 2);
}
multiplyByTwo(10); // Output: 20
//kiểu string:
function showLength(text) {
    console.log("Length of string:", text.length);
}
showLength("JavaScript"); // Output: Length of string: 10

//kiểu object:
function getCountry(person) {
    console.log("Country:", person.country);
}
getCountry({ name: "Alice", country: "USA" }); // Output: Country: USA


//1.3 Tính private của Tham số
//kiểu number:
function addTen(number) {
    let result = number + 10;
    console.log(result); // Output: giá trị của number + 10
}
addTen(5); // Output: 15
//kiểu string:
function shout(name) {
    console.log(name.toUpperCase());
}
shout("alice"); // Output: ALICE
//kiểu object
function describe(person) {
    console.log(person.name + " is " + person.age + " years old.");
}
describe({ name: "Tom", age: 25 }); // Output: Tom is 25 years old.


//1.4 Một Tham số
//kiểu number:
function square(number) {
    return number * number;
}
console.log(square(4)); // Output: 16
//kiểu string:
function greet(name) {
    console.log("Hi, " + name);
}
greet("Alice"); // Output: Hi, Alice
//kiểu object:
function introduce(person) {
    console.log("This is " + person.name + " from " + person.country);
}
introduce({ name: "Alice", country: "UK" }); // Output: This is Alice from UK


//1.5 Nhiều Tham số
//kiểu number:
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

//kiểu string:
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Alice", "Johnson"); // Output: Alice Johnson

//kiểu object:
function compareAges(person1, person2) {
    console.log(person1.name + " is " + (person1.age - person2.age) + " years older than " + person2.name);
}
compareAges({ name: "Alice", age: 30 }, { name: "Bob", age: 25 });
// Output: Alice is 5 years older than Bob


//2.Truyền Tham số
//2.1  Một tham số:
function greetUser(username) {
    console.log("Welcome, " + username + "!");
}
greetUser("Alice"); // Output: Welcome, Alice!

//2.2. Hai tham số:
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50


//3. Arguments
//3.1 Đối tượng arguments:
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4)); // Output: 10

//3.2 Giới thiệu vòng for:
function printNames() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printNames("Alice", "Bob", "Charlie"); 
// Output:
// Alice
// Bob
// Charlie
