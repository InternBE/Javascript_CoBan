/*
Cú pháp
array.forEach(function(element, index, array) {
    // thực thi hành động với element
});
*/

Array.prototype.myForEach = function(callback) {
    // 'this' đại diện cho mảng đang gọi phương thức myForEach
    for (let i = 0; i < this.length; i++) {
        // Gọi hàm callback với các tham số: phần tử hiện tại, chỉ mục, và chính mảng
        callback(this[i], i, this);
    }
};

const numbers = [1, 2, 3, 4, 5];

// Sử dụng myForEach để in ra từng phần tử của mảng
numbers.myForEach(function(element, index) {
    console.log("Phần tử:", element, "vị trí:", index);
});
