//Cú pháp
/*
    for (const element of iterable) {
    // Thực thi code cho mỗi phần tử 'element' trong iterable
}
*/

// 1. Qua mảng:
// const fruits = ["apple", "banana", "mango"];

// for (const fruit of fruits) {
//     console.log(fruit); // In ra apple, banana, mango
// }

// 2. Qua chuỗi:
// const text = "Hello";

// for (const char of text) {
//     console.log(char); // In ra H, e, l, l, o
// }

// 3. Lặp qua Map
// const scores = new Map([
//     ["Alice", 90],
//     ["Bob", 80],
//     ["Charlie", 85]
// ]);

// for (const [name, score] of scores) {
//     console.log(name + ": " + score); // In ra Alice: 90, Bob: 80, Charlie: 85
// }

// 4. Lặp qua Set
// const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5]);

// for (const number of uniqueNumbers) {
//     console.log(number); // In ra 1, 2, 3, 4, 5
// }

// 5. So sánh for...of và for...in
// const array = ["a", "b", "c"];

// for (const index in array) {
//     console.log(index); // In ra chỉ số 0, 1, 2
// }

// for (const value of array) {
//     console.log(value); // In ra giá trị "a", "b", "c"
// }

// 6. Ví dụ về việc sử dụng for...of với Mảng 2 Chiều
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (const row of matrix) {
    for (const value of row) {
        console.log(value); // In ra 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
}

