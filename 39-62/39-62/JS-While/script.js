//Cú pháp
/*
    while (condition) {
    // Thực thi mã khi điều kiện còn đúng (true)
}
*/

//VD: 
// let count = 1;

// while (count <= 5) {
//     console.log("Lần lặp thứ: " + count);
//     count++; // Tăng biến đếm lên 1
// }
// Output: In ra "Lần lặp thứ: 1" đến "Lần lặp thứ: 5"

// Tránh vòng lặp vô tận

// while (count <= 5) {
//     console.log("Lần lặp thứ: " + count);
//     // Không tăng biến count lên -> dẫn đến vòng lặp vô tận
// }

// 1. Lặp đến khi một điều kiện được đáp ứng
// let password = "";

// while (password !== "1234") {
//     password = prompt("Nhập mật khẩu (1234): ");
// }

// console.log("Mật khẩu đúng, bạn đã đăng nhập!");


// 2. Duyệt qua mảng bằng while
const numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]); // In ra 1, 2, 3, 4, 5
    i++;
}


