/*
array.filter(function(element, index, array) {
  // Điều kiện kiểm tra
});
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;  // Điều kiện lọc số chẵn
// });

// console.log(evenNumbers);  // Output: [2, 4, 6, 8]


// const numbers = [10, 20, 30, 40, 50];

// const numbersGreaterThan20 = numbers.filter(function(number, index) {
//   console.log(`Vị trí: ${index}, Phần tử: ${number}`);
//   return number > 20;  // Điều kiện lọc số lớn hơn 20
// });

// console.log(numbersGreaterThan20);  // Output: [30, 40, 50]


// const students = [
//     { name: "John", score: 6 },
//     { name: "Jane", score: 8 },
//     { name: "Jim", score: 7.5 },
//     { name: "Jack", score: 9 }
//   ];
  
//   const passedStudents = students.filter(function(student) {
//     return student.score >= 7;
//   });
  
//   console.log(passedStudents);
  // Output: [{ name: "Jane", score: 8 }, { name: "Jim", score: 7.5 }, { name: "Jack", score: 9 }]
  

const users = [
    { name: "Alice", age: 25, score: 8 },
    { name: "Bob", age: 17, score: 5 },
    { name: "Charlie", age: 20, score: 9 },
    { name: "David", age: 15, score: 6 }
  ];
  
  const qualifiedUsers = users.filter(function(user) {
    return user.age > 18 && user.score > 7;
  });
  
  console.log(qualifiedUsers);
  // Output: [{ name: "Alice", age: 25, score: 8 }, { name: "Charlie", age: 20, score: 9 }]
  