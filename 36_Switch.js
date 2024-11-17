//1. Giới Thiệu về Câu Lệnh Switch
//2. Cấu Trúc Câu Lệnh Switch
switch (expression) {
    case value1:
        // Code thực thi nếu expression === value1
        break;
    case value2:
        // Code thực thi nếu expression === value2
        break;
    default:
        // Code thực thi nếu không có giá trị nào khớp
}
//3. Ví Dụ Cơ Bản về Switch
const day = 2;

switch (day) {
    case 1:
        console.log("Chủ Nhật");
        break;
    case 2:
        console.log("Thứ Hai");  // Kết quả: Thứ Hai
        break;
    case 3:
        console.log("Thứ Ba");
        break;
    case 4:
        console.log("Thứ Tư");
        break;
    case 5:
        console.log("Thứ Năm");
        break;
    case 6:
        console.log("Thứ Sáu");
        break;
    case 7:
        console.log("Thứ Bảy");
        break;
    default:
        console.log("Không phải ngày trong tuần");
}
//4. Cách Hoạt Động của Break và Default
//a. Tác dụng của break
const fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Chuối");
        break;
    case "apple":
        console.log("Táo");  // Kết quả: Táo
        break;
    case "orange":
        console.log("Cam");
        break;
    default:
        console.log("Trái cây khác");
}
//b. Tác dụng của default
const color = "green";

switch (color) {
    case "red":
        console.log("Đỏ");
        break;
    case "blue":
        console.log("Xanh dương");
        break;
    default:
        console.log("Màu khác");  // Kết quả: Màu khác
}

//5. Các Trường Hợp Đặc Biệt trong Switch
//a. So sánh Kiểu Dữ Liệu
const number = "5";

switch (number) {
    case 5:
        console.log("Giá trị là 5 (số)");
        break;
    case "5":
        console.log("Giá trị là '5' (chuỗi)");  // Kết quả: Giá trị là '5' (chuỗi)
        break;
    default:
        console.log("Giá trị khác");
}

//b. Trường hợp Không Có Break (Fall-through)
const grade = "B";

switch (grade) {
    case "A":
        console.log("Xuất sắc");
    case "B":
        console.log("Giỏi"); // Kết quả: Giỏi
    case "C":
        console.log("Khá");
    default:
        console.log("Không đạt");
}
//6. Lợi Ích của Câu Lệnh Switch
//Kết Luận