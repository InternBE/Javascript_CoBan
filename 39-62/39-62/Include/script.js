

let text = "Responsive web design";
console.log('Kiểm ta xem có từ web không? ',text.includes("web")); // Kết quả: true


//Check index phần tử
console.log('Kiểm ta xem từ web có phải index là 5? ',text.includes("web", 5)); // Kết quả: true
console.log('Kiểm ta xem có Responsive có phải index là 1? ',text.includes("Responsive", 1)); // Kết quả: false


//Kiểm tra xem mảng có chứa phần tử "JavaScript" hay không
let languages = ["JavaScript", "Python", "Ruby"];
console.log(languages.includes("JavaScript")); // Kết quả: true
console.log(languages.includes("C++")); // Kết quả: false

//Chỉ định index
console.log(languages.includes("Python", 2)); // Kết quả: false

// Index âm
console.log(languages.includes("Ruby", -1)); // Kết quả: true
console.log(languages.includes("JavaScript", -2)); // Kết quả: false
