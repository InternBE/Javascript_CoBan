/*
for (let i = 0; i < outerLimit; i++) {
  // Mã code cho vòng lặp ngoài

  for (let j = 0; j < innerLimit; j++) {
    // Mã code cho vòng lặp trong
  }
}
*/

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}


const rows = 3;
const cols = 3;

for (let i = 0; i < rows; i++) {
  let row = "";  // Chuỗi để lưu các phần tử trong mỗi dòng
  for (let j = 0; j < cols; j++) {
    row += (i * cols + j + 1) + " ";  // Tính giá trị từng phần tử
  }
  console.log(row);  // In ra một dòng của ma trận
}



const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}


for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) {
    row += (i * j).toString().padStart(4, " ") + " ";
  }
  console.log(row);
}

const matrix02 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let max = matrix02[0][0]; // Giả sử giá trị ban đầu là phần tử đầu tiên

for (let i = 0; i < matrix02.length; i++) {
  for (let j = 0; j < matrix02[i].length; j++) {
    if (matrix02[i][j] > max) {
      max = matrix02[i][j];
    }
  }
}

console.log("Giá trị lớn nhất là:", max);  // Output: 9

