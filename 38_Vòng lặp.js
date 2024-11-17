//Giới thiệu về Vòng lặp trong JavaScript
//1. Vòng lặp for
for (let i = 0; i < 5; i++) {
    console.log("Lần lặp thứ:", i);
}
// Lần lặp thứ: 0
// Lần lặp thứ: 1
// Lần lặp thứ: 2
// Lần lặp thứ: 3
// Lần lặp thứ: 4

//2. Vòng lặp while
let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++;
}
// Count is: 0
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4


//3. Vòng lặp do...while
let number = 0;
do {
    console.log("Number is:", number);
    number++;
} while (number < 5);
// Number is: 0
// Number is: 1
// Number is: 2
// Number is: 3
// Number is: 4

//4. Vòng lặp for...of
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
// red
// green
// blue


//5. Vòng lặp for...in
const person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// name: John
// age: 30
// city: New York

//6. Ứng dụng trong bài toán thực tế
//Ví dụ 1: Tính tổng các số trong mảng
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log("Tổng là:", sum);
//Tổng là: 15

//Ví dụ 2: Duyệt các thuộc tính của đối tượng
const user = {
    name: "Alice",
    age: 25,
    occupation: "Developer"
};

for (let key in user) {
    console.log(key + ": " + user[key]);
}
// name: Alice
// age: 25
// occupation: Developer
