//1. Giới Thiệu về Toán Tử 3 Ngôi (Ternary Operator)
//Cú pháp:
condition ? valueIfTrue : valueIfFalse;
//2. Cấu Trúc và Cách Sử Dụng Toán Tử 3 Ngôi
const age = 18;
const result = age >= 18 ? "Bạn đủ tuổi để lái xe." : "Bạn chưa đủ tuổi để lái xe."; 
console.log(result); // Kết quả: Bạn đủ tuổi để lái xe.

//3. Sử Dụng Ternary Operator với Biểu Thức
//Ví dụ với biểu thức
const x = 10;
const y = 20;
const max = x > y ? x : y;
console.log(max); // Kết quả: 20

//Sử dụng với giá trị chuỗi
const hour = 15;
const greeting = hour < 12 ? "Chào buổi sáng!" : "Chào buổi chiều!";
console.log(greeting); // Kết quả: Chào buổi chiều!

//4. Lồng Ternary Operator
//Ví dụ lồng toán tử 3 ngôi
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Kết quả: B

//5. Sử Dụng Ternary Operator với Functions
//Ví dụ sử dụng trong hàm
function checkEligibility(age) {
    return age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";
  }
  
  console.log(checkEligibility(20)); // Kết quả: Đủ tuổi
  console.log(checkEligibility(16)); // Kết quả: Chưa đủ tuổi

  //6. Toán Tử 3 Ngôi và Nullish Coalescing Operator
  //Ví dụ sử dụng nullish coalescing với ternary operator
  const user = {
    name: "John",
    age: undefined,
  };
  
  const age1 = user.age !== undefined ? user.age : "Age is not provided";
  console.log(age1); // Kết quả: Age is not provided

//7. So Sánh với Câu Lệnh If-Else
// Dùng if-else
let result1;
if (age >= 18) {
  result1 = "Đủ tuổi";
} else {
  result1 = "Chưa đủ tuổi";
}
console.log(result1); // Kết quả: Đủ tuổi

// Dùng toán tử 3 ngôi
const result2 = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(result2); // Kết quả: Đủ tuổi

//8. Các Lưu Ý Khi Sử Dụng Ternary Operator
//Kết Luận