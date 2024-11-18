/*
do {
    // Khối lệnh cần thực thi
} while (điều kiện);
*/

let i = 1;

do {
    console.log('number:',i);
    i++;
} while (i <= 5);


let x = 10;

do {
    console.log("Giá trị của x là:", x);
} while (x < 5);


// while
let y = 10;

while (y < 5) {
    console.log("Giá trị của y là:", y);
}

// Do While
let input;

do {
    input = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));
} while (isNaN(input) || input < 1 || input > 10);

console.log("Bạn đã nhập số hợp lệ:", input);
