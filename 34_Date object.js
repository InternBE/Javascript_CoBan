//1. Tổng quan về Đối tượng Date
//2. Cách Tạo Đối tượng Date

//Cách 1: Tạo Date với thời gian hiện tại
const now = new Date();
console.log("Thời gian hiện tại:", now); // Kết quả: Thời gian hiện tại

//Cách 2: Tạo Date từ chuỗi ngày giờ
//ISO Format (YYYY-MM-DD)
const date1 = new Date("2023-11-05");
console.log("Ngày tạo từ ISO:", date1); // Kết quả: Sun Nov 05 2023 ...

//Định dạng đầy đủ với giờ
const date2 = new Date("November 5, 2023 12:00:00");
console.log("Ngày tạo từ chuỗi:", date2); // Kết quả: Sun Nov 05 2023 12:00:00 GMT+...

//Cách 3: Tạo Date từ các tham số cụ thể
const date3 = new Date(2023, 10, 5, 12, 0, 0); // Lưu ý: Tháng bắt đầu từ 0 (0=Tháng 1, 10=Tháng 11)
console.log("Ngày tạo từ tham số:", date3); // Kết quả: Sun Nov 05 2023 12:00:00 ...

//Cách 4: Tạo Date từ mili-giây
const date4 = new Date(1700000000000); // 1.7 nghìn tỷ mili-giây từ 1/1/1970
console.log("Ngày tạo từ mili-giây:", date4);

//3. Các Phương thức của Đối tượng Date
//a. Lấy Thông tin Ngày và Giờ
//getFullYear(): Trả về năm đầy đủ.
const year = now.getFullYear();
console.log("Năm hiện tại:", year); // Ví dụ: 2023

//getMonth(): Trả về tháng trong năm (0 - 11, trong đó 0 là tháng 1).
const month = now.getMonth();
console.log("Tháng hiện tại:", month + 1); // +1 để hiển thị chính xác

//getDate(): Trả về ngày trong tháng (1 - 31).
const day = now.getDate();
console.log("Ngày trong tháng:", day); // Ví dụ: 5

//getDay(): Trả về ngày trong tuần (0 - 6, với 0 là Chủ Nhật).
const dayOfWeek = now.getDay();
console.log("Ngày trong tuần:", dayOfWeek); // Ví dụ: 0 cho Chủ Nhật

//Giờ, Phút, Giây và Mili-giây
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();
console.log(`Thời gian hiện tại: ${hours}:${minutes}:${seconds}:${milliseconds}`);

//b. Thiết lập Ngày và Giờ
const futureDate = new Date();
futureDate.setFullYear(2025);
futureDate.setMonth(11); // Tháng 12
futureDate.setDate(25); // Ngày 25
console.log("Ngày giờ mới:", futureDate);

//4. Định dạng Ngày và Giờ
//toDateString(): Hiển thị ngày (không có giờ).
console.log("Ngày:", now.toDateString()); // Ví dụ: "Sun Nov 05 2023"

//toTimeString(): Hiển thị giờ.
console.log("Giờ:", now.toTimeString()); // Ví dụ: "12:00:00 GMT+..."

//toISOString(): Chuỗi ISO, tiêu chuẩn dùng để lưu trữ ngày giờ quốc tế.
console.log("Ngày giờ ISO:", now.toISOString()); // "2023-11-05T12:00:00.000Z"

//5. Phép Tính Ngày và Giờ
//a. Cộng và trừ thời gian
const today = new Date();
const fiveDaysLater = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);
console.log("5 ngày sau:", fiveDaysLater);

//b. Tính Khoảng cách giữa hai ngày
const dateStart = new Date("2023-11-01");
const dateEnd = new Date("2023-11-05");
const diffTime = dateEnd - dateStart; // Mili-giây giữa hai ngày
const diffDays = diffTime / (1000 * 60 * 60 * 24); // Đổi sang ngày
console.log("Khoảng cách ngày:", diffDays); // Kết quả: 4

//6. Mẹo Sử Dụng Date Hiệu Quả