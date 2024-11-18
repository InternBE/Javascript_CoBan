
//1. Vòng lặp lồng nhau

const matrix = [
  [5, 12, 7],
  [9, 4, 2],
  [3, 15, 8]
];

let maxValue = matrix[0][0];

for (const row of matrix) {
  for (const value of row) {
      if (value > maxValue) {
          maxValue = value;
      }
  }
}

console.log("Giá trị lớn nhất trong mảng 2D là:", maxValue);

//2. Vòng lặp vô tận và cách dừng với break
let num = 51; // Bắt đầu từ 51

while (true) { // Vòng lặp vô hạn
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Số nguyên tố nhỏ nhất lớn hơn 50 là:", num);
        break;
    }

    num++;
}


//3. Sử dụng continue để bỏ qua lần lặp hiện tại
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) { // Nếu là số chẵn, bỏ qua lần lặp này
      continue;
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9


//4. Vòng lặp với điều kiện để chọn các phần tử thỏa mãn điều kiện
const numbers4 = [3, 15, 7, 12, 9, 20, 5];

for (const num of numbers4) {
    if (num > 10) {
        console.log(num);
    }
}
// Output: 15, 12, 20


//5. Tối ưu hóa vòng lặp để giảm độ phức tạp
const numbers5 = [5, 3, -2, 9, 8];
let hasNegative = false;

for (const num of numbers5) {
    if (num < 0) {
        hasNegative = true;
        break; // Dừng vòng lặp khi gặp số âm
    }
}

console.log("Có số âm trong danh sách:", hasNegative);

//6. Sử dụng forEach, map, filter để tối ưu hóa
const numbers6 = [3, 15, 7, 12, 9, 20, 5];
const filteredNumbers = numbers6.filter(num => num > 10);

console.log("Các số lớn hơn 10:", filteredNumbers);
// Output: Các số lớn hơn 10: [15, 12, 20]

//7. Bài tập thực hành nâng cao
const matrix7 = [
  [5, 12, 7],
  [9, 4, 2],
  [3, 15, 8]
];

let maxValue7 = null;

for (let rowIndex = 0; rowIndex < matrix7.length; rowIndex++) {
  if (rowIndex % 2 === 0) { // Xét các hàng chẵn
      for (let colIndex = 0; colIndex < matrix7[rowIndex].length; colIndex++) {
          if (colIndex % 2 !== 0) { // Xét các cột lẻ
              if (maxValue7 === null || matrix7[rowIndex][colIndex] > maxValue7) {
                  maxValue7 = matrix7[rowIndex][colIndex];
              }
          }
      }
  }
}

console.log("Số lớn nhất tại hàng chẵn, cột lẻ là:", maxValue);

