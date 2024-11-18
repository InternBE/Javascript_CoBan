// Cú pháp
// for (let key in object) {
//     Thực thi code cho mỗi thuộc tính
// }


// 1. Lặp qua các thuộc tính của một đối tượng
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 2. Dùng for...in với mảng
let colors = ["red", "green", "blue"];
colors.customProperty = "customValue"; // Thêm thuộc tính tùy chỉnh

for (let index in colors) {
    console.log(index + ": " + colors[index]);
}

// 3. Sử dụng hasOwnProperty để tránh các thuộc tính thừa kế

Object.prototype.country = "USA"; // Thêm thuộc tính vào prototype

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

// 4. for...in với thuộc tính thừa kế
// Tạo prototype cho Person
let PersonPrototype = {
    country: "Vietnam"
};

let human = Object.create(PersonPrototype);
human.name = "John";
human.age = 30;

for (let key in human) {
    console.log(key + ": " + human[key]);
}
