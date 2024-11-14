/*
 * CHUỖI TRONG JAVASCRIPT
 *
 * 1. Các cách tạo chuỗi
 * - Tạo chuỗi
 * - Kiểm tra data type?
 * - Nên dùng cách nào? Lý do?
 *
 * 2. Một số case sử dụng backslash (\)
 *
 * 3. Chú ý độ dài khi viết Code
 *
 * 4. Template string ES6
 *
 */

// 1. Các cách tạo chuỗi
let str1 = "Hello, World!"; // Sử dụng dấu ngoặc kép Hello, World!
let str2 = "Hello, World!"; // Sử dụng dấu nháy đơn Hello, World!
let str3 = `Hello, World!`; // Sử dụng template string (ES6) Hello, World!
let str3_1 = `${str3} x2`; //"Hello, World! x2"
console.log(typeof str1); // Kiểm tra kiểu dữ liệu

// 2. Một số case sử dụng backslash (\)
let str4 = 'He said, "Hello!"'; // Sử dụng backslash để thêm dấu ngoặc kép
let str5 = "It's a beautiful day!"; // Sử dụng backslash để thêm dấu nháy đơn

// 3. Chú ý độ dài khi viết Code
let longString =
  "This is a very long string that might be hard to read if not properly formatted.";
