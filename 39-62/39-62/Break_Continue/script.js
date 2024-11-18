let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        console.log("Tìm thấy số 3, dừng vòng lặp.");
        break;
    }
    console.log("Phần tử:", numbers[i]);
}


for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
      continue; // Bỏ qua số chẵn và tiếp tục với lần lặp tiếp theo
  }
  console.log("Số lẻ:", i);
}


let searchArray = [5, 8, 12, 18, 22];
let searchValue = 12;
let found = false;

for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === searchValue) {
        found = true;
        console.log("Tìm thấy giá trị:", searchValue);
        break;
    }
}

if (!found) {
    console.log("Không tìm thấy giá trị:", searchValue);
}


let scores = [30, 70, 85, 40, 90];

console.log("Điểm đạt:");
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 50) {
        continue; // Bỏ qua điểm dưới 50
    }
    console.log(scores[i]);
}
