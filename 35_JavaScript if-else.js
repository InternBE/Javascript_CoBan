//1. Giới thiệu về Câu lệnh Rẽ nhánh
//2. Cấu trúc Câu lệnh If - Else trong JavaScript
//a. Câu lệnh If
const age = 18;

if (age >= 18) {
    console.log("Bạn đủ tuổi để lái xe."); // Kết quả: Bạn đủ tuổi để lái xe.
}
//b. Câu lệnh If - Else
const age1 = 16;

if (age1 >= 18) {
    console.log("Bạn đủ tuổi để lái xe.");
} else {
    console.log("Bạn chưa đủ tuổi để lái xe."); // Kết quả: Bạn chưa đủ tuổi để lái xe.
}

//c. Câu lệnh If - Else If - Else
const score = 85;

if (score >= 90) {
    console.log("Xếp loại: Xuất sắc");
} else if (score >= 75) {
    console.log("Xếp loại: Giỏi"); // Kết quả: Xếp loại: Giỏi
} else if (score >= 60) {
    console.log("Xếp loại: Khá");
} else {
    console.log("Xếp loại: Trung bình");
}
//3. Các Toán tử So Sánh trong Điều kiện
const a = 10;
const b = "10";

if (a == b) {
    console.log("a và b có giá trị bằng nhau");
}

if (a === b) {
    console.log("a và b có giá trị và kiểu dữ liệu bằng nhau");
} else {
    console.log("a và b không có cùng kiểu dữ liệu"); // Kết quả: a và b không có cùng kiểu dữ liệu
}

//4. Sử dụng Điều kiện Phức tạp
const age2 = 25;
const isMember = true;

if (age2 >= 18 && isMember) {
    console.log("Bạn có quyền truy cập"); // Kết quả: Bạn có quyền truy cập
} else {
    console.log("Bạn không có quyền truy cập");
}

//5. Lồng Ghép Câu lệnh If - Else
const age3 = 20;
const country = "Vietnam";

if (country === "Vietnam") {
    if (age3 >= 18) {
        console.log("Bạn đủ tuổi lái xe tại Việt Nam"); // Kết quả: Bạn đủ tuổi lái xe tại Việt Nam
    } else {
        console.log("Bạn chưa đủ tuổi lái xe tại Việt Nam");
    }
} else {
    console.log("Chúng tôi không có thông tin về quy định lái xe của quốc gia bạn");
}
