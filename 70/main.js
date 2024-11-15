// Lấy phần tử từ DOM
let element = document.getElementById("myElement");

// Thêm attribute
element.setAttribute("class", "highlight");
console.log("Đã thêm class 'highlight'");

// Kiểm tra và sửa attribute
if (element.hasAttribute("class")) {
    element.setAttribute("class", "updated-highlight");
    console.log("Đã cập nhật class thành 'updated-highlight'");
} else {
    console.log("Không tìm thấy class để cập nhật");
}

// Xóa attribute
if (element.hasAttribute("class")) {
    element.removeAttribute("class");
    console.log("Đã xóa class");
} else {
    console.log("Không có class để xóa");
}
