let fruits = ["Táo", "Chuối", "Cam"];
console.log(fruits.toString()); // "Táo,Chuối,Cam"

let fruits2 = ["Táo", "Chuối", "Cam"];
console.log(fruits2.join(" - ")); // "Táo - Chuối - Cam"

let fruits3 = ["Táo", "Chuối", "Cam"];
let last = fruits3.pop();
console.log(last); // "Cam"
console.log(fruits3); // ["Táo", "Chuối"]

let fruits4 = ["Táo", "Chuối"];
fruits4.push("Cam");
console.log(fruits4); // ["Táo", "Chuối", "Cam"]

let fruits5 = ["Táo", "Chuối", "Cam"];
let first = fruits5.shift();
console.log(first); // "Táo"
console.log(fruits5); // ["Chuối", "Cam"]

let fruits6 = ["Chuối", "Cam"];
fruits6.unshift("Táo");
console.log(fruits6); // ["Táo", "Chuối", "Cam"]

let fruits7 = ["Táo", "Chuối"];
let moreFruits = ["Cam", "Dưa hấu"];
let allFruits = fruits7.concat(moreFruits);
console.log(allFruits); // ["Táo", "Chuối", "Cam", "Dưa hấu"]
