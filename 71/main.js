// Lấy phần tử từ DOM
let container = document.getElementById("container");

// // Thêm nội dung vào phần tử bằng innerHTML
// container.innerHTML = container.innerHTML + "<p>Đây là phần tử mới được thêm vào!</p>";

// Thêm một đoạn mã để thay thế toàn bộ phần tử bằng outerHTML
container.outerHTML = "<section id='newContainer'><p>Đây là phần tử mới thay thế div!</p></section>";

