// Pi
console.log('PI: ',Math.PI); // 3.141592653589793

//Euler
console.log('Euler',Math.E); // 2.718281828459045

// Căn bậc 2
console.log('Căn bậc 2 của 2',Math.SQRT2); // 1.4142135623730951

// Math.LN2 và Math.LN10 
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

//Math.LOG2E và Math.LOG10E
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518

//Các phương thức của Math

//1. Math.abs(x)
console.log('Trị tuyệt đối của -5: ',Math.abs(-5)); // 5

//2. Math.round(x) - làm tròn giá trị x đến số nguyên gần nhất.
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

//3. Math.ceil(x) - làm tròn lên số nguyên gần nhất lớn hơn hoặc bằng x.
console.log(Math.ceil(4.2)); // 5

//4. Math.floor(x) - làm tròn xuống số nguyên gần nhất nhỏ hơn hoặc bằng x.
console.log(Math.floor(4.8)); // 4

//5. Math.sqrt(x) - trả về căn bậc hai của x.
console.log('Căn bậc 2 của 16: ',Math.sqrt(16)); // 4

//6. Math.pow(x, y) - trả về lũy thừa của x mũ y (x^y).
console.log(Math.pow(2, 3)); // 8

//7. Math.max(x1, x2, ...) và Math.min(x1, x2, ...) - trả về giá trị lớn nhất và nhỏ nhất trong danh sách.
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(1, 3, 2)); // 1

//8. Math.random() - trả về một số ngẫu nhiên trong khoảng từ 0 đến 1 (không bao gồm 1).
console.log('Random: ',Math.random());

//Sinh số ngẫu nhiên trong một khoảng nhất định:
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomIntFromRange(1, 10)); // Số nguyên ngẫu nhiên từ 1 đến 10

//Math.trunc(x) - lấy phần nguyên của x (bỏ phần thập phân).
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

let radius = 5;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

console.log("Chu vi:", circumference);
console.log("Diện tích:", area);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log("Kết quả tung xúc xắc:", rollDice());

let score = 9.6;
let roundedScore = Math.round(score);
console.log("Điểm sau khi làm tròn:", roundedScore);

