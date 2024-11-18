

// 1. Tạo mảng cơ bản và kiểm tra độ dài
let arr = ["apple", "banana"];
// console.log('Độ dài của mảng: ',arr.length); // Kết quả: 2

// 2. Thay đổi độ dài của mảng
arr.length = 10;
// console.log('Độ dài mới: ',arr.length); // Kết quả: 10
// console.log(arr);        // Kết quả: ["apple", "banana", <8 empty items>]

// 3. Sử dụng vòng lặp for để lặp qua mảng
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// Kết quả: "apple", "banana", undefined x 8 lần

// 4. Sử dụng vòng lặp forEach để chỉ lặp qua phần tử thực
// arr.forEach(item => {
//     console.log(item);
// });
// Kết quả: "apple", "banana"

// 5. Tạo một mảng trống với độ dài nhất định
let emptyArr = Array(10);
// console.log(emptyArr); // Kết quả: [<10 empty items>]

// 6. Thêm phần tử vào mảng trống
// emptyArr.push("mango");
// console.log(emptyArr); // Kết quả: [<10 empty items>, "mango"]
// console.log(emptyArr.length); // Kết quả: 11

// 7. Tạo mảng với Array.from
// let filledArr = Array.from({length: 10}, (_, i) => i + 1);
// console.log(filledArr); // Kết quả: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 8. Thêm nhiều phần tử với .concat()
let arr1 = ["apple"];
let arr2 = arr1.concat("banana", "cherry");
console.log(arr2); // Kết quả: ["apple", "banana", "cherry"]
